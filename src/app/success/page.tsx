"use client";

import Link from "next/link";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful! ✅
        </h1>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
        <p className="mt-4 text-gray-500">
          You will receive an order confirmation shortly.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block bg-[#029FAE] text-white px-4 py-2 rounded-lg hover:bg-[#027b85] transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
