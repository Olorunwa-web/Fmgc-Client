import React ,{ useState } from 'react'
import { hygiene } from '../data';
import dot from '../assets/dot-svgrepo-com.svg';




const Hygiene = () => {
   


    return (
        <>
           <section>
           <section className = 'md:flex md:flex-wrap justify-between items-center'>
                       {hygiene.map((product)=> {
                           const {id, Image, title, use1, use2, use3, use4 } = product
                           return (
                               <div key = {id} className = 'w-[100%] mb-[2.3rem] md:mb-[3rem]  md:w-[46%] lg:w-[28.7%]'>
                                   <div className = 'flex flex-col gap-2'>
                                       <div className = 'relative group'>
                                         <img src= {Image} alt="" className = 'w-[100%] cursor-pointer'/>
                                         <div className = ''>
                                          <div className = 'bg-[#FFFFFF] rounded-tl-[5px] rounded-tr-[5px] w-[100%] absolute top-0 py-4 ps-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                                             <h3 className = 'text-[#000000] text-[16px] font-[500]'>FEATURES</h3>
                                             <div className = 'flex flex-col gap-1'>
                                                 <div className = 'flex items-center'>
                                                     <img src= {dot} alt="" className = 'w-[17px]'/>
                                                     <span className = 'text-[#000000] text-[14px] font-[500] mt-1'>{use1}</span>
                                                 </div>
                                                 <div className = 'flex items-center'>
                                                     <img src= {dot} alt="" className = 'w-[17px]'/>
                                                     <span className = 'text-[#000000] text-[14px] font-[500] mt-1' >{use2}</span>
                                                 </div>
                                                 <div className = 'flex items-center'>
                                                     <img src= {dot} alt="" className = 'w-[17px]'/>
                                                     <span className = 'text-[#000000] text-[14px] font-[500] mt-1'>{use3}</span>
                                                 </div>
                                                 <div className = 'flex items-center'>
                                                     <img src= {dot} alt="" className = 'w-[17px] '/>
                                                     <span className = 'text-[#000000] text-[14px] font-[500] mt-1'>{use4}</span>
                                                 </div>
                                             </div>
                                          </div>
                                         </div>
                                       </div>
                                       <div>
                                          <h4 className = 'text-[#000000] text-[17px] md:text-[19px] font-[400]' >{title}</h4>
                                       </div>
                                   </div>
                               </div>
                           )
                       })}
                   </section>
           
           </section>
          
        </>

    )
}

export default Hygiene
