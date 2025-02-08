import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  try {
    const { cartItems, shippingMethod, shippingCost } = await req.json();

    const line_items = cartItems.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    if (shippingCost) {
      line_items.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: `Shipping (${shippingMethod})`,
          },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cart`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error("Stripe Checkout Session Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
