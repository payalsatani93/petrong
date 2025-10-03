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
      role: "Head of partnership",
      image: "/Image/About6.png",
    },
    {
      name: "Moses Leonard",
      role: "Head of operations",
      image: "/Image/About6.png",
    },
    {
      name: "Damelin Duba",
      role: "Country lead, Ghana",
      image: "/Image/About6.png",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header (Now Left-Aligned) */}
        <div className="mb-12">
          <p className="text-green-500 font-semibold mb-2 text-3xl">---OUR TEAM</p>
          <h2 className="text-5xl font-bold mb-4 leading-tight">
            Collaborating and  <br /> optimizing for growth
          </h2>
          <p className="text-gray-50 max-w-5xl">
            The team at Petrong — we are powering the growth <br/>of the African technology ecosystem.
          </p>
        </div>

        {/* Responsive Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{member.name}</h3>
              <p className="text-sm text-gray-600 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
