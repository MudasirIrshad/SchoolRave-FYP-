"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delay before redirecting to dashboard
    const timeout = setTimeout(() => {
      router.push("/dashboard"); // Redirect to dashboard after 3 seconds
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [router]);

  return <div></div>; // Optional: display message to user
}
