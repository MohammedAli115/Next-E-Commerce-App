import Brands from "@/components/home/BrandStip";
import Customers from "@/components/home/Customers";
import Hero from "@/components/home/Hero";
import HomeProductsCard from "@/components/home/HomeProductsCard";


export default function Home() {
  return (
    <div>
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
