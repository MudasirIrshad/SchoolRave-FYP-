import { redirect } from "next/navigation";
import React from "react";

function HomePage() {
  return redirect("/dashboard");
}

export default HomePage;
