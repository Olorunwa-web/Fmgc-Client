import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import images1 from '../assets/Frame 140.png'
import images2 from '../assets/Frame 143.png'
import images3 from '../assets/Frame 146.png'
import images4 from '../assets/Frame 146 (1).png'
import images5 from '../assets/Frame 1171276147.png'
import 'swiper/css';
import 'swiper/css/effect-fade';

const Swipes2 = () => {
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
                      <img src= {images1} alt="" className = 'w-[100%] h-[100%]'/>
               </SwiperSlide>
               <SwiperSlide className = ' w-[100%] h-[100%]'>
                    <img src= {images2} alt="" className = 'w-[100%] h-[100%]  '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {images3} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {images4} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {images5} alt="" className = 'w-[100%] h-[100%] '/>
               </SwiperSlide>
            </Swiper>
            </div> 
        </>
    )
}

export default Swipes2
