"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl min-h-screen bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex flex-col items-center justify-center p-12 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Login to Comforty
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-md text-center">
            Access your cart, checkout page and more.
          </p>
        </div>

        <div className="flex items-center justify-center w-full h-full p-12 bg-white dark:bg-gray-800">
          <div className="w-full max-w-2xl">
            <SignIn
              routing="path"
              path="/login"
              appearance={{
                elements: {
                  rootBox: "w-full flex justify-center",
                  card: "w-full max-w-4xl p-10 shadow-xl border border-gray-300 rounded-lg",
                  headerTitle:
                    "text-3xl font-bold text-gray-900 dark:text-white",
                  headerSubtitle: "text-lg text-gray-600 dark:text-gray-300",
                  formFieldInput: "h-12 text-lg",
                  formButtonPrimary:
                    "bg-[#029FAE] hover:bg-[#028896] text-white h-12 text-lg",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
