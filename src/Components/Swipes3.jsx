import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import midimage1 from '../assets/Frame 139.png';
import midimage2 from '../assets/Frame 142.png';
import midimage3 from '../assets/Frame 145.png';
import midimage4 from '../assets/Frame 145 (1).png';
import midimage5 from '../assets/Frame 1171276146.png';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Swipes3 = () => {
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
               className="w-[100%]  md:w-[100%] lg:w-[100%] md:h-[100%] lg:h-[100%]  ">
               <SwiperSlide className = '  w-[100%] h-[100%] ' >
                      <img src= {midimage1} alt="" className = 'w-[100%] h-[100%]'/>
               </SwiperSlide>
               <SwiperSlide className = ' w-[100%] h-[100%]'>
                    <img src= {midimage2} alt="" className = 'w-[100%] h-[100%]  '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {midimage3} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {midimage4} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {midimage5} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
            </Swiper>
            </div>
        </>
    )
}

export default Swipes3
