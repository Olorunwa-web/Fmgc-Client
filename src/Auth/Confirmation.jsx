import React from "react";
import logo from "../assets/pz 3 1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "../assets/Frame 150.png"
import { PiBackspaceFill } from "react-icons/pi";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen flex lg:flex-row justify-between">
      <div className="py-2 px-8 w-full lg:w-xl lg:py-10 lg:px-12">
        <header className="flex justify-between">
          <Link to="/">
            <img className="h-20 w-21" src={logo} alt="" />
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center mt-2 pr-1 lg:hidden"
          >
            <PiBackspaceFill className="text-black-700" size={35} />
            {/* <p className="text-lg text-red-600">Back</p> */}
          </button>
        </header>
        <form className="mx-auto">
          <h1 className="font-semibold text-3xl py-5">Check your mail</h1>
          <p className="">
            We have sent a password recover instructions to your email.
          </p>
          <button
            type="button"
            onClick={() => {
              window.location.href = "mailto:";
            }}
            className="bg-[#D41C1C] hover:bg-red-900 w-full py-3 text-white text-lg font-medium mt-5 rounded-md "
          >
            Open email app
          </button>
          <button
            onClick={handleSkip}
            className="bg-white hover:bg-red-900 w-full py-3 hover:text-white text-lg font-medium mt-5 rounded-md "
          >
            Skip, i'll confirm later
          </button>
          <p className="text-center mt-[15%]">
            Did not receive an email? Check your spam folder or{" "}
            <span className="text-[#D41C1C]">
              <Link to="/auth/reset-password">try another email address</Link>
            </span>{" "}
          </p>
        </form>
      </div>
      <img className="hidden lg:flex h-[100vh] w-1/2" src={image} alt="" />
    </div>
  );
};

export default Confirmation;
