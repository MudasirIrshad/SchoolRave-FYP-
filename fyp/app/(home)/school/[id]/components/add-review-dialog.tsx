"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import InputField from "@/components/form/input-field";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { z } from "zod";
import { addReview } from "@/app/(home)/school/[id]/action";
import { useRouter } from "next/navigation";

interface AddReviewDialogProps {
  btnText: string;
  schoolId: string;
  userId: string | null;
}

export default function AddReviewDialog({
  btnText,
  schoolId,
  userId,
}: AddReviewDialogProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const formSchema = z.object({
    rating: z.coerce
      .number()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating cannot exceed 5"),
    comment: z.string().optional(),
    schoolId: z.string(),
    userId: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      schoolId,
      userId: userId || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsPending(true);
      const result = await addReview(values);

      if (result?.error) {
        form.setError("root", { message: result.error });
      } else {
        form.reset();
        setIsOpen(false);
      }
    } catch (error) {
      form.setError("root", {
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    } finally {
      setIsPending(false);
    }
  };

  const handleTriggerClick = () => {
    if (!userId) {
      router.push("/sign-in");
      return;
    }
    setIsOpen(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={handleTriggerClick}>{btnText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Add New Review</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full max-h-[calc(90vh-80px)] pr-4">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <InputField
                name="rating"
                label="Rating"
                type="number"
                placeholder="Enter rating (1-5)"
              />

              <InputField
                name="comment"
                label="Comment (Optional)"
                placeholder="Enter your comment"
                // isTextArea
              />

              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? "Submitting..." : "Submit"}
              </Button>
              {form.formState.errors.root && (
                <div className="text-red-500">
                  {form.formState.errors.root.message}
                </div>
              )}
            </form>
          </FormProvider>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
