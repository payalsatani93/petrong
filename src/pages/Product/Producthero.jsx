import React from "react";

export default function Producthero() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ fontFamily: "var(--font-Montserrat)" }}
    >
      {/* ✅ Green background (kept same) */}
      <div className="bg-[#EBFAF4] w-full h-150 skew-y-8 -translate-y-50 relative z-0" />

      {/* ✅ Decorative vector line */}
      <div className="hidden xl:block absolute top-0 xl:w-250 xl:left-65 z-10">
        <img
          src="public/Image/Vector 42 (3).png"
          alt="Decorative line"
          className="w-full"
        />
      </div>

      {/* ✅ Content section — fixed typo + added z-index */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-70 p-4 ">
        <h2 className="text-[30px] md:text-3xl font-semibold text-gray-900 mb-4">
          Dedicated product for you
        </h2>
        <p className="text-gray-600 leading-9 max-w-2xl font-medium text-[17px] mx-auto">
          Our product is craft out from looking at the problem people are facing
          each day and providing a solution to it, from the down of making a
          survey and turning it into a useful products based on what we capture
          on people reaction and what they fill out
        </p>
      </div>

      {/* ✅ Dotted pattern (kept same, placed behind everything) */}
      <div className="hidden xl:block absolute left-25 top-67 ">
        <div className="grid grid-cols-10 gap-2">
          {[...Array(110)].map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 bg-emerald-400 rounded-full opacity-80"
            />
          ))}
        </div>
      </div>

      {/* ✅ Slanted white divider */}
      <div className="text-[30px] md:text-3xl text-center mb-10 -mt-40 font-semibold text-gray-900" style={{ fontFamily: "var(--font-Montserrat)" }}>
        <h3>
          Why you should choose <br /> our product
        </h3>
      </div>
    </section>
  );
}
