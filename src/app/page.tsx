import HeroSection from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import LatestProducts from "@/components/latest-products";
import Shopex from "@/components/shopex";
import Banner from "@/components/banner";
import Discount from "@/components/discount";
import BrandLogos from "@/components/brands";
import LatestBlog from "@/components/blog";
import { NewsletterSection } from "@/components/newsletter-section";
import { TrendingProducts } from "@/components/ui/trending-products";
import TopCategories from "@/components/top-categories";


export default function Home() {
  return (
   <div>
  <HeroSection/>
  <FeaturedProducts/>
  <LatestProducts/>
  <Shopex/>
  <Banner/>
  <TrendingProducts/>
  <Discount/>
  <TopCategories/>
  <BrandLogos/>
  <NewsletterSection/>
  <LatestBlog/>

   </div>
  );
}
