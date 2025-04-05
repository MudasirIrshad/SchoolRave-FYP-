import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner({ color = "primary" }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoaderCircle className={`animate-spin w-12 h-12 text-${color}`} />
    </div>
  );
}
