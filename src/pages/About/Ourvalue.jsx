import React from "react";

export default function Ourvalue() {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description: "We hold ourself to a strong ethical and moral code.",
      color: "text-red-500",
      bg: "bg-white",
      icon: "❤️",
    },
    {
      id: 2,
      title: "Trust",
      description:
        "We are dependable, loyal, and hard working to achieve the same goal.",
      color: "text-green-500",
      bg: "bg-white",
      icon: "💚",
    },
    {
      id: 3,
      title: "Excellence",
      description:
        "We consistently strive to do high-quality work and give no room for error.",
      color: "text-yellow-500",
      bg: "bg-white",
      icon: "💛",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-white font-Poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* ---------- LEFT SIDE ---------- */}
        <div>
          {/* Header */}
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <span className="w-12 h-[2px] bg-green-400 rounded mr-3"></span>
            <p className="text-black font-medium uppercase text-[18px] tracking-wide">
              Our Value
            </p>
          </div>

          <h2 className="text-[40px] sm:text-4xl md:text-[40px] font-medium leading-snug text-center lg:text-left text-[#0A0E2A] mb-10">
            A melting pot for the <br className="hidden sm:block" /> best ideas
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[24px] top-8 bottom-12 w-[3px] bg-gray-200 hidden sm:block"></div>

            {/* Value Items */}
            <div className="space-y-10">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-4 text-left"
                >
                  {/* Icon box */}
                  <div
                    className={`flex items-center justify-center mt-3 w-13 h-14 rounded-xl shadow-md ${value.bg} relative z-10`}
                  >
                    <span className={`text-xl ${value.color}`}>
                      {value.icon}
                    </span>
                  </div>

                  {/* Text content */}
                  <div>
                    <h3 className="font-semibold text-[18px] text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 mt-1 text-[18px] ">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="relative flex justify-center items-center w-full px-4 md:px-8 lg:px-16">
          {/* Dotted Pattern */}
          <div className="absolute hidden lg:grid grid-cols-6 gap-2 top-0 left-4 md:left-19 lg:left-10  xl:left-16 2xl:left-16">
            {Array.from({ length: 54 }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full"
              ></span>
            ))}
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-xl lg:mt-10">
            <img
              src="/Image/About2.png"
              alt="Person coding on laptop"
              className="w-60 sm:w-72 md:w-96 max-w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}