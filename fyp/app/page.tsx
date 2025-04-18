import LoadingSpinner from "@/components/loading-spinner";
import { redirect } from "next/navigation";
import React from "react";

function HomePage() {
  return redirect("/dashboard");
  <div>
    <LoadingSpinner />
  </div>;
}

export default HomePage;
