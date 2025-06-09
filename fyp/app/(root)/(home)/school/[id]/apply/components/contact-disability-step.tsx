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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, X, FileText, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormData } from "@/lib/zod-types/admission";
import { FileUpload } from "@/components/file-upload";

interface ContactDisabilityStepProps {
  form: UseFormReturn<FormData>;
  onNext: () => void;
  onPrevious: () => void;
  showDisabilityFields: boolean;
  setShowDisabilityFields: (show: boolean) => void;
  uploadedFiles: string[];
  setUploadedFiles: (files: string[]) => void;
}

export default function ContactDisabilityStep({
  form,
  onNext,
  onPrevious,
  showDisabilityFields,
  setShowDisabilityFields,
  uploadedFiles,
  setUploadedFiles,
}: ContactDisabilityStepProps) {
  const MAX_FILES = 5; // Set a reasonable limit

  const handleFileUpload = (url?: string) => {
    if (url && uploadedFiles.length < MAX_FILES) {
      setUploadedFiles([...uploadedFiles, url]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles(
      uploadedFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const getFileIcon = (index: number) => {
    // First file is assumed to be student photo
    return index === 0 ? (
      <Image className="w-4 h-4 text-blue-500" />
    ) : (
      <FileText className="w-4 h-4 text-gray-500" />
    );
  };

  const getFileName = (index: number) => {
    if (index === 0) return "Student Photo";
    const documentTypes = [
      "Birth Certificate",
      "Previous School Records",
      "Medical Records",
      "Additional Document",
    ];
    return documentTypes[index - 1] || `Document ${index}`;
  };

  return (
    <>
      <h3 className="text-lg font-medium mb-4">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      {/* Document Upload Section */}
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Documents & Student Photo</h3>
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <FormLabel className="text-blue-900">Required Documents</FormLabel>
            <ul className="text-sm text-blue-800 mt-2 space-y-1">
              <li>• Student Photo (First upload)</li>
              <li>• Birth Certificate</li>
              <li>• Previous School Records (if applicable)</li>
              <li>• Medical Records (if applicable)</li>
            </ul>
          </div>

          {uploadedFiles.length < MAX_FILES && (
            <div>
              <FormLabel>
                Upload Files ({uploadedFiles.length}/{MAX_FILES})
              </FormLabel>
              <p className="text-sm text-gray-600 mb-2">
                {uploadedFiles.length === 0
                  ? "Please upload student photo first, then other required documents"
                  : "Continue uploading additional documents"}
              </p>
              <FileUpload endpoint="studentImage" onChange={handleFileUpload} />
            </div>
          )}

          {/* Display uploaded files */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <FormLabel>Uploaded Files ({uploadedFiles.length}):</FormLabel>
              <div className="grid grid-cols-1 gap-2">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 border rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {getFileIcon(index)}
                      <div>
                        <span className="text-sm font-medium">
                          {getFileName(index)}
                        </span>
                        {index === 0 && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {uploadedFiles.length >= MAX_FILES && (
                <p className="text-sm text-amber-600 bg-amber-50 p-2 rounded">
                  Maximum number of files reached. Remove a file to upload more.
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">
          Disability Information (Optional)
        </h3>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            id="hasDisability"
            checked={showDisabilityFields}
            onChange={() => setShowDisabilityFields(!showDisabilityFields)}
            className="rounded border-gray-300"
          />
          <label htmlFor="hasDisability" className="text-sm font-medium">
            Student has a disability
          </label>
        </div>

        {showDisabilityFields && (
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
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
        )}
      </div>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button
          type="button"
          onClick={onNext}
          disabled={uploadedFiles.length === 0}
        >
          Next
        </Button>
      </div>
    </>
  );
}
