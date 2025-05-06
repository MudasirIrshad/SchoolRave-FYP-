import ReviewCard from "../components/review-card";
import AddReviewDialog from "../components/add-review-dialog";
import prisma from "@/lib/prisma";
import { Review } from "@/generated/prisma";

type EntityType = "school" | "branch";

interface ReviewsProps {
  entity: {
    id: string;
    name?: string;
  };
  type: EntityType;
}

export default async function Reviews({ entity, type }: ReviewsProps) {
  let reviews = null;

  if (type === "school") {
    reviews = await prisma.review.findMany({
      where: {
        schoolId: entity.id,
      },
      include: {
        school: true,
        reviewer: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    reviews = await prisma.review.findMany({
      where: {
        schoolBranchId: entity.id,
      },
      include: {
        reviewer: true,
        schoolBranch: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  console.log("REVIEWSDANGER:", entity.id);
  // console.log("REVIEWSDANGER:", reviews);
  const label = type === "school" ? "school" : "branch";

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500 mb-4">No reviews yet for this {label}.</p>
        <AddReviewDialog
          btnText="Be the First to Review"
          entityId={entity.id}
          entityType={type}
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
          entityId={entity.id}
          entityType={type}
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
