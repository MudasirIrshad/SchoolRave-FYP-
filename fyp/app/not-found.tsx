import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="p-4 bg-gray-100 rounded-full">
            <Rocket className="h-12 w-12 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            Let&apos;s get you back on track. Here are some helpful links:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/">Go to Homepage</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/search">Discover Schools</Link>
            </Button>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline font-medium"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
