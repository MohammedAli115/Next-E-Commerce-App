import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-[#F2F0F1] overflow-hidden">
      <div className="mx-auto max-w-6xl py-5 px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Text Content */}
        <div className="animate-bounce [animation-iteration-count:2]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="text-gray-600 my-4 max-w-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link
            href="/products"
            className="bg-black block md:inline-block text-center text-white px-8 mt-4 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>

          {/* Stats */}
          <div className="flex  gap-8 pt-6 justify-center md:justify-start">
            <div>
              <h2 className="text-3xl font-bold text-black">200+</h2>
              <p className="text-sm text-gray-600">International Brands</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black">2,000+</h2>
              <p className="text-sm text-gray-600">High-Quality Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black">30,000+</h2>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Image In md Screens*/}
        <div className="img flex justify-center lg:justify-end animate-bounce [animation-iteration-count:2]">
          <Image
            src="/images/hero.svg"
            alt="Hero Image"
            width={430}
            height={0}
            loading="eager"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
