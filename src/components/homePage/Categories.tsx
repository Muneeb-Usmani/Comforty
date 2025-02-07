"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Category } from "../../../types/categories";
import { urlFor } from "@/sanity/lib/image";
import { allCategories } from "@/sanity/lib/queries";

export default function Categories() {
  function slugify(str: string) {
    str = str.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
    str = str
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    return str;
  }

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function featuredCategories() {
      const fetchCategories: Category[] = await client.fetch(allCategories);
      setCategories(fetchCategories);
    }
    featuredCategories();
  }, []);

  return (
    <div className="w-full px-4 pb-32 flex justify-center">
      <div className="w-full max-w-screen-xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-start text-[#272343]">
          Top Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`${slugify(category.title)}`}
              className="relative w-full h-[424px] rounded-lg overflow-hidden shadow-md"
            >
              {category.image && (
                <Image
                  src={urlFor(category.image).url()}
                  alt={category.title}
                  className="object-cover w-full h-full"
                  width={424}
                  height={424}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-[#000000B2] p-4 gap-2 h-[85px] flex flex-col items-start justify-center">
                <h3 className="text-[20px] leading-[22px] text-white">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-[14px] leading-[15.4px]">
                  {category.products}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
