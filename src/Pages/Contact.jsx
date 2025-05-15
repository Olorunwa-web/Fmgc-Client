import React from "react";
// import image from "../assets/image 43.png";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setLoading(true); // Start loading

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.location ||
      !formData.message
    ) {
      setLoading(false);
      setError("Please fill in all the fields.");
      // alert("Please fill in all the fields.");
      return;
    }

    try {
      const res = await axios.post(
        "https://it-project-server.onrender.com/api/contact",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert(res.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      const errorMsg = err.response?.data?.error || "Something went wrong!";
      setError(errorMsg);
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };


  const locationCard = [
    {
      id: 1,
      locationTag: "UK HD",
      address:
        "PZ Cussons Manchester Business park 3500 Aviator Way Manchester M1234",
    },
    {
      id: 2,
      locationTag: "Nigeria",
      address:
        "45/47 Town Planning Way Illupeju Industrial Estate  Ikeja Lagos Nigeria",
    },
    {
      id: 3,
      locationTag: "Easter Africa",
      address:
        "PZ Cussons East Africa Ltd. Bada Dogo Road  P.O Box Area Nairobi Kenya",
    },
    {
      id: 4,
      locationTag: "West Africa",
      address:
        "Plot 27/3-27/7 Sanyo Road Toma Heavy Industrial Area P.O Box 628, Tema, Ghana",
    },
    {
      id: 5,
      locationTag: "Australia",
      address:
        "PZ Cussons Manchester Business park 3500 Aviator Way Manchester M1234",
    },
    {
      id: 6,
      locationTag: "Indonesia",
      address:
        "45/47 Town Planning Way Illupeju Industrial Estate  Ikeja Lagos Nigeria",
    },
    {
      id: 7,
      locationTag: "Singapore",
      address:
        "Plot 27/3-27/7 Sanyo Road Toma Heavy Industrial Area P.O Box 628, Tema, Ghana",
    },
  ];

  return (
    <div>
      <section className="bg-[#B50606] text-white py-[10%] px-6 relative lg:py-[5%]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row lg:mt-0 items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl">PZ will like to connect with you</p>
          </div>
          {/* <div className="mt-8 lg:-mt-15 lg:ml-10">
            <img
              src={image}
              alt="Contact Icons"
              className="w-[250px] sm:w-[300px] lg:w-[350px] mx-auto lg:mx-0"
            />
          </div> */}
        </div>
      </section>

      <section className="bg-[#E9E9E9] py-17 px-6 text-center">
        <form className="max-w-4xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <h1 className="text-3xl text-left font-semibold mb-8">
            Send us a Message
          </h1>
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              className="flex-1 py-4 px-4 border-2 border-gray-500 rounded-md"
              type="text"
              placeholder="First Name"
            />
            <input
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              className="flex-1 py-4 px-4 border-2 border-gray-500 rounded-md"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="flex-1 py-4 px-4 border-2 border-gray-500 rounded-md"
              type="email"
              placeholder="Your Email"
            />
            <input
              name="location"
              onChange={handleChange}
              value={formData.location}
              className="flex-1 py-4 px-4 border-2 border-gray-500 rounded-md"
              type="text"
              placeholder="Location"
            />
          </div>
          <textarea
            name="message"
            onChange={handleChange}
            value={formData.message}
            className="w-full py-4 px-4 border-2 border-gray-500 rounded-md h-40"
            placeholder="Message"
          ></textarea>
          {loading && <p className="text-blue-600 font-semibold">Sending...</p>}
          {error && <p className="text-red-600 font-semibold">{error}</p>}
          <button className="bg-red-800 hover:bg-red-400 transition py-5 w-full text-white rounded-md">
            Contact Us
          </button>
        </form>
      </section>
      <section className="py-[3%] container mx-auto">
        <div className="flex flex-wrap mx-auto text-center lg:px-20">
          {locationCard.map((card) => (
            <div key={card.id} className="mx-auto w-xs group">
              <div className="py-3">
                <h1 className="text-red-400 font-semibold text-lg">
                  {card.locationTag}
                </h1>
                <p className="py-5 px-15 text-lg">{card.address}</p>
                {/* <button className="bg-red-500 text-white py-2 px-4 items-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
