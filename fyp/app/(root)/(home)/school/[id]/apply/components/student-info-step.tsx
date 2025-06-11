import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData } from "@/lib/zod-types/admission";
import Calendar22 from "@/components/calendar-22";

interface StudentInfoStepProps {
  form: UseFormReturn<FormData>;
  onNext: () => void;
}

export default function StudentInfoStep({
  form,
  onNext,
}: StudentInfoStepProps) {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Student Information</h3>
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
                value={field.value || ""} // Provide fallback empty string for undefined
                onChange={(e) => {
                  const value = e.target.value;
                  // Only update if it's a number or empty string
                  if (value === "" || !isNaN(Number(value))) {
                    field.onChange(value === "" ? undefined : parseInt(value));
                  }
                }}
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
          <FormItem>
            <FormLabel>Date of Birth</FormLabel>
            <FormControl>
              <Calendar22
                date={field.value}
                onSelect={(date) => field.onChange(date)}
              />
            </FormControl>
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
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a class" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="pre-school">Pre-School</SelectItem>
                <SelectItem value="grade-1">Grade 1</SelectItem>
                <SelectItem value="grade-2">Grade 2</SelectItem>
                <SelectItem value="grade-3">Grade 3</SelectItem>
                <SelectItem value="grade-4">Grade 4</SelectItem>
                <SelectItem value="grade-5">Grade 5</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex justify-end">
        <Button type="button" onClick={onNext}>
          Next
        </Button>
      </div>
    </>
  );
}
