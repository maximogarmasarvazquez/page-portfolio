"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { techsDataBack } from "@/data";

const SliderBack = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 3, spaceBetween: 10, slidesPerGroup: 3 }, // En pantallas pequeñas, 1 slide por vez
        768: { slidesPerView: 2, spaceBetween: 10, slidesPerGroup: 2 }, // En pantallas medianas, 2 slides por vez
        1024: { slidesPerView: 3, spaceBetween: 10, slidesPerGroup: 3 }, // En pantallas grandes, 3 slides por vez
      }}
      freeMode={true}
      pagination={{ clickable: true, el: ".custom-pagination" }} // Asignar el contenedor de la paginación
      modules={[Pagination]}
      className="w-[280px] h-auto"
    >
      {techsDataBack.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="  sm:flex-col gap-x-6 sm:gap-x-0 group flex flex-col items-center justify-center p-5 md:w-20 md:h-20 md:p-2 bg-[#1d3a54] rounded-md">
            <div className="text-3xl text-secondary">{item.icon}</div>
            <h3 className="text-xs text-white text-center">{item.title}</h3>
          </div>
        </SwiperSlide>
      ))}
      {/* Contenedor de la paginación con clase personalizada */}
      <div className="custom-pagination mt-6 flex justify-center items-center"></div> {/* Centra la paginación */}
    </Swiper>
  );
};

export default SliderBack;