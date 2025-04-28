// "use client";

import { Review } from "@/lib/zod-types/review";
import { School } from "@/lib/zod-types/school";
import ReviewCard from "../components/review-card";
import AddReviewDialog from "../components/add-review-dialog";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export default async function Reviews({ school }: { school: School }) {
  const { userId } = await auth();

  const reviews = await prisma.review.findMany({
    where: {
      schoolId: school?.id,
    },
    include: {
      reviewer: true,
      school: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (reviews.length === 0) {
    return (
      <>
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500 mb-4">No reviews yet for this school.</p>
          <AddReviewDialog
            btnText="Be the First to Review"
            schoolId={school.id}
            userId={userId}
          />
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Reviews & Ratings</h3>
        <AddReviewDialog
          btnText="Write a Review"
          schoolId={school.id}
          userId={userId}
        />
      </div>

      <div className="space-y-4">
        {reviews.map((review: Review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
