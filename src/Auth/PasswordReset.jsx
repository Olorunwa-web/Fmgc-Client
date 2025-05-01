import React, { useState } from "react";
import logo from "../assets/pz 3 1.png";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/Frame 150.png";

const PasswordReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://it-project-server.onrender.com/api/auth/forgot-password",
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

  return (
    <div className="min-h-screen flex justify-between flex-col lg:flex-row">
      <div className="py-2 px-8 w-full lg:w-xl lg:py-10 lg:px-12">
        <header className="w-full">
          <Link to="/">
            <img className="h-20 w-21" src={logo} alt="logo" />
          </Link>
        </header>
        <main>
          <h1 className="text-3xl font-medium pt-10">Reset Password</h1>
          <p className="py-5 font-normal">
            Enter the email associated with your account and we will send an
            email with instructions on how to reset your password
          </p>
          <form onSubmit={handlePasswordReset}>
            <label
              htmlFor="email"
              className="tracking-[0.5px] text-xl font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full bg-gray-200 text-gray-900 px-3 py-2 rounded-lg my-2 focus:outline-gray-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#D41C1C] hover:bg-red-900 w-full py-3 text-white text-lg font-medium mt-5 rounded-md "
            >
              {loading ? "Sending..." : "Send Instruction"}
            </button>
          </form>
        </main>
      </div>
      <img
        className="hidden lg:flex w-1/2 h-[100vh]"
        src={image}
        alt="visual"
      />
    </div>
  );
};

export default PasswordReset;
