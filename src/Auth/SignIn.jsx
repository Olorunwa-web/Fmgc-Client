import React, { useState,useContext } from "react";
import logo from "../assets/pz 3 1.png";
import image from "../assets/Frame 150.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFacebook, FaApple } from "react-icons/fa6";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { PiBackspaceFill } from "react-icons/pi";
import { AuthContext } from "./context/AuthContext";


const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await login(form.email, form.password); // Use AuthContext login
      navigate("/"); // Navigate on success
    } catch (err) {
      setError(err.message); // Display error
    } finally {
      setLoading(false);
    }
  };
  

   const googleSignin = useGoogleLogin({
     flow: "implicit",
     onSuccess: async (tokenResponse) => {
       try {
         console.log("Google Token Response:", tokenResponse);

         const res = await axios.post(
           "https://it-project-server.onrender.com/api/auth/google",
           {
             token: tokenResponse.access_token,
           }
         );

         console.log("SignIn Success", res.data);
         localStorage.setItem("token", res.data.token);
         localStorage.setItem("user", JSON.stringify(res.data.user));
         navigate("/"); 
       } catch (err) {
         console.error("SignIn failed", err.response?.data || err.message);
       }
     },
     onError: () => console.log("Google SignIn Failed"),
   });


  return (
    <div className="min-h-screen flex justify-between lg:flex-row">
      <div className="py-2 px-8 w-full lg:w-xl lg:py-10 lg:px-12">
        <header className="flex justify-between">
          <Link to="/">
            <img className="h-20 w-21" src={logo} alt="Logo" />
          </Link>
          
            <button
              onClick={() => navigate(-1)}
              className="flex items-center mt-2 pr-1 lg:hidden"
            >
              <PiBackspaceFill className="text-black-700" size={35} />
              {/* <p className="text-lg text-red-600">Back</p> */}
            </button>
          
        </header>

        <form onSubmit={handleSubmit} className="relative pt-[4%]">
          <h1 className="text-4xl pt-8 font-semibold">Welcome Back</h1>
          <p className="font-normal pt-1 pb-8 tracking-[0.5px]">
            Login to access your PZ Cussins
          </p>

          <label htmlFor="email" className="text-xl font-medium">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`block w-full bg-gray-200 text-gray-900 px-3 py-2 rounded-lg my-2 focus:outline-gray-500`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="text-red-600 text-sm -mt-1 mb-2">{errors.email}</p>
          )}

          <label htmlFor="password" className="text-xl font-medium">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`block w-full bg-gray-200 text-gray-950 px-3 py-2 rounded-lg my-2 pr-10 focus:outline-gray-500`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-[50%] transform -translate-y-1/2 text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm -mt-1 mb-2">{errors.password}</p>
          )}

          {error && <p className="text-red-600 text-sm mt-2 mb-4">{error}</p>}

          <div className="flex items-center justify-between text-sm mb-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/auth/forgotpassword" className="text-[#D41C1C]">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#D41C1C] hover:bg-red-900 w-full py-3 text-white text-lg font-medium mt-3 rounded-md ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center font-medium py-3">
            Don’t have an account?{" "}
            <Link className="text-[#D41C1C]" to="/auth/signup">
              Sign up
            </Link>
          </p>

          <div className="flex justify-evenly items-center mt-6 gap-2">
            <button className="border border-gray-400 w-[70px] md:w-[100px] flex items-center justify-center py-2 rounded-sm">
              <FaFacebook size={20} className="text-blue-700" />
            </button>
            <button
              onClick={() => googleSignin()}
              className="border border-gray-400 rounded-sm w-[70px] md:w-[100px] flex items-center justify-center py-2"
              title="Sign in with Google"
            >
              <FcGoogle size={20} />
            </button>
            <button className="border border-gray-400 w-[70px] md:w-[100px] flex items-center justify-center py-2 rounded-sm ">
              <FaApple size={20} />
            </button>
          </div>
        </form>
      </div>

      <img className="hidden lg:flex w-1/2 h-screen" src={image} alt="" />
    </div>
  );
};

export default SignIn;
