import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, PhoneIcon } from "lucide-react";
import { SchoolBranch } from "@/generated/prisma";
import SchoolBranchReviews from "./school-branch-reviews";

interface SchoolBranchesProps {
  branches: SchoolBranch[];
}

export function SchoolBranches({ branches }: SchoolBranchesProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">School Branches</h2>
      <Accordion type="single" collapsible defaultValue={branches[0]?.id}>
        {branches.map((branch) => (
          <AccordionItem key={branch.id} value={branch.id}>
            <AccordionTrigger className="bg-gray-50 px-4 py-3 flex justify-between items-center">
              <div>
                <h3 className="font-medium">{branch.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{branch.address || "Not Specified"}</span>
                </div>
              </div>
              {branch.admission_status === "OPEN" && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  Accepting Applications
                </span>
              )}
            </AccordionTrigger>
            <AccordionContent className="p-4 border-t">
              <div className="mb-6">
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-gray-600">
                        {branch.address || "Not Specified"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 flex items-center justify-center text-gray-500">
                      <PhoneIcon />
                    </div>
                    <p>{branch.phone || "Not Specified"}</p>
                  </div>
                </div>
              </div>
              <SchoolBranchReviews entityId={branch.id} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
