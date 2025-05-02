import React, {useState} from 'react';
import pz from '../assets/pz 3 1.svg';
import { Link, Outlet, NavLink } from 'react-router-dom';
import harmburg from '../assets/menu_34dp_000000_FILL0_wght400_GRAD0_opsz40.svg';
import harmburgclose from '../assets/close_32dp_000000_FILL0_wght400_GRAD0_opsz40.svg';
import { AuthContext } from "../Auth/context/AuthContext";
import { useContext } from 'react';
import Footer from '../Components/Footer';
import { navs } from '../data'


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>


        <section className="sticky top-0 left-0 w-[100%] bg-[#FFFFFF] z-999">
          <main className="container mx-auto px-4 py-3 lg:px-12">
            <section className="flex justify-between items-center">
              <div className="w-[64px] md:w-[73px] lg:w-[73px]">
                <img src={pz} alt="" className="w-[100%]" />
              </div>
              <div className=" hidden md:flex gap-6">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2 pb-1"
                      : " font-medium text-[16px] text-[#B3B3B3] leading-[28px] "
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2 pb-1"
                      : " font-medium text-[16px] text-[#B3B3B3] leading-[28px]"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/ourbrand"
                  className={({ isActive }) =>
                    isActive
                      ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2 pb-1"
                      : " font-medium text-[16px] text-[#B3B3B3] leading-[28px]"
                  }
                >
                  Our Brands
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2 pb-1"
                      : " font-medium text-[16px] text-[#B3B3B3] leading-[28px]"
                  }
                >
                  Contact Us
                </NavLink>
              </div>
              <div className=" hidden md:flex gap-3">
                {user ? (
                  <div className="flex gap-3">
                    <img
                      className="w-10 h-10 rounded-full border-red-900"
                      src={user?.image || "/Ellipse 8.png"}
                      alt=""
                    />
                    <button
                      onClick={logout}
                      className=" font-medium text-[15px] leading-[28px] text-[#D41C1C] border-1 border-solid rounded-[6px] px-[14px] py-[9px]  border-[#D41C1C] hover:bg-[#D41C1C]  hover:text-[#FFFFFF]"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <>
                    <NavLink to="/auth/signin">
                      <button className=" font-medium text-[15px] leading-[28px] text-[#D41C1C] border-1 border-solid rounded-[6px] px-[14px] py-[9px]  border-[#D41C1C] hover:bg-[#D41C1C] hover:text-[#FFFFFF]">
                        Log in
                      </button>
                    </NavLink>

                    <NavLink to="/auth/signup">
                      <button className=" font-medium text-[15px] leading-[28px] text-[#D41C1C] border-1 border-solid rounded-[6px] px-[14px] py-[9px]  border-[#D41C1C] hover:bg-[#D41C1C]  hover:text-[#FFFFFF]">
                        Sign up
                      </button>
                    </NavLink>
                  </>
                )}
              </div>
              <div className="md:hidden flex">
                <div onClick={() => setIsOpen(true)}>
                  <img src={harmburg} alt="" className="w-[32px]" />
                </div>
                <div
                  className={`fixed top-0 right-0 h-full w-[70%] bg-white z-50 transform transition-transform duration-200
                        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                  <div className="">
                    <div className="px-3 py-5 flex flex-col justify-between h-[80vh]">
                      <div
                        className="flex justify-end items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <img src={harmburgclose} alt="" className="w-[30px]" />
                      </div>
                      <div className="flex flex-col gap-5 ps-2">
                        {navs.map((bar)=>{
                          const {id, head, path} = bar
                          return (
                            <NavLink
                               to= {path}
                               key = {id}
                               end
                               className={({ isActive }) =>
                               `font-medium text-[16px] text-[#B3B3B3] leading-[28px] mx-auto ${isActive
                                 ? " font-medium text-[16px] text-[#E31B37] leading-[28px] border-b-2 w-[120px] text-center "
                                 : " font-medium text-[16px] text-[#B3B3B3] leading-[28px]  "
                               }`}
                             >
                               <span>{head}</span>
                            </NavLink>
                          )
                        })}
                      </div>
                      <div className=" ps-4 flex flex-col gap-2 ">
                        {user ? (
                          <div className="">
                            <img
                              className="w-10 h-10 rounded-full border-red-900"
                              src={user?.image || "/Ellipse 8.png"}
                              alt=""
                            />
                            <button
                              onClick={logout}
                              className=" font-medium text-[15px] leading-[28px] text-[#D41C1C] border-1 border-solid rounded-[6px] px-[14px] py-[9px]  border-[#D41C1C] hover:bg-[#D41C1C]  hover:text-[#FFFFFF] mt-1"
                            >
                              Log out
                            </button>
                          </div>
                        ) : (
                          <>
                            <button className=" font-medium text-[15px] leading-[28px] text-[#D41C1C] border-1 border-solid rounded-[6px] px-[14px] py-[9px] w-[100%]  border-[#D41C1C] hover:bg-[#D41C1C] hover:text-[#FFFFFF]">
                              Log In
                            </button>
                            <button className=" font-medium text-[15px] leading-[28px] text-[#D41C1C] border-1 border-solid rounded-[6px] px-[14px] py-[9px] w-[100%] border-[#D41C1C] hover:bg-[#D41C1C]  hover:text-[#FFFFFF]">
                              Sign up
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </section>
        <Outlet />
        <Footer />
      </>
    );

}

export default Navbar
