"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface SlideData {
  name?: string;
  post?: string;
  description?: string;
}

interface CustomSliderProps {
  heading: string;
  gradientText: string;
  slidesData: SlideData[];
  sliderType: "participant" | "sponsor";
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  heading,
  gradientText,
  slidesData,
  sliderType,
}) => {
  const navigationPrev = useRef<HTMLDivElement>(null);
  const navigationNext = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (navigationPrev.current && navigationNext.current) {
      navigationPrev.current.addEventListener("click", () => {
        setActiveIndex((prev) => prev - 1);
      });
      navigationNext.current.addEventListener("click", () => {
        setActiveIndex((prev) => prev + 1);
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-0 sm:px-6 lg:px-8 overflow-hidden relative z-10">
      {/* Heading */}
      <div className="mb-12 text-center relative z-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 break-words">
          {sliderType === "participant" ? (
            <>
              What our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                {gradientText}
              </span>{" "}
              for us?
            </>
          ) : (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              {gradientText}
            </span>
          )}
        </h2>
      </div>

      {/* Slider Section */}
      <div className="relative w-full overflow-hidden z-10 mb-12">
        <Swiper
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            1100: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
          navigation={{
            nextEl: navigationNext.current,
            prevEl: navigationPrev.current,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Navigation]}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`transition-transform duration-500 ${
                index === activeIndex ? "scale-105 z-10" : "scale-95 opacity-80"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1e1e1e] via-[#222] to-[#2a2a2a] border border-gray-700/50 rounded-2xl shadow-lg sm:px-8 p-6 flex flex-col items-center gap-3 min-h-[220px] hover:border-pink-500/40 transition-all duration-300">
                <p className="text-pink-400 text-center text-sm italic">
                  {slide.post}
                </p>
                <h3 className="text-white font-semibold text-lg">
                  {slide.name}
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div
          ref={navigationPrev}
          className="absolute max-sm:w-7 max-sm:h-7 top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer 
          bg-gradient-to-r from-pink-500 to-purple-600 w-12 h-12 flex justify-center items-center 
          rounded-full shadow-lg shadow-pink-500/30 hover:scale-110 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div
          ref={navigationNext}
          className="absolute max-sm:w-7 max-sm:h-7 top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer 
          bg-gradient-to-r from-purple-600 to-pink-500 w-12 h-12 flex justify-center items-center 
          rounded-full shadow-lg shadow-purple-500/30 hover:scale-110 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;

