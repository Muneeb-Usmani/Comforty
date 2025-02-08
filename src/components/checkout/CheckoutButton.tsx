"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

async function redirectToCheckout(
  cartItems: any,
  shippingMethod: string,
  shippingCost: number
) {
  try {
    const response = await fetch(`${window.location.origin}/api/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems, shippingMethod, shippingCost }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.sessionId) {
      throw new Error("No sessionId received from API.");
    }

    console.log("Stripe Session ID:", data.sessionId);

    const stripe = await stripePromise;
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (error) {
        console.error("Stripe checkout error:", error);
      }
    }
  } catch (error) {
    console.error("Checkout failed:", error);
  }
}

export default function CheckoutButton({
  cartItems,
  shippingMethod,
  shippingCost,
}: {
  cartItems: any;
  shippingMethod: string;
  shippingCost: number;
}) {
  return (
    <button
    onClick={(e) => {
      e.preventDefault(); 
      redirectToCheckout(cartItems, shippingMethod, shippingCost);
    }}
      className="flex w-full items-center justify-center rounded-lg bg-[#029FAE] px-5 py-2.5 text-sm font-medium text-white"
    >
      Proceed to Payment
    </button>
  );
}
