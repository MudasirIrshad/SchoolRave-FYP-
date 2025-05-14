import ReviewCard from "./review-card";
import AddReviewDialog from "./add-review-dialog";
import prisma from "@/lib/prisma";
import { Review } from "@/generated/prisma";

interface ReviewsProps {
  entityId: string;
}

export default async function SchoolBranchReviews({ entityId }: ReviewsProps) {
  const reviews = await prisma.review.findMany({
    where: {
      schoolBranchId: entityId,
    },
    include: {
      schoolBranch: true,
      reviewer: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // console.log("SCHOOLBRANCHREVIEW: ",reviews);

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500 mb-4">No reviews yet for this Branch.</p>
        <AddReviewDialog
          btnText="Be the First to Review"
          entityId={entityId}
          entityType="branch"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Reviews & Ratings</h3>
        <AddReviewDialog
          btnText="Write a Review"
          entityId={entityId}
          entityType="branch"
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
