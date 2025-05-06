"use client";

import { useState } from "react";
import {
  MapPin,
  ChevronDown,
  ChevronUp,
  Calendar,
  DollarSign,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Review, SchoolBranch } from "@/generated/prisma";
// import { ReviewsClientWrapper } from "./reviews-client-wrapper";

interface SchoolBranchesProps {
  branches: SchoolBranch[];
  reviews: Review[];
}

export function SchoolBranches({ branches }: SchoolBranchesProps) {
  const [expandedBranch, setExpandedBranch] = useState<string | null>(
    branches[0]?.id || null
  );
  const [activeTab, setActiveTab] = useState<string>("overview");

  const toggleBranch = (branchId: string) => {
    setExpandedBranch(expandedBranch === branchId ? null : branchId);
  };

  //   const getBranchReviews = (branchId: string) => {
  //     return reviews.filter((review) => review.branchId === branchId);
  //   };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">School Branches</h2>
      <div className="space-y-4">
        {branches.map((branch) => (
          <div key={branch.id} className="border rounded-lg overflow-hidden">
            <div
              className="flex items-center justify-between p-4 cursor-pointer bg-gray-50"
              onClick={() => toggleBranch(branch.id)}
            >
              <div>
                <h3 className="font-medium">{branch.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{branch.address}</span>
                </div>
              </div>
              <div className="flex items-center">
                {/* {branch.openForAdmission !== false && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mr-3">
                    Accepting Applications
                  </span>
                )} */}
                {expandedBranch === branch.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </div>
            </div>

            {expandedBranch === branch.id && (
              <div className="p-4 border-t">
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="mt-6"
                >
                  <TabsList className="grid grid-cols-1 mb-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Contact Information</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-3 mb-3">
                          <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                          <div>
                            {/* <p className="font-medium">{branch.location}</p> */}
                            {branch.address && (
                              <p className="text-gray-600">{branch.address}</p>
                            )}
                          </div>
                        </div>
                        {branch.phone && (
                          <div className="flex items-center gap-3">
                            <div className="h-5 w-5 flex items-center justify-center text-gray-500">
                              <span className="text-sm">📞</span>
                            </div>
                            <p>{branch.phone}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {branch.applicationDeadline && (
                        <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Application Deadline</p>
                            <p className="text-gray-600">
                              {branch.applicationDeadline}
                            </p>
                          </div>
                        </div>
                      )}

                      {branch.tuitionFee && (
                        <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                          <DollarSign className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Tuition Fee</p>
                            <p className="text-gray-600">{branch.tuitionFee}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  {/* <TabsContent value="reviews"> */}
                  {/* <SchoolReviews
                      reviews={getBranchReviews(branch.id)}
                      schoolId={schoolId}
                      branchId={branch.id}
                      branchName={branch.name}
                    /> */}
                  {/* </TabsContent> */}
                </Tabs>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
