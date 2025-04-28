import React from "react";

const Contact = () => {
  const locationCard = [
    {
      id: 1,
      locationTag: "UK HD",
      address:
        "PZ Cussons Manchester Business park 3500 Aviator Way Manchester M1234",
    },
    {
      id: 2,
      locationTag: "UK HD",
      address:
        "PZ Cussons Manchester Business park 3500 Aviator Way Manchester M1234",
    },
    {
      id: 3,
      locationTag: "UK HD",
      address:
        "PZ Cussons Manchester Business park 3500 Aviator Way Manchester M1234",
    },
    {
      id: 4,
      locationTag: "UK HD",
      address:
        "PZ Cussons Manchester Business park 3500 Aviator Way Manchester M1234",
    },
    {
      id: 5,
      locationTag: "UK HD",
      address:
        "PZ Cussons Manchester Business park 3500 Aviator Way Manchester M1234",
    },
    {
      id: 6,
      locationTag: "UK HD",
      address:
        "PZ Cussons Manchester Business park 3500 Aviator Way Manchester M1234",
    },
    {
      id: 7,
      locationTag: "UK HD",
      address:
        "PZ Cussons Manchester Business park 3500 Aviator Way Manchester M1234",
    },
  ];

  return (
    <div>
      <section className="bg-[#B50606] py-[10%] px-10 text-white lg:py-[5%]">
        <h1 className="lg:block text-center text-5xl lg:text-7xl pb-5 font-bold">
          Contact Us
        </h1>
        <p className="text-md text-center">PZ will like to connect with you</p>
      </section>
      <section className="bg-[#E9E9E9] py-16 px-6 text-center">
        <h1 className="text-3xl font-semibold mb-8">Say Hello</h1>
        <form className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              className="flex-1 py-4 px-4 border-2 border-gray-500 rounded-md focus:outline-gray-700"
              type="text"
              placeholder="First Name"
            />
            <input
              className="flex-1 py-4 px-4 border-2 border-gray-500 rounded-md focus:outline-gray-700"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              className="flex-1 py-4 px-4 border-2 border-gray-500 rounded-md focus:outline-gray-700"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="flex-1 py-4 px-4 border-2 border-gray-500 rounded-md focus:outline-gray-700"
              type="text"
              placeholder="Location"
            />
          </div>
          <textarea
            className="w-full py-4 px-4 border-2 border-gray-500 rounded-md h-40 focus:outline-gray-700"
            placeholder="Message"
          ></textarea>
          <button className="bg-red-800 hover:bg-red-400 transition py-3 px-15 text-white rounded-md">
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
                <button className="bg-red-500 text-white py-2 px-4 items-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
