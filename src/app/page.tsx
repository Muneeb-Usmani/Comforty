import Categories from "@/components/homePage/Categories";
import CompanyLogo from "@/components/homePage/CompanyLogo";
import FeaturedProducts from "@/components/homePage/FeaturedProducts";
import Hero from "@/components/homePage/Hero";
import HotProduct from "@/components/homePage/HotProduct";
import OurProducts from "@/components/homePage/OurProducts";

export default async function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <FeaturedProducts />
      <Categories />
      <HotProduct />
      <OurProducts />
    </>
  );
}
