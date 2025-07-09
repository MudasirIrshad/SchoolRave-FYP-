import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { MapPin, PhoneIcon, Mail, Users, GraduationCap } from "lucide-react";
import { SchoolBranch } from "@/generated/prisma";
import SchoolBranchReviews from "./school-branch-reviews";
import Image from "next/image";

interface SchoolBranchesProps {
  branches: SchoolBranch[];
}

export function SchoolBranches({ branches }: SchoolBranchesProps) {
  const getGenderPolicyDisplay = (policy: string) => {
    switch (policy) {
      case "CO_EDUCATION":
        return "Co-Education";
      case "BOYS_ONLY":
        return "Boys Only";
      case "GIRLS_ONLY":
        return "Girls Only";
      default:
        return policy;
    }
  };

  const getCategoryDisplay = (category: string) => {
    switch (category) {
      case "PRIMARY":
        return "Primary School";
      case "MIDDLE":
        return "Middle School";
      case "HIGH":
        return "High School";
      default:
        return category;
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">School Branches</h2>
      <Accordion type="single" collapsible defaultValue={branches[0]?.id}>
        {branches.map((branch) => (
          <AccordionItem key={branch.id} value={branch.id}>
            <AccordionTrigger className="bg-gray-50 px-4 py-3 flex justify-between items-center">
              <div className="flex-1">
                <h3 className="font-medium text-left">{branch.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{branch.address || "Address not specified"}</span>
                  {branch.city && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{branch.city}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {branch.admission_status === "OPEN" && (
                  <Badge
                    variant="default"
                    className="bg-green-100 text-green-800"
                  >
                    Accepting Applications
                  </Badge>
                )}
                {branch.schoolBranchCategory && (
                  <Badge variant="outline">
                    {getCategoryDisplay(branch.schoolBranchCategory)}
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 border-t">
              <div className="space-y-6">
                {/* Branch Image */}
                {branch.imageUrl && (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={branch.imageUrl}
                      alt={`${branch.name} image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Branch Description */}
                {branch.description && (
                  <div>
                    <h4 className="font-medium mb-2">About This Branch</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {branch.description}
                    </p>
                  </div>
                )}

                {/* Branch Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Contact Information */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 flex items-center">
                      <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />
                      Contact Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      {branch.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span>{branch.email}</span>
                        </div>
                      )}
                      {branch.phone && (
                        <div className="flex items-center gap-2">
                          <PhoneIcon className="h-4 w-4 text-gray-500" />
                          <span>{branch.phone}</span>
                        </div>
                      )}
                      {branch.address && (
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                          <span>{branch.address}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Branch Policies */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      Branch Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      {branch.gender_policy && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Gender Policy:</span>
                          <Badge variant="outline" className="text-xs">
                            {getGenderPolicyDisplay(branch.gender_policy)}
                          </Badge>
                        </div>
                      )}
                      {branch.schoolBranchCategory && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Category:</span>
                          <Badge variant="outline" className="text-xs">
                            {getCategoryDisplay(branch.schoolBranchCategory)}
                          </Badge>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Admission Status:</span>
                        <Badge
                          variant={
                            branch.admission_status === "OPEN"
                              ? "default"
                              : "secondary"
                          }
                          className={`text-xs ${
                            branch.admission_status === "OPEN"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {branch.admission_status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                {branch.facilities && branch.facilities.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
                      Facilities Available
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {branch.facilities.map((facility, index) => (
                        <div
                          key={index}
                          className="bg-blue-50 text-blue-800 px-3 py-1.5 rounded-md text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Section */}
                <div className="border-t pt-6">
                  <SchoolBranchReviews branchId={branch.id} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
