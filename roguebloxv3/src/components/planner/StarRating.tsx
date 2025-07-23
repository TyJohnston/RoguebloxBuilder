import { Star } from "lucide-react";

interface StarRatingProps {
  stars: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showEmpty?: boolean;
}

export const StarRating = ({ stars, maxStars = 5, size = "md", showEmpty = true }: StarRatingProps) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }, (_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < stars
              ? "fill-gaming-gold text-gaming-gold"
              : showEmpty
              ? "text-muted-foreground"
              : "hidden"
          }`}
        />
      ))}
    </div>
  );
};