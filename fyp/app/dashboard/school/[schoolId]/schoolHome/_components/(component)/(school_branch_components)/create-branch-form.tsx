"use client";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2, PencilIcon, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { School, SchoolBranch } from "@/generated/prisma";
import SchoolBranchList from "./school_branch_list";

interface ChapterFormProps {
  initialData: School & { schoolBranch: SchoolBranch[] };
  schoolId?: string;
}
const formSchema = z.object({
  name: z.string().min(1),
});
function CreateBranch({ initialData, schoolId }: ChapterFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "" },
  });
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const toggleCreating = () => {
    setIsCreating(!isCreating);
  };
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/school/${schoolId}/school-branch`, values);
      toast.success("Chapter Creating");
      toggleCreating();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  console.log(initialData);
  return (
    <div className="relative mt-6 border bg-slate-100 rounded-md p-4">
      {isUpdating && (
        <div className="absolute h-full w-full bg-slate-500/20 top-0 right-0 rounded-m flex items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-sky-700 transition" />
        </div>
      )}
      <div className="font-medium flex items-center justify-between">
        School Branch
        <Button onClick={toggleCreating} variant={"ghost"}>
          {isCreating ? (
            <>Cancle</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4" />
              Create Branch
            </>
          )}
        </Button>
      </div>
      {isCreating && (
        // <>abc</>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-sm border-black border-2 bg-white"
                      disabled={isSubmitting}
                      placeholder="e.g. Model Public Branch 1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={!isValid || isSubmitting} type="submit">
              Create
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div
          className={cn(
            "text-sm mt-2",
            !initialData.schoolBranch.length && "text-slate-500 italic"
          )}
        >
          {!initialData.schoolBranch.length ? (
            <>No Branches</>
          ) : (
            <>
              <SchoolBranchList
                initialData={initialData.schoolBranch}
                schoolId={initialData.userId}
              />{" "}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CreateBranch;
