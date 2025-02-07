"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white pt-[14px] pb-[14px]">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0">
        <button
          className="lg:hidden md:hidden flex items-center justify-center p-2"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        <div className="hidden md:flex gap-8 ml-3">
          <Link
            href={"/"}
            className="text-[#636270] text-[14px] hover:text-[#007580]  font-medium"
          >
            Home
          </Link>
          <Link
            href={"/product"}
            className="text-[14px] text-[#636270] hover:text-[#007580] font-medium"
          >
            Shop
          </Link>
          <Link
            href={"/product"}
            className="text-[14px] text-[#636270] hover:text-[#007580] font-medium"
          >
            Product
          </Link>
          <Link
            href={"/product"}
            className="text-[14px] text-[#636270] hover:text-[#007580] font-medium"
          >
            Pages
          </Link>
          <Link
            href={"/about"}
            className="text-[14px] text-[#636270] hover:text-[#007580] font-medium"
          >
            About
          </Link>
        </div>

        <div className=" md:flex items-center gap-4 ml-auto">
          <span className="font-normal text-[#636270] text-[14px]">
            Contact:
          </span>
          <span className="font-medium text-[#272343] text-[14px]">
            (808) 555-0111
          </span>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white px-4 py-2 space-y-2 md:hidden">
          <Link
            href={"/"}
            className="block text-[#636270] text-[14px] hover:text-[#007580] font-medium"
          >
            Home
          </Link>
          <Link
            href={"/product"}
            className="block text-[#636270] text-[14px] hover:text-[#007580] font-medium"
          >
            Shop
          </Link>
          <Link
            href={"/product"}
            className="block text-[#636270] text-[14px] hover:text-[#007580] font-medium"
          >
            Product
          </Link>
          <Link
            href={"/product"}
            className="block text-[#636270] text-[14px] hover:text-[#007580] font-medium"
          >
            Pages
          </Link>
          <Link
            href={"/about"}
            className="block text-[#636270] text-[14px] hover:text-[#007580] font-medium"
          >
            About
          </Link>
          <div className="mt-4">
            <span className="font-normal text-[#636270] text-[14px]">
              Contact:
            </span>
            <span className="font-medium text-[#272343] text-[14px] block">
              (808) 555-0111
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
