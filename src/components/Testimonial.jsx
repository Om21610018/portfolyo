import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import MyContext from "../context/MyContext";
import { px } from "framer-motion";

export default function Testimonial() {
  const { data } = useContext(MyContext);
  return (
    <>
      <div name="testimonial" className=" section">
        <p className="text-2xl lg:text-4xl  font-bold border-b-4 border-yellow p-2 inline">
          Testimonial
        </p>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mt-12"
        >
          {data?.testimonials?.map((item, index) => (
            <SwiperSlide>
              <div className="h-[500px] gap-y-3 sm:px-[300px]  px-14 flex flex-col justify-center items-center bg-secondary">
                <div className=" w-[20%]">
                  <img
                    src={item?.image?.url}
                    alt="image"
                    className=" rounded-full border-blue border-4"
                  />
                </div>
                <p className=" text-xl font-semibold text-yellow">
                  {item?.name}
                </p>
                <p className=" text-lg  ">{item?.position}</p>
                <p className=" text-sm opacity-70">{item?.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
