import React from "react";

export default function Ourvalue() {
  const values = [
    {
      title: "Integrity",
      description: "We hold ourselves to a strong ethical and moral code",
      icon: "/Image/About3.png",
    },
    {
      title: "Trust",
      description:
        "We are dependable, loyal, and hard working to achieve the same goal.",
      icon: "/Image/About4.png",
    },
    {
      title: "Excellence",
      description:
        "We consistently strive to do high-quality work and give no room for error",
      icon: "/Image/About5.png",
    },
  ];

  return (
    <div className="py-16 bg-white px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Values */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
            <p className="text-green-500 font-semibold uppercase text-lg tracking-wide">
              Our Value
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            A melting pot for the <br /> best idea
          </h2>

          <div className="space-y-8">
            {values.map((value, idx) => (
              <div key={idx} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 overflow-hidden shadow-md">
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-gray-500">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/Image/About2.png"
            alt="Values"
            className="w-full max-w-sm rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
