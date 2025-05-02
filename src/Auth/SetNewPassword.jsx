import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/pz 3 1.png";
import image from "../assets/Frame 150.png"

const SetNewPassword = () => {
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
        `https://it-project-server.onrender.com/api/auth/reset-password/${token}`,
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

  return (
    <div className="min-h-screen flex lg:flex-row justify-between">
      <div className="w-full lg:w-xl px-8 py-2 lg:py-10 lg:px-12">
        <header>
          <Link to="/">
            <img className="h-20 w-21" src={logo} alt="" />
          </Link>
        </header>
        <main className="w-full pt-10">
          <h2 className="text-2xl font-bold py-2">Set Your New Password</h2>
          <p className="text-md text-gray-600 pb-6">
            Please enter your new password below.
          </p>

          <form onSubmit={handleReset}>
            <label className="block text-xl font-medium pb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter your new Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className={`block w-full bg-gray-200 text-gray-900 px-3 py-2 rounded-lg mb-4 focus:outline-gray-500`}
            />

            <label className="block text-xl font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={`block w-full bg-gray-200 text-gray-900 px-3 py-2 rounded-lg mb-4 focus:outline-gray-500`}
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
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </main>
      </div>
      <img className="hidden lg:flex h-[100vh] w-1/2" src={image} alt="" />
    </div>
  );
};

export default SetNewPassword;
