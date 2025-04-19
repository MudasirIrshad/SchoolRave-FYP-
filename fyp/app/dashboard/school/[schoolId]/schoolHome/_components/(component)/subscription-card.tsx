"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

console.log(process.env.NEXT_PUBLIC_STRIPE_THREE_MONTH_PLAN_LINK);

function SubscriptionCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* 3 Months Card */}
      <div className="border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold">3 Months Premium</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Get premium access for 3 months with enhanced features.
        </p>
        <div className="mt-4 text-2xl font-bold">Rs. 2,804.47</div>
        <Link href={process.env.NEXT_PUBLIC_STRIPE_THREE_MONTH_PLAN_LINK || ""}>
          <Button className="mt-4 w-full">Buy 3 Months</Button>
        </Link>
      </div>

      {/* 6 Months Card */}
      <div className="border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold">6 Months Premium</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Enjoy premium benefits for 6 months with better savings.
        </p>
        <div className="mt-4 text-2xl font-bold">Rs. 5,048.05 </div>
        <Link href={process.env.NEXT_PUBLIC_STRIPE_SIX_MONTH_PLAN_LINK || ""}>
          <Button className="mt-4 w-full">Buy 6 Months</Button>
        </Link>
      </div>
    </div>
  );
}

export default SubscriptionCard;
