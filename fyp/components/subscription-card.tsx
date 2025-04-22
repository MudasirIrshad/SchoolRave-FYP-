"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// Define the type of the school prop

function SubscriptionCard() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (duration: string) => {
    try {
      setLoading(true); // Start loading state

      const res = await fetch("/api/school/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          duration: duration, // Pass the duration as part of the request
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout URL
      } else {
        console.error("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* 3 Months Card */}
      <div className="border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold">3 Months Premium</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Get premium access for 3 months with enhanced features.
        </p>
        <div className="mt-4 text-2xl font-bold">Rs. 2,804.47</div>
        <Button
          className="mt-4 w-full"
          onClick={() => handleCheckout("3")}
          disabled={loading} // Disable button during loading
        >
          Buy 3 Months
        </Button>
      </div>

      {/* 6 Months Card */}
      <div className="border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold">6 Months Premium</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Enjoy premium benefits for 6 months with better savings.
        </p>
        <div className="mt-4 text-2xl font-bold">Rs. 5,048.05</div>
        <Button
          className="mt-4 w-full"
          onClick={() => handleCheckout("6")}
          disabled={loading} // Disable button during loading
        >
          Buy 6 Months
        </Button>
      </div>
    </div>
  );
}

export default SubscriptionCard;
