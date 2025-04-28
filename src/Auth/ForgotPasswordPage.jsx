import logo from "../assets/pz 3 1.png";
import image from "../assets/Frame 150.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaApple } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:4000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }
      navigate("/auth/reset-password/confirmed");
    } catch (err) {
      setError("An error occurred. Please try again.", err);
    } finally {
      setLoading(false);
    }
  };
  const handleResendLink = async () => {
    setIsResending(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:4000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
      } else {
        alert("Reset link resent!");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while resending.");
    } finally {
      setIsResending(false);
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
    <div className="min-h-screen flex justify-between lg:flex-row">
      <div className="py-2 px-8 w-full lg:w-xl lg:py-10 lg:px-12">
        <header>
          <Link to="/">
            <img className="h-20 w-21" src={logo} alt="Logo" />
          </Link>
        </header>
        <main className="mx-auto w-full pt-[13%]">
          <h1 className="text-3xl font-bold">Reset Your Password</h1>
          <p className="py-2 font-normal">
            We'll send you a reset link to your email
          </p>

          <form onSubmit={handlePasswordReset} className="pt-10">
            <label
              htmlFor="email"
              className="tracking-[0.5px] text-xl font-medium pt-10"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full bg-gray-200 text-gray-900 px-3 py-2 rounded-lg my-2 focus:outline-gray-500"
              placeholder="✉ name@gmail.com"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#D41C1C] hover:bg-red-900 w-full py-3 text-white text-lg font-medium mt-5 rounded-md "
            >
              {loading ? "Loading..." : "Continue"}
            </button>
            <button
              disabled={isResending}
              className="bg-white hover:bg-red-900 hover:text-white w-full py-3 text-gray-800 text-lg font-medium mt-3 rounded-md "
              type="button"
              onClick={handleResendLink}
            >
              {isResending ? "Resending..." : "Resend link to mail"}
            </button>
            <div className="flex justify-evenly items-center mt-8">
              {/* <FacebookLogin
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
              /> */}
               <button className="border border-gray-400 w-[70px] md:w-[100px] flex items-center justify-center py-1 rounded-sm">
                            <FaFacebook size={20} className="text-blue-700" />
                          </button>

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
      <img className="hidden lg:flex w-1/2 h-[100vh] rounded-bl-3xl rounded-tl-3xl" src={image} alt="" />
    </div>
  );
}
