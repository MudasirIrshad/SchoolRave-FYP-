import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function StarRating({
  rating,
  size = "md",
  showText = false,
  className = "",
}: RatingProps) {
  const starSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const starCount = Math.round(rating);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              className={`${starSize[size]} ${
                i < starCount
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
      </div>
      {showText && (
        <span className="text-sm text-gray-500 ml-1">
          {rating.toFixed(1)}/5.0
        </span>
      )}
    </div>
  );
}
