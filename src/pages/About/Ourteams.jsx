import React from "react";

export default function Ourteams() {
  const team = [
    {
      name: "Rasheed Ogunusi",
      role: "CTO",
      image: "/Image/About6.png",
    },
    {
      name: "Debo Dunsin",
      role: "Head of Partnership",
      image: "/Image/About6.png",
    },
    {
      name: "Moses Leonard",
      role: "Head of Operations",
      image: "/Image/About6.png",
    },
    {
      name: "Damelin Duba",
      role: "Country Lead, Ghana",
      image: "/Image/About6.png",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-5 sm:px-8 md:px-12 lg:px-20 "style={{ fontFamily: "var(--font-Poppins)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
            <p className="text-white font-medium uppercase text-[18px] sm:text-lg">
              Our Team
            </p>
          </div>

          <h2 className="text-[40px] sm:text-4xl lg:text-5xl font-medium mb-4">
            Collaborating and <br className="hidden sm:block" /> optimizing for
            growth
          </h2>
          <p className="text-white text-[18px] sm:text-base md:text-lg max-w-3xl mt-6">
            The team at Petrong — powering the growth of the African technology
            ecosystem <br/> through innovation, collaboration, and excellence.
          </p>
        </div>

        {/* Responsive Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-[18px] sm:text-xl font-regular text-center">
                {member.name}
              </h3>
              <p className="text-gray-600 text-[18px] sm:text-base text-center mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
