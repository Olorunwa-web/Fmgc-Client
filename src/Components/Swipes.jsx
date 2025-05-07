import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import image1 from '../assets/Frame 141.png';
import image2 from '../assets/Frame 144.png';
import image3 from '../assets/Frame 144 (1).png';
import image4 from '../assets/Frame 1171276145.png';
import pzimage from '../assets/Frame 137.png';
import 'swiper/css';
import 'swiper/css/effect-fade';


const Swipes = () => {
    return (
        <>
            <div className = 'hidden md:block'>
            <Swiper
               modules={[EffectFade, Autoplay]}
               effect="fade"
               autoplay={{
               delay: 4000,
               disableOnInteraction: false,
               }}
               loop={true}
               className="w-[95%]  md:w-[100%] lg:w-[95%] md:h-[100%] lg:h-[100%]  ">
               <SwiperSlide className = '  w-[100%] h-[100%] ' >
                      <img src= {pzimage} alt="" className = 'w-[100%] h-[100%]'/>
               </SwiperSlide>
               <SwiperSlide className = ' w-[100%] h-[100%]'>
                    <img src= {image1} alt="" className = 'w-[100%] h-[100%]  '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {image2} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {image3} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {image4} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
            </Swiper>
            </div>
        </>
    )
}

export default Swipes
