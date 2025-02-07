"use client";

import Image from "next/image";
import { useGlobalContext } from "../context/GlobalContext";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Cart = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity } = useGlobalContext();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/login");
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) return null;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="w-full max-w-[1440px] px-4 md:px-6 lg:px-8 my-20 flex-1 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 h-auto lg:min-h-[500px]">
          <div className="flex-1 h-auto lg:w-3/4 w-full">
            <div className="max-w-[733px] mx-auto">
              <div className="mb-8">
                <h2 className="font-inter text-[32px] sm:text-2xl font-bold">
                  Cart
                </h2>
              </div>

              {cart.length === 0 ? (
                <p className="text-[#757575] text-center">
                  Your cart is empty.
                </p>
              ) : (
                <div className="max-h-[550px] overflow-y-auto space-y-6 pr-2">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="w-full flex flex-wrap md:flex-nowrap gap-6 lg:gap-[24px] border-b pb-6"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          height={150}
                          width={150}
                          className="rounded-none"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-inter font-normal text-sm sm:text-base text-[#272343]">
                            {item.title}
                          </h3>
                          <div className="font-inter font-normal text-base sm:text-lg text-[#111111]">
                            ${item.price} × {item.quantity} = $
                            {(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                        <p className="text-[#757575] text-[15px] leading-[28px]">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                          <label
                            htmlFor={`quantity-${item.id}`}
                            className="text-[#757575]"
                          >
                            Quantity:
                          </label>
                          <input
                            id={`quantity-${item.id}`}
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                            className="w-16 border rounded px-2 py-1 text-center"
                          />
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500"
                          >
                            <Image
                              src="/bin.png"
                              alt="Remove item"
                              height={19}
                              width={19}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex-shrink-0 lg:w-[350px] w-full h-fit">
            <h1 className="font-inter font-bold text-center lg:text-left lg:font-medium text-lg sm:text-xl">
              Summary
            </h1>
            <div className="flex justify-between mt-8">
              <h2 className="text-sm sm:text-base">Subtotal</h2>
              <div className="text-sm sm:text-base">${subtotal.toFixed(2)}</div>
            </div>
            <div className="flex justify-between mt-5">
              <h2 className="text-sm sm:text-base">
                Estimated Delivery And Handling
              </h2>
              <div className="text-sm sm:text-base">$20</div>
            </div>
            <div className="flex justify-between mt-5 py-4 border-y-2">
              <div className="text-sm sm:text-base font-medium">Total</div>
              <div className="text-sm sm:text-base font-medium">
                ${(subtotal + 20).toFixed(2)}
              </div>
            </div>
            <Link href={"/checkout"}>
              <button className="rounded-lg font-inter font-medium text-white bg-[#029FAE] w-full h-12 mt-5">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
