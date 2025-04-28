import { Review } from "@/lib/zod-types/review";
import { Star } from "lucide-react";
import { format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  console.log("DANGERSCHOOL:", review);
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-start gap-4">
        <div>
          <CardTitle className="text-lg font-open">
            {review?.reviewer?.name}
          </CardTitle>
          <div className="flex text-yellow-400 mt-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(review?.rating) ? "fill-current" : ""
                  }`}
                />
              ))}
          </div>
        </div>
        <div className="bg-blue-100 text-primary text-xs px-3 py-1 rounded-full self-start">
          {review?.reviewer?.role}
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 text-sm">{review?.comment}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center text-xs text-gray-500">
        <div>
          {review?.reviewer?.name} • {review.reviewer?.role}
        </div>
        <div>Posted {format(review?.createdAt, "dd/MM/yyyy")}</div>
      </CardFooter>
    </Card>
  );
}
