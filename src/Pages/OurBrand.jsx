import React , { useState } from 'react'
import Prefooter from '../Components/Prefooter';
import { ourbrand } from '../data';
import { NavLink, Outlet, useLocation, useMatch } from 'react-router-dom'
import Allbrands from '../Pages/Allbrands';
import search from '../assets/iconamoon_search-thin.svg';
import cancel from '../assets/close_32dp_000000_FILL0_wght400_GRAD0_opsz40.svg';





const OurBrand = () => {

   const Match  = useMatch("/ourbrand/allbrands")


   const [query, setQuery] = useState('');

   const handleClear = () => {
     setQuery('');
   };



    return (
        <section>
            <section className = 'bg-[#B50606]  py-[10%] lg:py-[5%]'>
                <section className = 'container mx-auto px-4 lg:px-12'>
                    <section className = 'text-center '>
                        <h1 className = ' pb-4 text-white md:text-[57px] text-[40px]  font-semibold'>Our Brand</h1>
                        <p className = ' mx-auto text-white text-[17px] w-[80%] font-medium lg:w-[45%]'>Our portfolio includes some of the world's most beloved and trusted brands, making a meaningful impact on lives across the USA, Europe, Africa, and the Asia-region.</p>
                    </section>
                </section>
            </section>
            {/*  */}
            <section className = 'container mx-auto px-4 lg:px-12'>
                <section className = 'flex justify-between items-center'>
                  
                  <section className = 'overflow-x-scroll md:overflow-hidden flex gap-6 md:py-10 py-9 md:w-[100%] w-[48%] '>
                    {ourbrand.map((outbrand)=>{
                        const {id, head, path } = outbrand
                        return (
                            <div className = 'shrink-0'>
                                <NavLink
                               to= {path}
                               key = {id}
                               end
                               className={({ isActive: active }) =>
                               (active
                                 ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2 pb-2 w-[100%] "
                                 : " font-medium text-[16px] text-[#B3B3B3] leading-[28px]  "
                               )}
                             >
                               {head}
                            </NavLink>
                            </div>
                        )
                    })}
                   </section>
                  <section  className = 'w-[48%] relative flex justify-end'>
                     <input type="text" name="" id="" value={query} onChange={(e) => setQuery(e.target.value)} placeholder = 'Search' className = 'w-[100%] lg:w-[250px] border-[0.5px] outline-none border-[#808080] font-poppins text-[16px] text-[#808080] lg:ps-4 ps-3 leading-[28px] rounded-[10px] h-[47px] lg:pr-10 pr-8'/>
                      {query === '' && (
                         <img src= {search} alt="" className = 'absolute top-3 right-2'/>
                      )}

                      {query !== '' && (
                          <img src= {cancel} alt="" onClick = {handleClear} className = 'absolute top-3 right-2  w-6'/>
                      )}

                  </section>
                </section>
                {Match ? (
                    <section>
                        <Allbrands/>
                    </section>
                  ) : (
                 <Outlet/>
                )}

            </section>
            <Prefooter/>
        </section>
    )
}

export default OurBrand
