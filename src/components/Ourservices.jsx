import React from "react";

export default function Ourservices() {
  const techStack = [
    { id: "01", name: "Node.js" },
    { id: "02", name: "Laravel" },
    { id: "03", name: "Vue.js" },
    { id: "04", name: "React.js" },
  ];

  return (
    <section className="py-15  bg-white relative">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <p className="text-green-400 font-semibold uppercase text-3xl">
         ---Our Services
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Methodologies & <br /> Technology We Use.
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          We build your product from scratch with top frontend <br /> and
          backend frameworks. We also focus on native end-user experiences,
          providing full performance on both iOS and Android devices.
        </p>
      </div>
    </section>
  );
}
