import prisma from "@/lib/prisma";
import React from "react";
import SubscriptionCard from "@/components/subscription-card";

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
          <>Purchased premium subscription</>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
