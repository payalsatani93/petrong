import React from "react";

function Mobileapplication() {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 " style={{ fontFamily: "var(--font-Poppins)" }}>
      {/* Heading + Subtitle */}
      <div className="max-w-5xl mx-auto text-center md:text-left mb-10">
        <div className="flex items-center justify-center md:justify-start mb-4">
          
          <p className="text-white font-medium uppercase text-[29px] tracking-wide">
           Mobile & Web Applications
          </p>
        </div>
        <p className="text-white text-[13px] ">
          We help create solutions that optimize processes, improve
          accessibility to data, and increase successful outcomes by providing
          the<br/> necessary insights and tools to change physician and patient
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
