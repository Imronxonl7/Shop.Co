import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";

export default function SwiperProduct({ allCategories, products }) {
  return (
    <div className="space-y-16">
      {allCategories?.map((category, categoryIndex) => {
        // Filter products for this category
        const categoryProducts = products?.filter(
          (item) => item.category === category
        );

        return (
          <div key={categoryIndex} className="pt-10">
            {/* Category Title */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase mb-8">
              {category}
            </h2>

            {/* Swiper for this category */}
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={categoryProducts?.length > 4}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper pb-12"
            >
              {categoryProducts?.map((el, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <ProductCard el={el} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* View All Button */}
            {/* <div className="flex justify-center mt-8">
              <button className="border border-[#0000001A] rounded-full h-12 sm:h-13 w-full sm:w-auto px-8 sm:px-13.5 py-3 sm:py-4 text-sm sm:text-base text-black font-medium hover:bg-gray-100 transition-colors">
                View All
              </button>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}