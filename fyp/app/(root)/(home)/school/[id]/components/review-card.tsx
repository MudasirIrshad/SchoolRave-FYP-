import { format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Review as PrismaReview, User } from "@/generated/prisma";
import { StarRating } from "../../../components/star-rating";

interface ReviewWithReviewer extends PrismaReview {
  reviewer?: User | null;
}

interface ReviewCardProps {
  review: ReviewWithReviewer;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-start gap-4">
        <div>
          <CardTitle className="text-lg font-open">
            {review?.reviewer?.name}
          </CardTitle>
          <StarRating rating={review?.rating} size="sm" className="mt-1" />
        </div>
        <div className="bg-blue-100 text-primary text-xs px-3 py-1 rounded-full self-start">
          {review?.reviewer?.role}
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 text-sm">{review?.comment}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center text-xs text-gray-500">
        <div>Posted {format(review?.createdAt, "dd/MM/yyyy")}</div>
      </CardFooter>
    </Card>
  );
}
