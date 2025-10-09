import React from "react";

export default function Kollegio() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative flex justify-center md:justify-start order-1 md:order-1">
          <img
            src="public/Image/product2.png"
            alt="Laptop desk setup"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-lg border border-green-100 object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-5 text-center md:text-left order-2 md:order-2">
          <p className="text-gray-400 text-lg font-medium">02</p>

          <h2 className="text-[36px] sm:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "var(--font-Poppins)" }}>
            Kollegio
          </h2>

          <p className="text-gray-600 leading-relaxed text-[15px] font-medium sm:text-lg" style={{ fontFamily: "var(--font-Montserrat)" }}>
            Kollegio is a highly flexible and robust Learning Management System
            (LMS) designed for any kind of training — academic or professional.
            It’s dynamic enough for organizations to manage academic, vocational,
            and professional programs simultaneously.
          </p>

          <p className="text-gray-600 leading-relaxed text-[15px] font-medium sm:text-lg" style={{ fontFamily: "var(--font-Montserrat)" }}>
            The platform includes live video classrooms, computer-based tests,
            video uploads, and eBooks in PDF format. Other admin tools include
            bulk emailing, audit trails, and access control.
          </p>

          <p className="text-gray-600 leading-relaxed text-[15px] font-medium sm:text-lg" style={{ fontFamily: "var(--font-Montserrat)" }}>
            Kollegio is a leading LMS in the Nigerian EdTech ecosystem,
            developed with strong commitment, innovation, and user-centered
            design — ensuring both satisfaction and value.
          </p>

          <div className="pt-2">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
