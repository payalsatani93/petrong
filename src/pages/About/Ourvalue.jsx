import React from "react";

export default function Ourvalue() {
  const values = [
    {
      title: "Integrity",
      description: "We hold ourselves to a strong ethical and moral code.",
      icon: "/Image/About3.png",
    },
    {
      title: "Trust",
      description:
        "We are dependable, loyal, and hard-working to achieve the same goal.",
      icon: "/Image/About4.png",
    },
    {
      title: "Excellence",
      description:
        "We consistently strive to do high-quality work and give no room for error.",
      icon: "/Image/About5.png",
    },
  ];

  return (
    <section className="py-16 bg-white px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Section - Values */}
        <div>
          {/* Heading */}
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
            <p className="text-green-500 font-semibold uppercase text-base sm:text-lg tracking-wide">
              Our Value
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-snug text-center lg:text-left">
            A melting pot for the <br className="hidden sm:block" /> best ideas
          </h2>

          {/* Values List */}
          <div className="space-y-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-12 sm:h-12 overflow-hidden rounded-full shadow-md mb-3 sm:mb-0">
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="sm:ml-5">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/Image/About2.png"
            alt="Values"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
