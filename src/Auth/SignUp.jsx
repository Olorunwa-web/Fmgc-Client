import React, { useState } from "react";
import logo from "../assets/pz 3 1.png";
import image from "../assets/Frame 150.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebook, FaApple } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { fullName, phone, email, password } = formData;

    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!password.trim()) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSubmitError("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/auth/signin");
      } else {
        setSubmitError(data.message || "Signup failed.");
      }
    } catch (err) {
      setSubmitError("Something went wrong. Please try again.", err);
    } finally {
      setLoading(false);
    }
  };

   const googleSignup = useGoogleLogin({
     flow: "implicit",
     onSuccess: async (tokenResponse) => {
       try {
         console.log("Google Token Response:", tokenResponse);

         const res = await axios.post("http://localhost:4000/api/auth/google", {
           token: tokenResponse.access_token,
         });
         console.log("Signup Success", res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
         navigate("/");
       } catch (err) {
         console.error("Signup failed", err.response?.data || err.message);
       }
     },
     onError: () => console.log("Google Signup Failed"),
   });

  return (
    <div className="min-h-screen flex lg:flex-row justify-between">
      <div className="py-1 px-8 w-full lg:w-xl lg:pt-5 lg:px-12">
        <header>
          <Link to="/">
            <img className="h-20 w-21" src={logo} alt="Logo" />
          </Link>
        </header>

        <form className="relative pt-[2%]" onSubmit={handleSubmit}>
          <h1 className="text-3xl py-5 font-bold">Create an account</h1>

          {submitError && (
            <p className="text-red-600 font-semibold mb-3">{submitError}</p>
          )}

          <div>
            <label htmlFor="fullName" className="text-xl font-medium">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              id="fullName"
              className="block w-full bg-gray-200 text-gray-900 px-3 py-2 rounded-lg my-1 focus:outline-gray-500"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 font-semibold text-sm">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="mobileNumber" className="text-xl font-medium">
              Mobile number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full my-1 bg-gray-200 text-gray-950 px-3 py-2 rounded-lg focus:outline-gray-500"
              placeholder="Enter your mobile number"
            />
            {errors.phone && (
              <p className="text-red-500 font-semibold text-sm">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full my-1 bg-gray-200 text-gray-950 px-3 py-2 rounded-lg focus:outline-gray-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 font-semibold text-sm">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-1">
            <label htmlFor="password" className="text-xl font-medium">
              Create password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full my-1 bg-gray-200 text-gray-950 px-3 py-2 rounded-lg focus:outline-gray-500 pr-10"
                placeholder="********"
              />
              <button
                onClick={togglePassword}
                type="button"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-black transition duration-200"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 font-semibold text-sm">
                {errors.password}
              </p>
            )}
          </div>

          <label htmlFor="checkbox" className="block text-md mt-2">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white text-lg font-medium mt-5 rounded-md transition-colors duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#D41C1C] hover:bg-red-900"
            }`}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>

          <p className="text-center font-medium py-2">
            Already have an account?{" "}
            <span className="text-[#D41C1C]">
              <Link to="/auth/signin">Login</Link>
            </span>
          </p>

          <div className="flex justify-evenly items-center mt-3">
            <FacebookLogin
              appId="YOUR_FACEBOOK_APP_ID"
              autoLoad={false}
              callback={async (response) => {
                try {
                  console.log("Facebook Response:", response);

                  const res = await axios.post(
                    "http://localhost:4000/api/auth/facebook",
                    {
                      accessToken: response.accessToken,
                      userID: response.userID,
                    }
                  );

                  console.log("Signup/Login Success", res.data);
                } catch (err) {
                  console.error(
                    "Signup/Login failed",
                    err.response?.data || err.message
                  );
                }
              }}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="border border-gray-400 rounded-sm w-[70px] md:w-[100px] flex items-center justify-center py-1"
                >
                  <span className="text-blue-600">
                    <FaFacebook size={20} />
                  </span>
                </button>
              )}
            />

            <button
              onClick={() => googleSignup()}
              className="border border-gray-400 rounded-sm w-[70px] md:w-[100px] flex items-center justify-center py-1"
              title="Sign up with Google"
            >
              <FcGoogle size={20} />
            </button>

            <button className="border border-gray-400 rounded-sm w-[70px] md:w-[100px] flex items-center justify-center py-1">
              <FaApple size={20} />
            </button>
          </div>
        </form>
      </div>
      <img
        className="hidden lg:flex w-1/2 h-screen"
        src={image}
        alt="Visual"
      />
    </div>
  );
};

export default SignUp;
