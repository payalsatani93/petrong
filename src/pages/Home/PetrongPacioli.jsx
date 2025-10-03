import React from "react";

function PetrongPacioli() {
  return (
    <section className="flex flex-col md:flex-row relative h-auto md:h-[500px]">
      {/* Left Side: Image with outside shadow (top, left, bottom only) */}
      <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center bg-black">
        <img
          src="public/Image/Partnership-hero.jpg"
          alt="Partnership"
          className="object-cover h-full w-full md:w-[90%] md:h-[95%] "

         
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 bg-[#ebfaf4] flex items-center justify-center p-6 md:p-12 lg:p-16">
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
          Petrong & Pacioli
          </h1>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg">
            A reliable coding partner that delivers solutions to your business
            challenges and stays by your side in the long term. Having the whole
            spectrum of web development expertise, we are here to take care of
            your projects while making it possible for you to focus on growing
            your own business.
          </p>
          <div className="mt-6 gap-10 flex  ">
            <button className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full font-semibold shadow-md transition">
             Pacioli
            </button>
             <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition">
             Demo Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PetrongPacioli;
