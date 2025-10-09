import React from "react";

function Partnership() {
  return (
    <section className="flex flex-col md:flex-row relative bg-black text-white md:bg-[#ebfaf4]
     md:text-black h-auto md:h-[480px] lg:h-[650px] xl:h-[680px] 2xl:h-[780px] gap-6 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10
      overflow-hidden"style={{ fontFamily: "var(--font-montserrat)" }}>
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-full flex items-center justify-center bg-black  relative">
        <img
          src="public/Image/Partnership-hero.jpg"
          alt="Partnership"
          className="h-[70%] w-[80%] sm:h-[80%] sm:w-[85%] md:h-[90%] md:w-[100%] object-contain md:object-cover shrink-0 relative -mr-0 sm:-mr-0 md:-mr-20 xl:-mr-20 2xl:-mr-30"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-12 relative overflow-hidden bg-black md:bg-transparent">
        {/* Decorative Line / Curve */}
        <img
          src="public/Image/Partner-greenline.png"
          alt="Decorative Line"
          className="absolute top-0 h-220 w-32 hidden xl:block lg:w-96 "
        />

        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-Montserrat text-white md:text-slate-700">
            Partnership for agencies
          </h1>

          {/* Added spacing below h1 */}
          <div className="mt-4 md:mt-6 lg:mt-8"></div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-Montserrat leading-relaxed text-white md:text-slate-700">
            A reliable coding partner that delivers solutions to your business
            challenges and stays by your side in the long term. Having the whole
            spectrum of web development expertise, we are here to take care of
            your projects while making it possible for you to focus on growing
            your own business.
          </p>
          <div className="mt-6 gap-6 flex justify-center md:justify-start">
            <button className="bg-[#00D285] hover:bg-green-600 text-white px-7 py-3 rounded-full font-semibold transition">
              Partnership Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
