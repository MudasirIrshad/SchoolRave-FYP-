import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { FormData } from "@/lib/zod-types/admission";
import { Loader2 } from "lucide-react";

interface ReviewStepProps {
  form: UseFormReturn<FormData>;
  onPrevious: () => void;
  showDisabilityFields: boolean;
  isSubmitting: boolean;
}

export default function ReviewStep({
  form,
  onPrevious,
  showDisabilityFields,
  isSubmitting,
}: ReviewStepProps) {
  const dateOfBirth = form.watch("dateOfBirth");
  const disabilityOnsetDate = form.watch("disabilityOnsetDate");

  return (
    <>
      <h3 className="text-lg font-medium mb-4">Review Information</h3>
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">
            Student Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <p>
              <span className="font-medium">Name:</span>{" "}
              {form.watch("studentName")}
            </p>
            <p>
              <span className="font-medium">Age:</span>{" "}
              {form.watch("studentAge")}
            </p>
            <p>
              <span className="font-medium">Date of Birth:</span>{" "}
              {dateOfBirth ? format(dateOfBirth, "PPP") : "Not specified"}
            </p>
            <p>
              <span className="font-medium">Requested Class:</span>{" "}
              {form.watch("requestedClass")}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">
            Guardian Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <p>
              <span className="font-medium">Guardian Name:</span>{" "}
              {form.watch("guardianName")}
            </p>
            <p>
              <span className="font-medium">NIC Number:</span>{" "}
              {form.watch("nicNumber")}
            </p>
            <p>
              <span className="font-medium">Qualification:</span>{" "}
              {form.watch("guardianQualification")}
            </p>
            <p>
              <span className="font-medium">Occupation:</span>{" "}
              {form.watch("guardianOccupation")}
            </p>
            <p>
              <span className="font-medium">Monthly Income:</span>{" "}
              {form.watch("monthlyIncome")}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">Personal Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <p>
              <span className="font-medium">Religion:</span>{" "}
              {form.watch("religion")}
            </p>
            <p>
              <span className="font-medium">Nationality:</span>{" "}
              {form.watch("nationality")}
            </p>
            <p>
              <span className="font-medium">Postal Address:</span>{" "}
              {form.watch("postalAddress")}
            </p>
            <p>
              <span className="font-medium">Present Address:</span>{" "}
              {form.watch("presentAddress")}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">
            Contact Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <p>
              <span className="font-medium">Telephone:</span>{" "}
              {form.watch("telephoneNumber")}
            </p>
            <p>
              <span className="font-medium">Mobile:</span>{" "}
              {form.watch("mobileNumber")}
            </p>
          </div>
        </div>

        {showDisabilityFields && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">
              Disability Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <p>
                <span className="font-medium">Nature:</span>{" "}
                {form.watch("disabilityNature") || "Not specified"}
              </p>
              <p>
                <span className="font-medium">Onset Date:</span>{" "}
                {disabilityOnsetDate
                  ? format(disabilityOnsetDate, "PPP")
                  : "Not specified"}
              </p>
              <p>
                <span className="font-medium">Cause:</span>{" "}
                {form.watch("disabilityCause") || "Not specified"}
              </p>
            </div>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Important Notice</h4>
          <p className="text-sm text-blue-800">
            Please review all information carefully before submitting. Once
            submitted, you will not be able to modify your application. Make
            sure all details are accurate and complete.
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onPrevious}
          disabled={isSubmitting}
        >
          Previous
        </Button>
        <Button type="submit" disabled={isSubmitting} className="min-w-[120px]">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </div>
    </>
  );
}
