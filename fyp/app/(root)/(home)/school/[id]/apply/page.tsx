// app/admission/apply/components/AdmissionForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { submitAdmission } from "@/actions/submitAdmission";
import { FileUpload } from "@/components/file-upload";
import { useAuth } from "@clerk/nextjs";
import { useParams } from "next/navigation";

// Define form schema
const formSchema = z.object({
  studentName: z.string().min(2, {
    message: "Student name must be at least 2 characters.",
  }),
  studentAge: z.number().int().positive().min(1, {
    message: "Student age must be at least 1.",
  }),
  dateOfBirth: z.date(),
  requestedClass: z.string().min(1, {
    message: "Please select a class.",
  }),
  guardianName: z.string().min(2, {
    message: "Guardian name must be at least 2 characters.",
  }),
  nicNumber: z.string().min(10, {
    message: "NIC number must be at least 10 characters.",
  }),
  guardianQualification: z.string().min(2, {
    message: "Qualification must be at least 2 characters.",
  }),
  guardianOccupation: z.string().min(2, {
    message: "Occupation must be at least 2 characters.",
  }),
  monthlyIncome: z.string().min(1, {
    message: "Please enter monthly income.",
  }),
  religion: z.string().min(2, {
    message: "Religion must be at least 2 characters.",
  }),
  nationality: z.string().min(2, {
    message: "Nationality must be at least 2 characters.",
  }),
  postalAddress: z.string().min(5, {
    message: "Postal address must be at least 5 characters.",
  }),
  presentAddress: z.string().min(5, {
    message: "Present address must be at least 5 characters.",
  }),
  telephoneNumber: z.string().min(6, {
    message: "Telephone number must be at least 6 characters.",
  }),
  mobileNumber: z.string().min(10, {
    message: "Mobile number must be at least 10 characters.",
  }),
  disabilityNature: z.string().optional(),
  disabilityOnsetDate: z.date().optional(),
  disabilityCause: z.string().optional(),
  documents: z.array(z.string()).min(1, {
    message: "Please upload at least one document.",
  }),
});

export default function AdmissionForm() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userId } = useAuth();
  const params = useParams();
  const schoolId = params.id;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      studentAge: undefined,
      dateOfBirth: new Date(),
      requestedClass: "",
      guardianName: "",
      nicNumber: "",
      guardianQualification: "",
      guardianOccupation: "",
      monthlyIncome: "",
      religion: "",
      nationality: "",
      postalAddress: "",
      presentAddress: "",
      telephoneNumber: "",
      mobileNumber: "",
      disabilityNature: "",
      disabilityCause: "",
      documents: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    console.log("VALUES URLLLLL:", schoolId);
    console.log("VALUES DNAGER:", values);
    try {
      const response = await submitAdmission({
        ...values,
        schoolId,
        submitterId: userId,
        studentImageUrl: uploadedFiles[0] || "", // Assuming first file is student image
        documents: uploadedFiles,
      });

      if (response.success) {
        toast.success("Application Submitted");
        // toast({
        //   title: "Application Submitted",
        //   description:
        //     "Your admission application has been submitted successfully.",
        // });
      } else {
        toast.error(response.message || "Failed to submit application.");
        // toast({
        //   title: "Error",
        //   description: response.message || "Failed to submit application.",
        //   variant: "destructive",
        // });
      }
    } catch (error) {
      console.log(error);
      toast.error("An unexpected error occurred.");
      // toast({
      //   title: "Error",
      //   description: "An unexpected error occurred.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-4">
        {/* Student Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Student Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter student name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="studentAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter student age"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        field.onChange(isNaN(value) ? undefined : value);
                      }}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requestedClass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requested Class</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a class" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="grade1">Grade 1</SelectItem>
                      <SelectItem value="grade2">Grade 2</SelectItem>
                      <SelectItem value="grade3">Grade 3</SelectItem>
                      <SelectItem value="grade4">Grade 4</SelectItem>
                      <SelectItem value="grade5">Grade 5</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Guardian Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Guardian Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="guardianName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter guardian name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nicNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIC Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter NIC number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guardianQualification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qualification</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter qualification" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guardianOccupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter occupation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="monthlyIncome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Income</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter monthly income" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Personal Details Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Religion</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter religion" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter nationality" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter postal address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="presentAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Present Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter present address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telephoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telephone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter telephone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter mobile number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Disability Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Disability Information (If Applicable)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="disabilityNature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nature of Disability</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter nature of disability"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="disabilityOnsetDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Onset Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="disabilityCause"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cause of Disability</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter cause of disability" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Documents Upload Section */}

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Required Documents</h3>
          <div>
            <FormLabel>
              Upload Documents (Birth Certificate, NIC copies, etc.)
            </FormLabel>
            <FileUpload
              endpoint="admissionDocuments"
              onChange={(url) => {
                if (url) {
                  setUploadedFiles([...uploadedFiles, url]);
                  form.setValue("documents", [...uploadedFiles, url]);
                }
              }}
            />
            <FormMessage>
              {form.formState.errors.documents?.message}
            </FormMessage>
            {uploadedFiles.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-muted-foreground">
                  Uploaded {uploadedFiles.length} file(s)
                </p>
                <div className="mt-2 space-y-1">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      • File {index + 1} uploaded
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}
