import React from "react";

export default function Ourservices() {
  const techStack = [
    { id: "01", name: "Node.js" },
    { id: "02", name: "Laravel" },
    { id: "03", name: "Vue.js" },
    { id: "04", name: "React.js" },
  ];

  return (
    <section className="py-16 px-6 bg-white relative">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <p className="text-green-500 font-semibold uppercase tracking-wider">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Methodologies & <br /> Technology We Use.
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          We build your product from scratch with top frontend and backend
          frameworks. We also focus on native end-user experiences, providing
          full performance on both iOS and Android devices.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {techStack.map((tech) => (
          <div
            key={tech.id}
            className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center"
          >
            <p className="text-gray-400 text-sm">{tech.id}</p>
            <h3 className="text-lg font-bold text-gray-900 mt-2">{tech.name}</h3>
            <span className="text-2xl text-gray-500 mt-4 block">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
