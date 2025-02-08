"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CheckoutButton from "@/components/checkout/CheckoutButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const checkoutSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  address: z.string().optional(),
  postcode: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  phone: z.number().optional(),
  email: z.string().email("Invalid email address").optional(),
});
const Checkout = () => {
  const { cart } = useGlobalContext();
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("free");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(checkoutSchema) });

  const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cost = Number(event.target.value);
    setShippingCost(cost);
    setShippingMethod(event.target.id);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 0;
  const total = subtotal - discount + shippingCost;

  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/login");
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) return null;

  return (
    <section className="bg-white py-8 md:py-16">
      <form className="mx-auto max-w-screen-xl px-4 2xl:px-0"  onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Billing Details
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    {...register("first_name")}
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
                    placeholder="John"
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.first_name.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    {...register("last_name")}
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
                    placeholder="Doe"
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.last_name.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register("address")}
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
                    placeholder="123 Main St"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="postcode"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Post Code
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    {...register("postcode")}
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
                    placeholder="SW1W 0NY"
                  />
                  {errors.postcode && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.postcode.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="select-country"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Country
                  </label>
                  <select
                    id="select-country"
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
                  >
                    <option>United States</option>
                    <option>Australia</option>
                    <option>France</option>
                    <option>Spain</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="select-city"
                    className="block text-sm font-medium text-gray-900"
                  >
                    City
                  </label>
                  <select
                    id="select-city"
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
                  >
                    <option defaultChecked>San Francisco</option>
                    <option value="NY">New York</option>
                    <option value="LA">Los Angeles</option>
                    <option value="CH">Chicago</option>
                    <option value="HU">Houston</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    {...register("phone")}
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
                    placeholder="+92 1234567890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    {...register("email")}
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
                    placeholder="youremail@xyz.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message?.toString()}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Delivery Methods
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  {
                    id: "free",
                    label: "Free Delivery",
                    cost: 0,
                    duration: "10-14 w/days",
                  },
                  {
                    id: "standard",
                    label: "$15 - Standard Delivery",
                    cost: 15,
                    duration: "6-8 w/days",
                  },
                  {
                    id: "express",
                    label: "$49 - Express Delivery",
                    cost: 49,
                    duration: "3-5 w/days",
                  },
                ].map((method) => (
                  <div
                    key={method.id}
                    className="rounded-lg border border-gray-200 p-4"
                  >
                    <div className="flex items-start">
                      <input
                        type="radio"
                        id={method.id}
                        name="delivery-method"
                        value={method.cost}
                        checked={shippingCost === method.cost}
                        onChange={handleShippingChange}
                        className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                      />
                      <div className="ml-4 text-sm">
                        <label
                          htmlFor={method.id}
                          className="font-medium text-gray-900"
                        >
                          {method.label}
                        </label>
                        <p className="mt-1 text-xs text-gray-500">
                          Get it within {method.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 w-full space-y-6 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h3>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <div className="space-y-2">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between border-b pb-2"
                    >
                      <span className="text-sm text-gray-900">
                        {item.title} (x{item.quantity})
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flow-root">
              <div className="-my-3 divide-y divide-gray-200">
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500">
                    Subtotal
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500">
                    Discount
                  </dt>
                  <dd className="text-base font-medium text-green-500">
                    ${discount.toFixed(2)}
                  </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500">
                    Shipping
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${shippingCost.toFixed(2)}
                  </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">
                    ${total.toFixed(2)}
                  </dd>
                </dl>
              </div>
            </div>

            <CheckoutButton
              cartItems={cart}
              shippingMethod={shippingMethod}
              shippingCost={shippingCost}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
