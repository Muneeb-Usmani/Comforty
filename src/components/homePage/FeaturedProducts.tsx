"use client";
import { Badge } from "@/components/ui/badge";
import { featuredProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useToast } from "@/hooks/use-toast";
import { useGlobalContext } from "@/app/context/GlobalContext";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const { toast } = useToast();

  const { addToCart } = useGlobalContext();
  useEffect(() => {
    async function fetchProducts() {
      const productsData: Product[] = await client.fetch(featuredProducts);
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  return (
    <div className="mx-auto px-4 py-20 max-w-[1321px]">
      <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Featured Products
      </h1>

      <div className="flex flex-wrap gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="group relative rounded-lg bg-white w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.badge == "New" && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </Badge>
              )}
              {product.priceWithoutDiscount && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sales
                </Badge>
              )}
              <Link href={`product/${product._id}`}>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    height={400}
                    width={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.priceWithoutDiscount && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.priceWithoutDiscount}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => {
                  addToCart({
                    id: product._id,
                    _id: product._id,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                    image: product.image ? urlFor(product.image).url() : "",
                    description: product.description || "",
                  }),
                    toast({
                      title: "Product Added To Cart",
                      variant: "default",
                    });
                }}
                className="rounded bg-[#F0F2F3] p-2  hover:text-white transition-colors hover:bg-[#00A294]"
              >
                <Image
                  src="/cart.svg"
                  height={16.54}
                  width={16.96}
                  alt="cart icon"
                />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
