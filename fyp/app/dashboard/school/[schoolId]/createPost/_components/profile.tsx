"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { School } from "@/generated/prisma";
import { ChevronDown, ChevronUp, PencilIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface ProfileComponentProps {
  school: School;
}

function ProfileComponent({ school }: ProfileComponentProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <Card className="bg-card">
        <CardContent className="p-4">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24 ring ring-primary ring-offset-2">
              <AvatarImage src={school.imageUrl ?? "/avatar.png"} />
            </Avatar>

            <h1 className="mt-4 text-2xl font-bold">{school.name}</h1>
            <p className="text-muted-foreground">{school.phone}</p>
            <p className="text-muted-foreground">{school.email}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {school.address}
            </p>

            {/* Laptop/Desktop: Show all details normally */}
            <div className="hidden lg:grid mt-4 w-full grid-cols-1 gap-y-2 text-sm text-muted-foreground text-left">
              <InfoItem label="School Type" value={school.school_type} />
              <InfoItem label="Category" value={school.schoolCategory} />
              <InfoItem label="Medium" value={school.medium_of_instruction} />
              <InfoItem label="Curriculum" value={school.curriculum_type} />
              <InfoItem label="Subscription" value={school.subscriptionType} />
              {school.admissionFormUrl && (
                <InfoItem
                  label="Admission Form"
                  value={
                    <a
                      href={school.admissionFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Form
                    </a>
                  }
                />
              )}
            </div>

            {/* Mobile: Dropdown toggle for more info */}
            <div className="block lg:hidden w-full">
              <Button
                variant="outline"
                onClick={() => setShowMore(!showMore)}
                className="mt-4 w-full flex items-center justify-center"
              >
                {showMore ? (
                  <>
                    Hide Info <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    More Info <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {showMore && (
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground text-left">
                  <InfoItem label="School Type" value={school.school_type} />
                  <InfoItem label="Category" value={school.schoolCategory} />
                  <InfoItem
                    label="Medium"
                    value={school.medium_of_instruction}
                  />
                  <InfoItem label="Curriculum" value={school.curriculum_type} />
                  <InfoItem
                    label="Subscription"
                    value={school.subscriptionType}
                  />
                  {school.admissionFormUrl && (
                    <InfoItem
                      label="Admission Form"
                      value={
                        <a
                          href={school.admissionFormUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View Form
                        </a>
                      }
                    />
                  )}
                </div>
              )}
            </div>

            {school.description && (
              <div className="pt-4 text-left w-full text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Description</p>
                <p>{school.description}</p>
              </div>
            )}

            <div className="flex mt-4">
              <Link href={`/dashboard/school/${school.userId}/schoolHome`}>
                <Button variant={"outline"}>
                  <PencilIcon className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Reusable info item
const InfoItem = ({
  label,
  value,
}: {
  label: string;
  value?: React.ReactNode;
}) => {
  if (!value) return null;
  return (
    <p>
      <span className="font-medium text-foreground">{label}:</span> {value}
    </p>
  );
};

export default ProfileComponent;
