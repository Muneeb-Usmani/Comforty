"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { productDetails } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useGlobalContext } from "@/app/context/GlobalContext";
import RelatedProducts from "@/components/products/RelatedProduct";

export default function ProductPage() {
  const { toast } = useToast();
  const { addToCart } = useGlobalContext();
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const productData: Product = await client.fetch(productDetails, {
            id,
          });
          setProduct(productData);
        } catch (error) {
          console.error("Failed to fetch product details:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-10 font-inter">
        <div className="max-w-[675px] w-full">
          {product?.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              className="w-5/6 h-5/6 lg:w-[660px] lg:h-[500px] xl:w-[675px] xl:h-[607px] object-cover rounded-lg"
              height={607}
              width={675}
            />
          )}
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left gap-3">
          <h1 className="text-[#272343] font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-7">
            {product?.title}
          </h1>
          <button className="w-[130px] h-[44px] mb-7 px-6 py-2 bg-[#029FAE] text-white rounded-lg hover:bg-[#307075] transition-all">
            ${product?.price}
          </button>
          <hr className="w-[543px] border-gray-300 mb-7" />
          <p className="w-[543px] text-[#272343] opacity-[60%] font-normal text-base md:text-lg lg:text-xl leading-relaxed">
            {product?.description}
          </p>
          <Link href="/cart">
            <button
              onClick={() => {
                if (product) {
                  addToCart({
                    id: product._id,
                    _id: product._id,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                    image: product.image ? urlFor(product.image).url() : "",
                    description: product.description || "",
                  });
                  toast({
                    title: "Product Added To Cart",
                    variant: "default",
                  });
                }
              }}
              className="h-[63px] w-[212px] flex items-center justify-center lg:justify-start mt-6 py-[14px] px-6 gap-3 text-lg font-semibold bg-[#029FAE] rounded-lg hover:scale-105 transition-transform"
            >
              <Image src="/cart.svg" alt="cart" width={24} height={24} />
              <span className="text-white">Add to Cart</span>
            </button>
          </Link>
        </div>
      </div>

      {product?.category?._ref && (
        <RelatedProducts
          categoryId={product.category._ref}
          currentProductId={product._id}
        />
      )}
    </div>
  );
}
