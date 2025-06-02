"use client";

import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FileUpload } from "@/components/file-upload";
import { useAuth } from "@clerk/nextjs";

interface ApplyPageProps {
  params: {
    id: string;
  };
}

export default function ApplyPage({ params }: ApplyPageProps) {
  const { userId } = useAuth();
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/school/${params.id}/admission-form`);
      const school = await response.json();

      if (!response.ok) {
        throw new Error(school.error || "Failed to fetch form");
      }

      if (!school.admissionFormUrl) {
        throw new Error("No admission form available");
      }

      window.open(school.admissionFormUrl, "_blank");
      toast.success("Form opened in new tab");
    } catch (error) {
      toast.error(error.message || "Failed to open form");
      console.error(error);
    }
  };

  const submitFilledForm = async (schoolId: string, fileUrl: string) => {
    try {
      console.log("schoolId: ", schoolId);
      console.log("fileUrl: ", fileUrl);
      console.log("userId: ", userId);

      const response = await fetch(
        `/api/school/${schoolId}/submit-filled-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            schoolId,
            filledFormUrl: fileUrl,
            userId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Admission Application</h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Step 1: Download Admission Form
          </h2>
          <p className="text-gray-600 mb-4">
            Download the admission form provided by the school. Fill it out
            completely before proceeding to upload.
          </p>
          <Button onClick={handleDownload} className="gap-2">
            <Download className="h-4 w-4" />
            Download Form
          </Button>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Step 2: Upload Filled Form
          </h2>
          <p className="text-gray-600 mb-4">
            Upload the completed admission form along with any required
            documents. Ensure all information is accurate before submitting.
          </p>

          {isUploading ? (
            <FileUpload
              endpoint="userImage"
              onChange={(url) => {
                if (url) {
                  setIsUploading(false);
                  submitFilledForm(params.id, url)
                    .then(() => {
                      toast.success("Form submitted successfully!");
                      router.push(`/school/${params.id}`);
                    })
                    .catch((error) => {
                      toast.error(error.message || "Form submission failed");
                    });
                }
              }}
            />
          ) : (
            <Button
              onClick={() => setIsUploading(true)}
              className="gap-2"
              disabled={isUploading}
            >
              <Upload className="h-4 w-4" />
              Upload Filled Form
            </Button>
          )}
        </section>
      </div>
    </div>
  );
}
