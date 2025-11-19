import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  const plants = [
    {
      name: "Snake Plant",
      slogan: "Purify your air, naturally",
      img: "https://i.ibb.co.com/3nk3sr6/snake-plants.jpg",
    },
    {
      name: "Peace Lily",
      slogan: "Bring peace and freshness",
      img: "https://i.ibb.co.com/rK1XtNpL/peace-lily.jpg",
    },
    {
      name: "Aloe Vera",
      slogan: "Nature’s healing touch",
      img: "https://i.ibb.co.com/BVxd5Nq5/aloe-vera.jpg",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-25 mb-10 md:my-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="rounded-2xl shadow-lg"
      >
        {plants.map((plant, index) => (
          <SwiperSlide key={index}>
            <div className="relative text-center ">
              <img
                src={plant.img}
                alt={plant.name}
                className="w-full h-60 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-green bg-opacity-40 flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl  font-bold mb-2">{plant.name}</h2>
                <p className="text-lg font-bold italic">{plant.slogan}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
