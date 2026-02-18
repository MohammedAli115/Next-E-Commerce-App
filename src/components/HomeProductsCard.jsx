"use client";
import { getProducts } from "@/features/products/ProductsSlice";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Star } from "lucide-react";

const HomeProductsCard = ({ title, start, end }) => {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center font-bold text-2xl text-red-500">{error}</p>
    );

  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {data?.slice(start, end).map((product) => {
          const discountedPrice = (
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2);

          return (
            <div
              key={product.id}
              className="shadow rounded-2xl p-6 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="bg-[#e8e8e8] rounded-xl flex items-center justify-center h-56 mb-4">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  priority
                  width={200}
                  height={210}
                  className=" object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 line-clamp-1">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((item, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating}/5
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">${discountedPrice}</span>

                {product.discountPercentage > 0 && (
                  <>
                    <span className="text-gray-400 line-through">
                      ${product.price}
                    </span>
                    <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">
                      -{Math.round(product.discountPercentage)}%
                    </span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <button className="border px-8 py-3 rounded-xl cursor-pointer hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default HomeProductsCard;
