import React from 'react'
import gifvid from '../assets/4153588-uhd_4096_2160_25fps.mp4-ezgif.com-video-to-gif-converter.gif';


const Prefooter = () => {
    return (
        <>
            <section className = 'bg-cover w-[100%] md:min-h-[84vh] min-h-[70vh]  object-cover flex justify-center items-center' style = {{ backgroundImage: `url(${gifvid})` }}>
                <section className = 'container mx-auto px-4 lg:px-12 flex flex-col gap-6'>
                    <h1 className = ' lg:w-[30%] md:w-[40%] text-[#FFFFFF] text-[30px] md:text-[40px] lg:text-[47px] font-semibold md:leading-[53px] '>Want to know more?</h1>
                    <button className = 'md:w-[290px] w-[200px] md:h-[47px] h-[40px] bg-white rounded-[5px] text-black md:text-[20px] text-[17px] '>Get in Touch</button>
                </section>
            </section>
        </>
    )
}

export default Prefooter
