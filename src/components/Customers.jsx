"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "@/features/customers/CustomersSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Customers = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers || { data: [] });

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);
  // Collect all reviews from all products into a single array
  // so I can display them easily in the testimonials slider.
  const allReviews = customers.data.flatMap(
    (product) => product.reviews?.map((review) => review) || [],
  );

  return (
    <div className="max-w-6xl mx-auto px-4 my-30">
      {/* title and arrow buttons */}
      <div className="flex items-center justify-between mb-18">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="flex">
          <button className="custom-prev px-5 py-2 cursor-pointer hover:bg-black hover:text-white transition">
            <ArrowLeft />
          </button>
          <button className="custom-next px-5 py-2 cursor-pointer hover:bg-black hover:text-white transition">
            <ArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {allReviews.slice(0, 12).map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#f9f9f9] border rounded-2xl p-8 h-full">
              <div className="flex gap-1 text-yellow-400 mb-4 text-lg">
                {Array.from({ length: Math.round(review.rating) }).map(
                  (_, i) => (
                    <span key={i}>★</span>
                  ),
                )}
              </div>

              {/* name reviewer */}
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
                {review.reviewerName}
                <span className="w-5 h-5 flex items-center justify-center bg-green-500 text-white text-xs rounded-full">
                  ✔
                </span>
              </h3>

              {/* comment  */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {review.comment}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customers;
