import logo from "../assets/pz 3 1.png";
import image from "../assets/Frame 150.png";
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash, FaFacebook, FaApple } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function SetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (newPassword !== confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      const res = await axios.post(
        `http://localhost:4000/api/auth/reset-password/${token}`,
        {
          newPassword,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Sending password reset request:", { newPassword });
      setMessage(res.data.message);
      setLoading(false);
      setTimeout(() => {
        navigate("/auth/signin");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
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
      } catch (err) {
        console.error("Signup failed", err.response?.data || err.message);
      }
    },
    onError: () => console.log("Google Signup Failed"),
  });

  return (
    <div className="min-h-screen flex lg:flex-row justify-between">
      <div className="w-full px-8 py-2 lg:py-10 lg:px-12 lg:w-xl ">
        <header>
          <Link to="/">
            <img className="h-20 w-21" src={logo} alt="" />
          </Link>
        </header>
        <main className="mx-auto pt-10">
          <h1 className="text-3xl font-bold py-2">Reset Your Password</h1>
          <p className="font-normal pb-6">
            Check your mail for temporary password
          </p>

          <form onSubmit={handleReset}>
            <label
              className="block text-xl font-medium pb-1"
              htmlFor="password"
            >
              Temporary Password
            </label>
            <input
              required
              className={`block w-full bg-gray-200 text-gray-900 px-3 py-2 rounded-lg mb-2 focus:outline-gray-500`}
              // placeholder="✉ Rts5t66@24"
              placeholder="********"
              type="password"
            />

            <label
              className="block text-xl font-medium pb-1"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              className={`block w-full bg-gray-200 text-gray-900 px-3 py-2 rounded-lg mb-2 focus:outline-gray-500`}
              placeholder="*********"
              type="password"
              required
            />

            <label
              className="block text-xl font-medium pb-1"
              htmlFor="password"
            >
              Confirm New Password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`block w-full bg-gray-200 text-gray-900 px-3 py-2 rounded-lg mb-2 focus:outline-gray-500`}
              placeholder="********"
              type="password"
              required
            />
            {error && <p className="text-red-500 mb-3">{error}</p>}
            {message && <p className="text-green-500 mb-3">{message}</p>}
            <button
              type="submit"
              disabled={loading || newPassword !== confirmPassword}
              className={`w-full py-3 text-white text-lg font-medium rounded-md ${
                loading || newPassword !== confirmPassword
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#D41C1C] hover:bg-red-900"
              }`}
            >
              {loading ? "Loading" : "Set Password"}
            </button>
            <button
              disabled={loading}
              className="bg-white hover:bg-red-900 hover:text-white w-full py-3 text-gray-800 text-lg font-medium mt-3 rounded-md "
              type="submit"
            >
              {loading ? "Sending..." : "Resend link to mail"}
            </button>
            <div className="flex justify-evenly items-center mt-8">
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
        </main>
      </div>
      <img className="hidden lg:flex h-screen w-1/2" src={image} alt="" />
    </div>
  );
}
