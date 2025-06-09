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
import { FormData } from "@/lib/zod-types/admission";

interface GuardianInfoStepProps {
  form: UseFormReturn<FormData>;
  onNext: () => void;
  onPrevious: () => void;
}

export default function GuardianInfoStep({
  form,
  onNext,
  onPrevious,
}: GuardianInfoStepProps) {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Guardian Information</h3>
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
            <FormLabel>Guardian Qualification</FormLabel>
            <FormControl>
              <Input placeholder="Enter guardian qualification" {...field} />
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
            <FormLabel>Guardian Occupation</FormLabel>
            <FormControl>
              <Input placeholder="Enter guardian occupation" {...field} />
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
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button type="button" onClick={onNext}>
          Next
        </Button>
      </div>
    </>
  );
}
