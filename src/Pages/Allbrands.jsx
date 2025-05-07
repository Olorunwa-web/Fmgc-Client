import React , { useState, useEffect } from 'react';
import { ALLBRANDS } from '../data';
import { NavLink } from 'react-router-dom';
import search from '../assets/iconamoon_search-thin.svg';
import cancel from '../assets/close_32dp_000000_FILL0_wght400_GRAD0_opsz40.svg';
import dot from '../assets/dot-svgrepo-com.svg';





const Allbrands = ({ searchTerm }) => {




    const [currentPage, setCurrentPage] = useState(1);
    // const products = ALLBRANDS();

  
    const filtered = ALLBRANDS.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPages = 12;
  const start = (currentPage - 1) * itemsPerPages;
  const paginated = filtered.slice(start, start + itemsPerPages);
  const totalPages = Math.ceil(filtered.length / itemsPerPages);
   
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  
   
    return (
         <section className = ''>
             {filtered.length ===  0 ? (
                 <p className = 'text-[16px] text-[#000000] py-4'>No results found</p>
             ) : (
                 <>
               <section className = 'md:flex md:flex-wrap justify-between items-center'>
                       {paginated.map((product)=> {
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

                   {/*  */}

                   <section className = 'my-3'>
                      <div className="flex justify-center   space-x-2">
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
                 </>
             )}
          </section>
    )
}

export default Allbrands
