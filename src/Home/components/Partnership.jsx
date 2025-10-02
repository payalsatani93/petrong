import React from "react";

function Partnership() {
  return (
    <section className="flex relative h-[500px] overflow-hidden">
      {/* Left: Black background /} */}
      <div className="w-1/2 h-full bg-black flex items-center justify-center  static">
        {/* {/ Image inside left side /} */}
        <img
          src="public/Image/Partnership-hero.jpg"
          alt="Partnership"
          className=" object-cover rounded-lg   absolute "
        />
      </div>

      {/* {/ Right: Green background /} */}
      <div className="w-1/2 h-full bg-[#ebfaf4] flex items-center">
        {/* {/ Text content */}
        <div className="pl-40">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 ">
            Partnership for agencies
          </h1>
          <p className="text-slate-700 leading-relaxed text-wrap w-1/1">
            A reliable coding partner that delivers solutions to your business
            challenges and stays by your side in the long term. Having the whole
            spectrum of web development expertise, we are here to take care of
            your projects while making it possible for you to focus on growing
            your own business.
          </p>
          <div className="mt-6">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition">
              Get a Quote
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
