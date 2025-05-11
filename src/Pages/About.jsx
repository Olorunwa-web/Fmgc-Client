import React from "react";
import { useState } from "react";
import handImage from "../assets/image 42.png";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import image3 from "../assets/n.png";
import image4 from "../assets/o.png";
import image2 from "../assets/m.png";
import image1 from "../assets/meet and greet.png";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";
import { FaThreads } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import Prefooter from '../Components/Prefooter';
import image5 from "../assets/p.png";
import image6 from "../assets/q.png";
import image7 from "../assets/r.png";



 const leaders = [
   {
     id: 1,
     image: image1,
     name: "David Tyler",
     position: "Chairman",
   },
   {
     id: 2,
     image: image2,
     name: "Jonathan Myers",
     position: "Chief Executive officer",
   },
   {
     id: 3,
     image: image3,
     name: "Sarah Pollard",
     position: "Chief Financial Officer",
   },
   {
     id: 4,
     image: image4,
     name: "Vivek Ahuja",
     position: "Senior independent Director",
   },
   {
     id: 5,
     image: image5,
     name: "Kristy Bashforth",
     position: "Non-Executive Director",
   },
   {
     id: 6,
     image: image6,
     name: "Jitesh Sodha",
     position: "Non-Executive Director",
   },
   {
     id: 7,
     image: image7,
     name: "Valeria Juarez",
     position: "Non-Executive Director",
   },
 ];

const About = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const leadersPerPage = 4;
    const desiredPages = 2;

    const totalLeadersNeeded = leadersPerPage * desiredPages;
    const repeatTimes = Math.ceil(totalLeadersNeeded / leaders.length);

    const displayedLeaders = Array(repeatTimes)
      .fill(leaders)
      .flat()
      .slice(0, totalLeadersNeeded);

    const totalPages = Math.ceil(displayedLeaders.length / leadersPerPage);

    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handlePrev = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

 
  return (
    <>
      
    <div className="text-center max-w-full">
      <section className="bg-[#B50606] py-[10%] px-10 text-white lg:py-[5%]">
        <h1 className="block lg:hidden text-5xl lg:text-7xl pb-10 font-bold">
          About <br /> PZ Cussons
        </h1>
        <h1 className="hidden lg:block text-center text-5xl lg:text-7xl pb-10 font-bold">
          About PZ Cussions
        </h1>
        <p className="text-md lg:text-2xl lg:w-[800px] mx-auto">
          We are PZ Cussons, an international consumer goods business that
          champions the wellbeing of people, families and communities
          everywhere!
        </p>
      </section>
      <section className="px-5 lg:px-0 flex-row lg:flex mx-auto py-[5%] items-center bg-white lg:pr-15 max-w-7xl">
        <div className=" lg:flex lg:w-1/2  justify-center ">
          <img className="mx-auto" src={handImage} alt="" />
        </div>
        <div className="pt-10 lg:pt-0 lg:w-1/2">
          <h1 className="text-5xl text-center font-bold">Our Story</h1>
          <p className="py-5">
            Founded in Sierra Leone in 1884 on family values, the company aims
            for positive community impact and high ethical standards,
            encapsulated in "For everyone, for life, for good." Headquartered in
            Manchester, UK, its multi-local operations span Europe, North
            America, Asia-Pacific, and Africa, with key markets in the UK,
            Nigeria, Indonesia, and Australia. Employing over 2,500 people, the
            business builds brands like Carex and Imperial Leather, focusing on
            delighting, caring for, and nourishing consumers through innovation
            and responsible practices.{" "}
          </p>
          <p>
            With leading brands in Hygiene, Baby, and Beauty, supported by
            portfolio brands, the company strives to meet diverse consumer needs
            globally. Their "Building Brands For Life" strategy emphasizes
            serving more consumers better, now and in the future. Sustainability
            is central, driving continuous improvement in environmental and
            ethical standards across their global operations.
          </p>
        </div>
      </section>
      <section className="py-[10%] lg:py-[5%] px-5 container mx-auto">
        <h1 className="text-5xl font-bold py-5">PZ GROWTH</h1>
        <p className="lg:px-30">
          Adopting the PZ Cussons Growth Wheel enables us to build brands in a
          systematic and repeatable way. By ensuring our brands are delivering
          against each of these four focus areas, we will achieve growth in
          household penetration, or trial rate, which will drive increased
          market share and, ultimately, profitable revenue growth.
        </p>
        <div className="text-white pt-5 lg:block">
          <div className="flex-row md:flex md:mx-auto lg:flex justify-center w-full">
            <div className="bg-[#4191AD] w-full lg:w-md h-80 flex flex-col justify-center items-center px-5 brightness-120 opacity-60 shadow-md">
              <h1 className="text-3xl font-bold py-2">Shoppability</h1>
              <p>
                Brilliant execution in all <br /> retail channels
              </p>
            </div>
            <div className="bg-[#7F9E3D]  h-80  w-full lg:w-md flex flex-col justify-center items-center px-5 brightness-120 opacity-60 shadow-md">
              <h1 className="text-3xl font-bold py-2">Consumability</h1>
              <p>
                Develop products <br /> consumers want and <br /> desire
              </p>
            </div>
          </div>
          <div className="flex-row md:flex md:mx-auto lg:flex justify-center w-full">
            <div className="bg-[#E8873C] h-80 w-full lg:w-md flex flex-col justify-center items-center px-5 brightness-120 opacity-60 shadow-md">
              <h1 className="text-3xl font-bold py-2">Attractiveness</h1>
              <p>
                Deliver value for us, our <br /> consumers and our <br /> retail
                partner
              </p>
            </div>
            <div className="bg-[#7D4896] h-80  w-full lg:w-md flex flex-col justify-center items-center px-5 brightness-120 opacity-60 shadow-md">
              <h1 className="text-3xl font-bold py-2">Memorability</h1>
              <p>
                Build distinctive brands <br /> and strengthen <br /> consumer
                awareness
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[5%] px-5 text-center bg-[#f7f7f7]">
        <h1 className="text-5xl font-bold mb-3">Meet Our Leaders</h1>
        <p className="text-gray-500 mb-10 max-w-3xl mx-auto">
          These are the dedicated individuals steering our vision and driving
          our success. Their expertise and passion shape our journey and
          commitment to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {displayedLeaders
            .slice(
              (currentPage - 1) * leadersPerPage,
              currentPage * leadersPerPage
            )
            .map((leader) => (
              <div>

                <div
                  key={leader.id}
                  className="hidden lg:flex group relative rounded-lg overflow-hidden shadow-md bg-white opacity-0 animate-fadeIn"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-[458px] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-200 opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center p-4 text-dark">
                    <h2 className="text-3xl font-bold">{leader.name}</h2>
                    <p className="py-3 text-lg">{leader.position}</p>

                    <div className="flex gap-3">
                      <span className="border-1 flex items-center rounded-md px-0.5">
                        <RiFacebookLine size={18} />
                      </span>

                      <span className="border-1 flex items-center rounded-md px-0.5">
                        <RiTwitterXLine size={15} />
                      </span>

                      <span>
                        <FaThreads size={25} />
                      </span>

                      <span className="text-black-900">
                        <RiInstagramFill size={25} />
                      </span>

                      <span>
                        <FaLinkedinIn size={25} />
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  key={leader.id}
                  className="flex lg:hidden relative rounded-lg overflow shadow-md bg-white opacity-0 animate-fadeIn"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-[458px] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-100 opacity-80 transition-all duration-500 flex flex-col items-center justify-center p-4 text-dark">
                    <h2 className="text-3xl font-bold">{leader.name}</h2>
                    <p className="py-3 text-lg">{leader.position}</p>

                    <div className="flex gap-3">
                      <span className="border-1 flex items-center rounded-md px-0.5">
                        <RiFacebookLine size={18} />
                      </span>

                      <span className="border-1 flex items-center rounded-md px-0.5">
                        <RiTwitterXLine size={15} />
                      </span>

                      <span>
                        <FaThreads size={25} />
                      </span>

                      <span className="text-black-900">
                        <RiInstagramFill size={25} />
                      </span>

                      <span>
                        <FaLinkedinIn size={25} />
                      </span>
                    </div>
                  </div>
                </div>



              </div>
            ))}
        </div>

        <div className="flex justify-center items-center gap-5 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? "text-gray-400"
                : "text-black-900 hover:text-[#800404]"
            }`}
          >
            <IoIosArrowDropleft size={50} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? "text-gray-400"
                : "text-black-900 hover:text-[#800404]"
            }`}
          >
            <IoIosArrowDropright size={50} />
          </button>
        </div>
      </section>
    </div>
      <Prefooter />
    </>
  );
};
export default About;
