import React from 'react'
import Prefooter from '../Components/Prefooter';
import pz from '../assets/pz 3 1 (2).svg';
import facebook from '../assets/hugeicons_facebook-01.svg';
import twitter from '../assets/hugeicons_new-twitter-rectangle.svg';
import thread from '../assets/mingcute_threads-line.svg';
import instagram from '../assets/ri_instagram-fill.svg';
import linkdeln from '../assets/basil_linkedin-solid.svg';
import arrowup from '../assets/arrow-up.svg';
import group from '../assets/Group.svg';
import { useState } from "react";
import axios from "axios";

const Footer = () => {
    const [email, setEmail] = useState("");
     const [error, setError] = useState("");
     const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);
      try {
        const res = await axios.post(
          "https://it-project-server.onrender.com/api/subscribe",
          { email }
        );

        if (res.status === 200) {
          // alert("Subscribed successfully!");
          setEmail("");
        } else {
          throw new Error("Unexpected response status");
        }
      } catch (err) {
        console.error("Subscription error:", err);
        setError("Subscription failed. Please try again.");
        alert("Subscription failed.");
      } finally {
        setLoading(false);
      }
    };
    return (

      <>
        <section>
          <section className="bg-[#BA0F22]">
            <section className="container mx-auto px-4 lg:px-12 md:py-10 ">
              <section className="flex flex-col md:flex-row md:justify-between justify-cneter  gap-6 py-7">
                <div className="lg:w-[43%] md:w-[60%] w-[100%]">
                  <h1 className="md:w-[90%] lg:w-[100%] text-[#FFFFFF] text-[30px] md:text-[33px] lg:text-[47px] font-medium ">
                    Stay in the know with PZ Cussons. Subscribe today!
                  </h1>
                </div>
                <div className="">
                  <form className="relative" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white w-[98%] h-[60px] lg:h-[67px] md:h-[65px] md:w-[100%] rounded-[6px] ps-4 outline-none text-[16px] text-[#969696] font-normal leading-[28px]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="absolute top-[11px] right-[4%] lg:top-[15px] md:right-[4%] lg:right-[3%]">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`bg-[#D41C1C] w-[110px] rounded-[6px] text-[15px] text-white font-medium leading-[28px] h-[40px] ${
                          loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                  </form>
                  <p className="pt-3 text-[16px] text-white font-normal leading-[28px]">
                    We treat your info responsibly unsubscribe anytime.
                  </p>
                </div>
              </section>
              <section className="flex flex-col md:flex-row justify-between  gap-6 py-7">
                <div className="md:w-[24%] ">
                  <div className="bg-[#FFFFFF] flex items-center justify-center    w-[90px] md:w-[93px]">
                    <img src={pz} alt="" className="w-[90%]" />
                  </div>
                  <div className="py-1">
                    <span className="text-[#FFFFFF] text-[14px] font-medium leading-[28px]">
                      Connect with us
                    </span>
                  </div>
                  <div className="flex   gap-2">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={thread} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkdeln} alt="" />
                  </div>
                </div>
                <div className="md:w-[24%]">
                  <div className="border-[#FFFFFF] border-b-[1.4px] mb-4 w-[169px]">
                    <h4 className="text-[#FFFFFF] text-[16px] font-medium leading-[28px]">
                      EXPLORE PZ CUSSONS
                    </h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      About Us
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Sustainability
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Careers
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Investor
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      News & Media{" "}
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Modern Slavery
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Tax Strategy
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Whistleblowing
                    </p>
                  </div>
                </div>
                <div className="md:w-[24%]">
                  <div className="border-[#FFFFFF] border-b-[1.4px] mb-4 w-[63px] ">
                    <h4 className="text-[#FFFFFF] text-[16px] font-medium leading-[28px]">
                      BRANDS
                    </h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Hygiene brands
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Baby brands
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Beauty brands
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      All brands
                    </p>
                  </div>
                </div>
                <div className="md:w-[24%]">
                  <div className="border-[#FFFFFF] border-b-[1.4px] mb-4 w-[87px] ">
                    <h4 className="text-[#FFFFFF] text-[16px] font-medium leading-[28px]">
                      SITE TOOLS
                    </h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Accessibility
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Sitemap
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Privacy & Cookies
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Terms and Conditions
                    </p>
                    <p className="text-[#FFFFFF] text-[14px] font-normal leading-[28px]">
                      Employee & Recruitment Privacy Notice
                    </p>
                  </div>
                </div>
              </section>
            </section>
            {/*  */}
            <hr className="border-[#FFFFFF] " />
            <section className="container mx-auto px-4 lg:px-12">
              <div className="flex flex-col md:flex-row justify-between  py-10">
                <div className="flex items-center gap-1">
                  <span className="text-[#FFFFFF] text-[20px] font-normal ">
                    &copy;
                  </span>
                  <span className="text-[#FFFFFF] text-[14px] font-normal ">
                    PZ Cussons 2025. All right reserved.
                  </span>
                </div>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <span className="text-[#FFFFFF] text-[15px] font-medium leading-[28px]">
                    Back to top
                  </span>
                  <img src={arrowup} alt="Back to top" />
                </button>
              </div>
            </section>
          </section>
        </section>
      </>
    );
}

export default Footer
