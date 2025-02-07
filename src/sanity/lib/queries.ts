import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "products"]`;
export const featuredProducts = groq`*[_type == "products" && "featured" in tags][1..4]`;
export const ourProducts = groq`*[_type == "products"][0..7]`;
export const allCategories = groq`*[_type == "categories"]`;
export const productDetails = groq`*[_type == "products" && _id == $id][0]`;
export const categoryDetails = groq`*[_type == "categories" && _id == $id][0]`;
export const productsByCategory = groq`*[_type == "products" && category._ref == $categoryId]`;
export const relatedProducts = `*[_type == "products" && category._ref == $categoryId && _id != $currentProductId][0..3]`;
