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
import { useUser } from "@clerk/nextjs";

interface AddReviewDialogProps {
  btnText: string;
  entityId: string;
  entityType: "school" | "branch";
}

export default function AddReviewDialog({
  btnText,
  entityId,
  entityType,
}: AddReviewDialogProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const isSchoolUser =
    isLoaded && isSignedIn && user?.publicMetadata.role === "SCHOOL";

  const formSchema = z.object({
    rating: z.coerce
      .number()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating cannot exceed 5"),
    comment: z.string().optional(),
    entityId: z.string(),
    userId: z.string(),
    entityType: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      entityId,
      userId: user?.id || "",
      entityType,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isSchoolUser) {
      return;
    }
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

  const handleTriggerClick = async () => {
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }

    // Fetch user's public metadata from Clerk
    const { publicMetadata } = user;

    if (publicMetadata.role === "SCHOOL") {
      // Schools are not allowed to add reviews
      form.setError("root", {
        message: "Schools are not allowed to add reviews",
      });
      return;
    }

    setIsOpen(true);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

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
                disabled={isSchoolUser || isPending}
              />

              <InputField
                name="comment"
                label="Comment (Optional)"
                placeholder="Enter your comment"
                disabled={isSchoolUser || isPending}
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
