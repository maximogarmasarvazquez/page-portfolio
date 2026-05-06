"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { techsDataFront } from "@/data";

const SliderFront = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 3, spaceBetween: 12 },
        768: { slidesPerView: 3, spaceBetween: 16 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
      }}
      freeMode={true}
      pagination={{ clickable: true, el: ".custom-pagination" }}
      modules={[Pagination]}
      className="w-full max-w-sm"
    >
      {techsDataFront.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="
              group flex flex-col items-center justify-center
              p-5 rounded-xl

              bg-white/5 backdrop-blur-xl
              border border-white/10

              hover:border-white/20
              hover:bg-white/10

              transition-all duration-300
            "
          >
            {/* ICON */}
            <div
              className="
                text-3xl text-secondary
                transition-transform duration-300
                group-hover:scale-110
              "
            >
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xs text-gray-300 mt-2 text-center">
              {item.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}

      {/* PAGINATION */}
      <div className="custom-pagination mt-6 flex justify-center items-center" />
    </Swiper>
  );
};

export default SliderFront;