import React from "react";

function Mobileapplication() {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      {/* Heading + Subtitle */}
      <div className="max-w-5xl mx-auto text-center md:text-left mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-500">
          ---Mobile & Web Applications
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          We help create solutions that optimize processes, improve
          accessibility to data, and increase successful outcomes by providing
          the necessary insights and tools to change physician and patient
          behavior.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center gap-6">
        <img
          src="public/Image/potfolio1.png"
          alt="Mobile app preview"
          className=" max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] drop-shadow-2xl object-contain"
        />
        <img
          src="public/Image/potfolio2.png"
          alt="Mobile app preview"
          className=" max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] drop-shadow-2xl object-contain"
        />
        <img
          src="public/Image/potfolio3.png"
          alt="Mobile app preview"
          className=" max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] drop-shadow-2xl object-contain"
        />
        <img
          src="public/Image/potfolio4.png"
          alt="Mobile app preview"
          className=" max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] drop-shadow-2xl object-contain"
        />
        <img
          src="public/Image/potfolio5.png"
          alt="Mobile app preview"
          className=" max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] drop-shadow-2xl object-contain"
        />
        <img
          src="public/Image/potfolio6.png"
          alt="Mobile app preview"
          className=" max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] drop-shadow-2xl object-contain"
        />
      </div>
    </section>
  );
}

export default Mobileapplication;
