import Brands from "@/components/BrandStip";
import Customers from "@/components/Customers";
import Hero from "@/components/Hero";
import HomeProductsCard from "@/components/HomeProductsCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />

      {/* New Arrival Component  , slice (start, end) */}
      <HomeProductsCard title={"NEW ARRIVALS"} start={5} end={9} />
      {/* Top Selling Component , slice (start, end) */}
      <HomeProductsCard title={"TOP SELLING"} start={10} end={14} />
      <Customers />
    </div>
  );
}
