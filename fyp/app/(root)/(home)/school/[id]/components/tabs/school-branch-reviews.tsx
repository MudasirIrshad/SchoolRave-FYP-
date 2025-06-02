import ReviewCard from "../review-card";
import AddReviewDialog from "../add-review-dialog";
import { Review } from "@/generated/prisma";
import { getSchoolBranchReviews } from "@/data-access/school-data";

interface ReviewsProps {
  branchId: string;
}

export default async function SchoolBranchReviews({ branchId }: ReviewsProps) {
  const reviews = await getSchoolBranchReviews(branchId);

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500 mb-4">No reviews yet for this Branch.</p>
        <AddReviewDialog
          btnText="Be the First to Review"
          entityId={branchId}
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
          entityId={branchId}
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
