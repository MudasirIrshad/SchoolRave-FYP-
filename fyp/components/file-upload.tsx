"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
        Upload your file
      </h2>

      <UploadDropzone
        endpoint={endpoint}
        appearance={{
          button:
            "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-200 shadow-md",
          label: "text-gray-600 text-sm font-medium mb-2",
          container:
            "border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50",
        }}
        onClientUploadComplete={(res) => {
          if (!res || res.length === 0) {
            toast.error("No file uploaded.");
            return;
          }
          onChange(res[0]?.url);
          toast.success("File uploaded successfully!");
        }}
        onUploadError={(error) => {
          console.error("Upload error:", error);
          toast.error(error.message || "An error occurred during upload.");
        }}
      />
    </div>
  );
};
