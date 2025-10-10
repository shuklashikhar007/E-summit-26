import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
interface AlternativeComponentProps {
  heading: string;
  gradientText: string;
  slidesData: any[]; 
  uniqueClass: string;
}

const  AlternativeComponent: React.FC<AlternativeComponentProps>  = ({ heading, gradientText, slidesData, uniqueClass }) => {
  // console.log("Heading:", heading);
  // console.log("GradientText:", gradientText);
  return (
    <div className={`w-full max-w-screen-xl mx-auto `}>
  
   
     <div className="relative ">
     <h1 className="text-2xl font-bold mb-8 mt-8 text-center realative">{heading}</h1>  
</div>
      <Swiper
        slidesPerView={1} // Only one column of slides
         
        grid={{
          rows: 3, // 3 rows in the grid
          fill: "row", 
        }}
        modules={[Grid, Navigation]} 
        navigation 
        className="mySwiper md:w-full w-1/3  flex justify-around"
      >
        {slidesData.map((item, index) => (
          <SwiperSlide key={index} >
            {item.name ? (
              <div className="flex flex-col items-center mx-auto mb-3 bg-white bg-opacity-10 p-5 rounded-lg text-white w-full max-w-[300px]">
                <h4 className="mb-2 text-lg font-semibold">{item.name}</h4>
                <p className="text-sm">{item.post}</p>
              </div>
            ) : (
              <div className="bg-white bg-opacity-10 p-8  mx-auto mb-5 rounded-lg flex justify-center items-center w-full max-w-[120px]">
                <img
                  src={item.img}
                  alt={`Brand ${index}`}
                  className="w-auto h-auto max-h-[80px]  object-contain"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlternativeComponent;
