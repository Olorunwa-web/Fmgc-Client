import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import imgage1 from '../assets/Frame 1171276227.jpg';
import image6 from '../assets/Frame 1171276233.jpg';
import image7 from '../assets/Frame 1171276234.jpg';
import pzimage from '../assets/image 15.jpg';
import 'swiper/css';
import 'swiper/css/effect-fade';


const Swipes = () => {
    return (
        <>
            <div>
            <Swiper
               modules={[EffectFade, Autoplay]}
               effect="fade"
               autoplay={{
               delay: 4000,
               disableOnInteraction: false,
               }}
               loop={true}
               className="w-[100%]  md:w-[100%] lg:w-[100%] h-[180px] md:h-[170px] rounded-[11px] ">
               <SwiperSlide className = 'bg-[#FFFFFF]  w-[100%] h-[100%] ' >
                   <div className = 'flex justify-center items-center py-12' >
                      <img src= {pzimage} alt="" className = 'w-[90px] md:w-[100px] object-fit'/>
                   </div>
               </SwiperSlide>

               <SwiperSlide className = ' w-[100%] h-[100%]'>
                    <img src= {imgage1} alt="" className = 'w-[100%] h-[100%]  '/>
               </SwiperSlide>

               <SwiperSlide >
                    <img src= {image7} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
            </Swiper>
            </div>
        </>
    )
}

export default Swipes
