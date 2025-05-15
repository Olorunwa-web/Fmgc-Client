import React, {useState , useEffect, useRef } from 'react'
import { NavLink, Outlet,Link } from 'react-router-dom'
import homeBackground from '../assets/abstract-geometric-white-and-gray-on-light-silver-gradient-background-modern-banner-design-illustration-free-vector 1.jpg'
import arrowright from '../assets/arrow-right.svg';
import midimage from '../assets/w=1024 1.jpg';
import annualimg from '../assets/annual-report-2024-1 1.png';
import climbimg from '../assets/iStock-649871644_LRG-scaled 1.png';
import calimg from '../assets/45275_PZ_factsheet_web_banner_v02 1.png';
import dot from '../assets/dot-svgrepo-com.svg';
import { allbrands } from '../data';
import { news } from '../data';
import Swipes from '../Components/Swipes';
import Swipes2 from '../Components/Swipes2';
import Swipes3 from '../Components/Swipes3';
import Prefooter from '../Components/Prefooter';
import { motion } from 'framer-motion';




const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const productContainerRef = useRef(null);

  
    const totalPages = Math.ceil(allbrands.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const ALL = allbrands.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        productContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [currentPage]);

     


    return (
        <>
           <section className = "bg-[url('')] bg-cover py-12 md:py-13 lg:py-14 flex justify-center items-center" style = {{ backgroundImage: `url(${homeBackground})` }}>
               <motion.section className = 'container mx-auto px-4 lg:px-12 '
                 initial= {{ opacity: 0, }}
                 animate = {{opacity: 1 }}
                 transition = {{ delay: 0.3, duration: 0.8, ease: 'easeInOut'}}
               >
                   <div className = 'flex flex-col gap-5'>
                       <div>
                          <h1 className = 'mb-2 font-[700] text-center font-barlow text-[40px] md:text-[60px] lg:text-[80px] text-[#13294B] leading-[45px] md:leading-[65.8px] w-[100%]'>FOR EVERYONE, FOR LIFE,</h1>
                          <h1 className = ' font-[700] text-center font-barlow text-[40px] md:text-[60px] lg:text-[80px] text-[#C60C30] leading-[50px] md:leading-[65.8px]'>FOR GOOD.</h1>
                       </div>
                       <div className = 'mx-auto flex flex-col md:flex-row items-center gap-4'>
                           <Link to = '/about'><button className = 'bg-[#C60C30] text-[#FFFFFF] text-[16px] md:text-[17px] font-[400] rounded-[6px] px-[10px] py-[8px]'>Discover more about us</button></Link>
                           <a href="https://youtu.be/KkD9dloICRs?si=iQ_CalvB25-eEnkB" target="_blank" rel="noopener noreferrer">
                             <div className = 'flex gap-2'>
                                 <button className = 'md:text-[17px] text-[#424242] text-[16px] font-[500] ' >watch the film</button>
                                 <img src= {arrowright} alt="" className = 'w-[22px]'/>
                             </div>
                           </a>
                       </div>
                       <div className = 'flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
                           <div className = ' w-[80%] md:w-[24%] lg:w-[26%] md:h-[100%]  lg:h-[90%] '>
                               <Swipes/>
                           </div>
                           <div className = 'w-[100%] lg:w-[41%] md:w-[47%] md:h-[100%] lg:h-[100%] '>
                               <Swipes3/>
                           </div>
                           <div className = ' w-[80%] md:w-[24%] lg:w-[26%] md:h-[100%]  lg:h-[90%]'>
                               <Swipes2/>
                           </div>
                       </div>
                   </div>
               </motion.section>
           </section>

           {/*  */}

           <section className = 'bg-[#FFFFFF] py-7 my-7'>
               <section className = 'container mx-auto px-4 lg:px-12'>
                   <section className = 'flex flex-col gap-4' >
                       <section className = 'rounded-[14px] px-[24px] py-4 bg-[#E7E7E7] w-[100%] flex flex-col  md:flex-row md:gap-[0px] gap-[20px] items-center justify-between'>
                          <div className = 'w-[100%] md:w-[27%] lg:w-[25%] '>
                             <h1 className = 'lg:w-[100%] md:w-[100%] text-[#C60C30] text-[25px] md:text-[26px] lg:text-[33px] font-bold leading-[37px] md:leading-[40px] lg:leading-[46px]' >ANNUAL REPORT AND ACCOUNTS 2024</h1>
                          </div>
                          <div className = 'w-[100%] md:w-[43%] md:flex justify-center items-center lg:w-[28%]'>
                              <div className = 'flex flex-col gap-4 md:w-[100%] lg:w-[100%]'>
                                 <p className = 'text-[#000000] text-[14px] md:text-[12px] lg:text-[14px] leading-[28px] md:leading-[25px] font-[500]'>Since our founding in 1884, we have been creating product to delight, care for and nourish consumers. we are building on these foundations with our strategy and business transformation, as we look to the future.</p>
                                 <Link to = '#' onClick={(e) => e.preventDefault()} className = 'text-[#C60C30] text-[14px] lg:text-[14px] md:text-[13px] leading-[28px] font-[500] cursor-not-allowed pointer-events-none'>Read our Annual Report and Accounts 2024.</Link>
                              </div>
                          </div>
                          <div className = ' md:flex items-center justify-end w-[100%] md:w-[27%] lg:w-[30%]'>
                              <img src= {annualimg} alt="" className = ' w-[100%] md:w-[100%] lg:w-[82%]'/>
                          </div>
                       </section>

                       {/*  */}

                       <section className = 'rounded-[14px] px-[24px] py-4 md:py-0 md:pr-0 md:ps-[24px] bg-[#E7E7E7] w-[100%] flex flex-col  md:flex-row md:gap-[0px] gap-[20px] items-center justify-between'>
                          <div className = 'w-[100%] md:w-[27%] lg:w-[25%] '>
                             <h1 className = 'lg:w-[60%] md:w-[80%] text-[#C60C30] text-[25px] md:text-[26px] lg:text-[33px] font-bold leading-[27px] md:leading-[30px] lg:leading-[36px]' >Interim Results 2025</h1>
                          </div>
                          <div className = 'w-[100%] md:w-[43%]  md:flex justify-center items-center lg:w-[29%]'>
                              <div className = 'flex flex-col gap-4 md:w-[100%] lg:w-[100%]'>
                                 <p className = 'text-[#000000] text-[14px] md:text-[12px] lg:text-[14px] leading-[28px] md:leading-[25px] font-[500]'>Solid overall trading in UK, Indonesia and ANZ. On track to meet FY25 expectations.</p>
                                 <Link to = '#'  onClick={(e) => e.preventDefault()} className = 'text-[#C60C30] text-[14px] lg:text-[14px] md:text-[13px] leading-[28px] font-[500] cursor-not-allowed pointer-events-none'>Read More.</Link>
                              </div>
                          </div>
                          <div className = ' md:flex items-center justify-center md:justify-end w-[100%] md:w-[27%] lg:w-[30%]'>
                              <img src= {climbimg} alt="" className = ' w-[100%] md:w-[100%] lg:w-[82%]'/>
                          </div>
                       </section>

                       {/*  */}

                       <section className = 'rounded-[14px] px-[24px] py-4 md:py-0 md:pr-0 md:ps-[24px] bg-[#E7E7E7] w-[100%] flex flex-col  md:flex-row md:gap-[0px] gap-[20px] items-center justify-between'>
                          <div className = 'w-[100%] md:w-[27%] lg:w-[25%] '>
                             <h1 className = 'lg:w-[70%] md:w-[90%] text-[#C60C30] text-[25px] md:text-[26px] lg:text-[33px] font-bold leading-[27px] md:leading-[30px] lg:leading-[36px]' >PZ Cussons at a Glance</h1>
                          </div>
                          <div className = 'w-[100%] md:w-[43%]  md:flex justify-center items-center lg:w-[29%]'>
                              <div className = 'flex flex-col gap-4 md:w-[100%] lg:w-[100%]'>
                                 <p className = 'text-[#000000] text-[14px] md:text-[12px] lg:text-[14px] leading-[28px] md:leading-[25px] font-[500]'>Since our founding in 1884, we have been creating product to delight, care for and nourish consumers.</p>
                                 <Link to = '#' onClick={(e) => e.preventDefault()} className = 'text-[#C60C30] text-[14px] lg:text-[14px] md:text-[13px] leading-[28px] font-[500] cursor-not-allowed pointer-events-none'>Read More.</Link>
                              </div>
                          </div>
                          <div className = ' md:flex items-center justify-center md:justify-end w-[100%] md:w-[27%] lg:w-[30%]'>
                              <img src= {calimg} alt="" className = ' w-[100%] md:w-[100%] lg:w-[82%]'/>
                          </div>
                       </section>
                   </section>
               </section>
           </section>

           {/*  */}


           <section  className = 'container mx-auto px-4 lg:px-12' >
               <h1 className ='py-4  text-[#13294B] text-[27px] md:text-[32px] lg:text-[35px] font-bold leading-[34px] text-center '>Discover Our Must win Brands</h1>
               <section  className = 'my-7 ' >
                   <section className = 'md:flex md:flex-wrap justify-between items-center'>
                       {ALL.map((product)=> {
                           const {id, Image, title, use1, use2, use3, use4 } = product
                           return (
                               <div key = {id} className = 'w-[100%] mb-[2.3rem] md:mb-[3rem]  md:w-[46%] lg:w-[28.7%]'
                                 whileHover = {{ y: -15 }}
                                 transition={{ type: "spring", stiffness: 100 , duration: 0.1}}
                               >
                                   <div className = 'flex flex-col gap-2'>
                                       <div className = 'relative group'>
                                         <img src= {Image} alt="" className = 'w-[100%] cursor-pointer'/>
                                         <div className = ''>
                                          <div className = 'bg-[#E9E9E9] rounded-tl-[5px] rounded-tr-[5px] w-[100%] absolute top-0 py-4 ps-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
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

                   <section className = 'my-2'>
                      <div className="flex justify-center  space-x-2">
                          {[...Array(totalPages)].map((_, index) => {
                             const page = index + 1;
                             const isActive = page === currentPage;

                               return (
                                     <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={` md:w-[44px] md:h-[44px] w-[40px] h-[40px] border rounded-[6px] ${
                                          isActive
                                        ? " bg-[#C60C30] text-white text-[16.32px] md:text-[17.32px] font-medium"
                                        : " bg-white text-[16.32px] md:text-[17.32px] font-medium text-[#A3A3A3] border-[#A3A3A3]"
                                       }`}>
                                        {page}
                                    </button>
                                 );
                            })}
                        </div>
                   </section>
               </section>

               {/*  */}

               <section className = 'pb-14 pt-8'>
                   <h1 className = 'pt-2 pb-10  text-[#13294B] text-[27px] md:text-[32px] lg:text-[35px] font-bold leading-[34px] text-center ' >Latest News</h1>
                   <section>
                       <section className = 'md:flex md:flex-wrap justify-between items-cente'>
                           {news.map((report)=> {
                              const {id, IMAGE, news, date} = report
                              return (
                                  <div key = {id} className = 'w-[100%]  mb-[2.3rem] md:mb-[2rem]  md:w-[47%] lg:w-[31%]'>
                                      <div className = 'flex flex-col gap-4'>
                                          <div className = 'w-[100%] overflow-hidden pap'>
                                              <img src= {IMAGE} alt="" className = 'w-[100%] md:h-[300px] object-cover transition-transform duration-300 hover:scale-[1.4] '/>
                                          </div>
                                          <div className = 'flex items-center gap-6'>
                                              <button className = 'bg-[#FCE8EB] text-[13.05px] text-[#E31837] leading-[26.1px] font-medium px-[13.05px] py-[4.66px] rounded-[27.97px]'>corporate</button>
                                              <span className = 'text-[#13294B] text-[11.19px] leading-[26.1px] font-[400px] '>{date}</span>
                                          </div>
                                          <div>
                                              <p className = 'text-[#13294B]  text-[17px] md:text-[18px] leading-[26.1px] font-medium'>{news}</p>
                                          </div>
                                      </div>
                                  </div>
                              )
                           })}
                       </section>
                   </section>
               </section>
               
           </section>
           <Prefooter/>
           <Outlet/>
        </>
    )
}

export default Home
