"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { School } from "@/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { PencilIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface TitleFormProps {
  initialData: School;
  schoolId: string;
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

function TitleForm({ initialData, schoolId }: TitleFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: initialData.name },
  });

  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/school/update-school`, values);
      toast.success("School Updated Successfully");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        School Name
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditing ? (
            <>Cancle</>
          ) : (
            <>
              <PencilIcon className="h-4 w-4" />
              Edit Name
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          <p className="text-smmt-2">{initialData.name}</p>
        </>
      )}
      {isEditing && (
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
                      disabled={isSubmitting}
                      placeholder="e.g. 'Advanced web dev'"
                      {...field}
                      className="rounded-sm border-black border-2 bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}

export default TitleForm;
