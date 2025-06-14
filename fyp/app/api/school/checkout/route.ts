import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const revalidate = 0;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});


export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { duration } = body;

    const priceId =
      duration === "6"
        ? process.env.STRIPE_SIX_MONTH_PRICE_ID
        : process.env.STRIPE_THREE_MONTH_PRICE_ID;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription", // if you're selling recurring plans
      line_items: [
        {
          price: priceId!,
          quantity: 1,
        },
      ],
      success_url: `${process.env.BASE_URL}/verify-payment`,
      cancel_url: `${process.env.BASE_URL}/dashboard/school/${userId}/schoolHome`,
      metadata: {
        userId,
        duration,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(
      "Checkout error:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { error: "Unable to create Stripe session" },
      { status: 500 }
    );
  }
}
