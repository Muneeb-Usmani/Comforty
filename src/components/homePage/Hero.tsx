import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-screen-xl bg-[#F0F2F3] rounded-bl-[48px] flex flex-col lg:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6 sm:py-12 lg:py-20 h-auto lg:h-[850px]">
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-[14px] sm:text-[18px] lg:text-[20px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] leading-[14px] sm:leading-[20px] lg:leading-[24px] text-center lg:text-left">
            WELCOME TO COMFORTY
          </h1>
          <p className="w-full lg:w-[557px] text-[28px] sm:text-[40px] lg:text-[60px] font-bold text-center lg:text-left mb-6 text-[#272343] leading-[32px] sm:leading-[50px] lg:leading-[70px]">
            Best Furniture Collection for your interior.
          </p>
          <Link href={"/product"}>
            <button className="bg-[#029FAE] w-[140px] sm:w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[16px] sm:gap-[20px] hover:bg-cyan-600 mx-auto lg:mx-0">
              <span>Shop Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 sm:w-6 h-5 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18M15 18l6-6-6-6"
                />
              </svg>
            </button>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-[130px]  justify-center hidden lg:block">
          <Image
            src="/Product Image.png"
            alt="Product Image"
            width={434}
            height={584}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
