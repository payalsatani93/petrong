import React from "react";

function PetrongPacioli() {
  return (
    <section className="flex md:flex-row  relative h-[500px] overflow-hidden">
      {/* Left: Black background /} */}
      <div className="w-1/2 h-full bg-black flex items-center justify-center relative">
        {/* {/ Image inside left side /} */}
        <img
          src="public/Image/Partnership-hero.jpg"
          alt="Partnership"
          className="w-[80%] h-[80%] object-cover rounded-lg absolute  top-13 bottom-0 sm:left-10"
        />
      </div>

      {/* {/ Right: Green background /} */}
      <div className="w-1/2 h-full bg-[#ebfaf4] flex items-center">
        {/* {/ Text content */}
        <div className="p-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 ">
            Petrong & Pacioli
          </h1>
          <p className="text-slate-700 leading-relaxed text-wrap w-1/1">
            Pacioli is the flagship product   at petrong software solutions, a
            tailored digital lending tools that helps microfinance institutions
            to efficiently and quickly onboard customers and to account
            reconciliation with financial inclution as the motivation. Pacioli
            improves female customers comfort with the service by specifically
            design for unique constraint.
          </p>
          <div className="mt-6 flex gap-10 w-1/2 ">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold  transition">
              Pacioli
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Demo Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PetrongPacioli;
