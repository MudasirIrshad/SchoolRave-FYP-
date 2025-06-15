import prisma from "@/lib/prisma";
import React from "react";
import SubscriptionCard from "@/components/subscription-card";

import MainPage from "./_components/main";
export const dynamic = "force-dynamic";

async function CreatePost({ params }: { params: { schoolId: string } }) {
  const school = await prisma.school.findUnique({
    where: {
      userId: params.schoolId,
    },
  });
  return (
    <div>
      <div>
        {school?.subscriptionType === "FREE" ? (
          <>
            <SubscriptionCard />
          </>
        ) : (
          <>
            <MainPage school={school!} />
          </>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
