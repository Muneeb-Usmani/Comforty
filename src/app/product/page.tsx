"use client";
import { Badge } from "@/components/ui/badge";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useToast } from "@/hooks/use-toast";
import { useGlobalContext } from "../context/GlobalContext";
import { useSearchParams, useRouter } from "next/navigation";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const { toast } = useToast();
  const { addToCart, searchQuery, setSearchQuery } = useGlobalContext();
  const searchParams = useSearchParams();
  const searchParamValue = searchParams.get("search")?.toLowerCase() || "";
  const [sortOption, setSortOption] = useState("newest");
  const [showDiscounted, setShowDiscounted] = useState(false);
  const router = useRouter();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === "all") {
      router.push("/product");
    } else {
      router.push(`/${selectedCategory.replace(/\s+/g, "-").toLowerCase()}`);
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      const productsData: Product[] = await client.fetch(allProducts);
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    setSearchQuery(searchParamValue);
  }, [searchParamValue, setSearchQuery]);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    .filter((product) => (showDiscounted ? product.priceWithoutDiscount : true))
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "name") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <>
      <div className="mx-auto px-4 py-4 max-w-[1321px] flex flex-wrap gap-4 justify-between items-center">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded-lg bg-white text-gray-700"
        >
          <option value="newest">Sort</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name (A-Z)</option>
        </select>

        <select
          onChange={handleCategoryChange}
          className="p-2 border rounded-lg bg-white text-gray-700"
        >
          <option value="all">All Categories</option>
          <option value="wing-chair">Wing Chair</option>
          <option value="wooden-chair">Wooden Chair</option>
          <option value="desk-chair">Desk Chair</option>
        </select>

        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            checked={showDiscounted}
            onChange={() => setShowDiscounted(!showDiscounted)}
          />
          <span>Show Discounted Products</span>
        </label>
      </div>

      <div className="mx-auto px-4 py-10 max-w-[1321px]">
        <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight mb-8">
          All Products
        </h1>

        <div className="flex flex-wrap gap-6 gap-y-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                      });
                      toast({
                        title: "Product Added To Cart",
                        variant: "default",
                      });
                    }}
                    className="rounded bg-[#F0F2F3] p-2 hover:text-white transition-colors hover:bg-[#00A294]"
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
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
}
