import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import homeBackground from '../assets/abstract-geometric-white-and-gray-on-light-silver-gradient-background-modern-banner-design-illustration-free-vector 1.jpg'
import arrowright from '../assets/arrow-right.svg';
import pzimage from '../assets/image 15.jpg';
import midimage from '../assets/w=1024 1.jpg';
// import pzcussion from '../assets/Frame 140.jpg';
import annualimg from '../assets/annual-report-2024-1 1.jpg';
import climbimg from '../assets/iStock-649871644_LRG-scaled 1.jpg';
import calimg from '../assets/45275_PZ_factsheet_web_banner_v02 1.jpg'

const Home = () => {
    return (
        <>
           <section className = "bg-[url('')] bg-cover h-[148vh] md:h-[80vh] lg:h-[90vh] pt-5 md:pt-0 md:flex justify-center items-center" style = {{ backgroundImage: `url(${homeBackground})` }}>
               <section className = 'container mx-auto px-4  '>
                   <div className = 'flex flex-col gap-5'>
                       <div>
                          <h1 className = 'mb-2 font-[700] text-center font-barlow text-[40px] md:text-[60px] lg:text-[80px] text-[#13294B] leading-[45px] md:leading-[65.8px] w-[100%]'>FOR EVERYONE, FOR LIFE,</h1>
                          <h1 className = ' font-[700] text-center font-barlow text-[40px] md:text-[60px] lg:text-[80px] text-[#C60C30] leading-[50px] md:leading-[65.8px]'>FOR GOOD.</h1>
                       </div>
                       <div className = 'mx-auto flex flex-col md:flex-row items-center gap-4'>
                           <button className = 'bg-[#C60C30] text-[#FFFFFF] text-[16px] md:text-[17px] font-[400] rounded-[6px] px-[10px] py-[8px]'>Discover more about us</button>
                           <div className = 'flex gap-2'>
                             <button className = 'md:text-[17px] text-[#424242] text-[16px] font-[500] ' >watch the film</button>
                             <img src= {arrowright} alt="" className = 'w-[22px]'/>
                           </div>
                       </div>
                       <div className = 'flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
                           <div className = ' bg-[#FFFFFF]  w-[80%]  md:w-[24%] lg:w-[22%] h-[180px] md:h-[170px] flex justify-center items-center rounded-[11px]'>
                               <img src= {pzimage} alt="" className = 'w-[33%] md:w-[110px] '/>
                           </div>
                           <div className = 'lg:w-[55%] md:w-[50%] flex flex-col md:flex-row items-center justify-center'>
                               <img src= {midimage} alt="" className = ' md:w-[100%] lg:w-[80%] rounded-[11px]'/>
                           </div>
                           <div className = 'lg:w-[22%] w-[80%] md:w-[24%] md:h-[170px] bg-[#C60C30] rounded-[11px] flex justify-center items-center h-[200px]'>
                               {/* <img src= {pzcussion} alt="" className = 'w-[100%] h-[100%]'/> */}
                               <h1 className = 'text-[#FFFFFF] font-barlow text-[27px] lg:text-[28px] md:text-[20px] font-[300]' >We are <span className = 'text-[#FFFFFF] font-barlow   lg:text-[28px] md:text-[20px] font-[500]'>PZ Cussions</span> </h1>
                           </div>
                       </div>
                   </div>
               </section>
           </section>

           {/*  */}

           <section className = 'bg-[#FFFFFF] py-7 my-7'>
               <section className = 'container mx-auto px-4'>
                   <section className = 'flex flex-col gap-4' >
                       <section className = 'rounded-[14px] px-[24px] py-4 bg-[#E7E7E7] w-[100%] flex flex-col  md:flex-row md:gap-[0px] gap-[20px] items-center justify-between'>
                          <div className = 'w-[100%] md:w-[31%] lg:w-[30%] '>
                             <h1 className = 'lg:w-[80%] md:w-[100%] text-[#C60C30] text-[25px] md:text-[27px] lg:text-[33px] font-bold leading-[37px] md:leading-[40px] lg:leading-[46px]' >ANNUAL REPORT AND ACCOUNTS 2024</h1>
                          </div>
                          <div className = 'w-[100%] md:w-[36%]  md:flex justify-center items-center lg:w-[36%]'>
                              <div className = 'flex flex-col gap-4 md:w-[100%] lg:w-[69%]'>
                                 <p className = 'text-[#000000] text-[14px] md:text-[13px] lg:text-[14px] leading-[28px] font-[500]'>Since our founding in 1884, we have been creating product to delight, care for and nourish consumers. we are building on these foundations with our strategy and business transformation, as we look to the future.</p>
                                 <span className = 'text-[#C60C30] text-[14px] leading-[28px] font-[500]'>Read our Annual Report and Accounts 2024.</span>
                              </div>
                          </div>
                          <div className = ' md:flex items-center justify-center w-[100%] md:w-[31%] lg:w-[30%]'>
                              <img src= {annualimg} alt="" className = ' w-[100%] md:w-[100%] lg:w-[82%]'/>
                          </div>
                       </section>

                       {/*  */}

                       <section className = 'rounded-[14px] px-[24px] py-4 md:py-0 md:pr-0 md:ps-[24px] bg-[#E7E7E7] w-[100%] flex flex-col  md:flex-row md:gap-[0px] gap-[20px] items-center justify-between'>
                          <div className = 'w-[100%] md:w-[31%] lg:w-[30%] '>
                             <h1 className = 'lg:w-[50%] md:w-[80%] text-[#C60C30] text-[25px] md:text-[27px] lg:text-[33px] font-bold leading-[27px] md:leading-[30px] lg:leading-[36px]' >Interim Results 2025</h1>
                          </div>
                          <div className = 'w-[100%] md:w-[36%]  md:flex justify-center items-center lg:w-[36%]'>
                              <div className = 'flex flex-col gap-4 md:w-[100%] lg:w-[69%]'>
                                 <p className = 'text-[#000000] text-[14px] md:text-[13px] lg:text-[14px] leading-[28px] font-[500]'>Solid overall trading in UK, Indonesia and ANZ. On track to meet FY25 expectations.</p>
                                 <span className = 'text-[#C60C30] text-[14px] leading-[28px] font-[500]'>Read More.</span>
                              </div>
                          </div>
                          <div className = ' md:flex items-center justify-center md:justify-end w-[100%] md:w-[31%] lg:w-[30%]'>
                              <img src= {climbimg} alt="" className = ' w-[100%] md:w-[100%] lg:w-[82%]'/>
                          </div>
                       </section>

                       {/*  */}

                       <section className = 'rounded-[14px] px-[24px] py-4 md:py-0 md:pr-0 md:ps-[24px] bg-[#E7E7E7] w-[100%] flex flex-col  md:flex-row md:gap-[0px] gap-[20px] items-center justify-between'>
                          <div className = 'w-[100%] md:w-[31%] lg:w-[30%] '>
                             <h1 className = 'lg:w-[53%] md:w-[80%] text-[#C60C30] text-[25px] md:text-[27px] lg:text-[33px] font-bold leading-[27px] md:leading-[30px] lg:leading-[36px]' >PZ Cussons at a Glance</h1>
                          </div>
                          <div className = 'w-[100%] md:w-[36%]  md:flex justify-center items-center lg:w-[36%]'>
                              <div className = 'flex flex-col gap-4 md:w-[100%] lg:w-[69%]'>
                                 <p className = 'text-[#000000] text-[14px] md:text-[13px] lg:text-[14px] leading-[28px] font-[500]'>Since our founding in 1884, we have been creating product to delight, care for and nourish consumers.</p>
                                 <span className = 'text-[#C60C30] text-[14px] leading-[28px] font-[500]'>Read More.</span>
                              </div>
                          </div>
                          <div className = ' md:flex items-center justify-center md:justify-end w-[100%] md:w-[31%] lg:w-[30%]'>
                              <img src= {calimg} alt="" className = ' w-[100%] md:w-[100%] lg:w-[82%]'/>
                          </div>
                       </section>
                   </section>
               </section>
           </section>

           {/*  */}


           <section>
               <h1>Discover Our Must win Brands</h1>
               <section className = 'container mx-auto px-4'>
                   <section className = 'flex justify-between items-center'>
                       <section className = 'flex gap-3'>
                       <NavLink
                         to="/home/allbrands"
                         end
                         className={({ isActive }) =>
                         isActive
                           ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2"
                           : " font-medium text-[16px] text-[#B3B3B3] leading-[28px] "}>
                           All Brands
                      </NavLink>
                       <NavLink
                         to="/home/hygiene"
                         end
                         className={({ isActive }) =>
                         isActive
                           ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2"
                           : " font-medium text-[16px] text-[#B3B3B3] leading-[28px] "}>
                           Hygiene
                      </NavLink>
                       <NavLink
                         to="/home/beauty"
                         end
                         className={({ isActive }) =>
                         isActive
                           ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2"
                           : " font-medium text-[16px] text-[#B3B3B3] leading-[28px] "}>
                           Beauty
                      </NavLink>
                       <NavLink
                         to="/home/baby"
                         end
                         className={({ isActive }) =>
                         isActive
                           ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2"
                           : " font-medium text-[16px] text-[#B3B3B3] leading-[28px] "}>
                           Baby
                      </NavLink>

                       </section>
                       <section>
                           <input type="search" name="" id=""/>
                       </section>
                   </section>
               </section>
           </section>
           <Outlet/>
        </>
    )
}

export default Home
