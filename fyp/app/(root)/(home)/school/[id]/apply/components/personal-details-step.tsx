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

interface PersonalDetailsStepProps {
  form: UseFormReturn<FormData>;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PersonalDetailsStep({ form, onNext, onPrevious }: PersonalDetailsStepProps) {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Personal Details</h3>
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
              <Input placeholder="Enter postal address" {...field} />
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
              <Input placeholder="Enter present address" {...field} />
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