import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    company: "Leonard Technologies",
    image: "/Image/JoneDeo-CEO.png",
    feedback:
      "A reliable and passionate team — they exceeded our expectations in every project milestone.",
  },
  {
    name: "Michael Lee",
    role: "CTO",
    company: "Bright Labs",
    image: "/Image/JoneDeo-CEO.png",
    feedback:
      "Working with the PETRONG team has been a huge success! They care deeply about our business!",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section
      className="bg-blue-50 flex flex-col items-center justify-center relative overflow-hidden py-16 px-4 sm:px-6 md:px-10"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* --- Row: TESTIMONIALS + CARD --- */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-6xl">
        {/* Left Text Section */}
        <div className="text-black max-w-md text-center md:text-left flex-shrink-0 mt-4 md:-mt-40">
          <div className="flex items-center justify-center md:justify-start">
            <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
            <p className="font-semibold uppercase text-lg">TESTIMONIALS</p>
          </div>
          <p className="text-lg font-semibold mt-3">
            See how our clients feel about us.
          </p>
        </div>

        {/* Right Card Section */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-xl flex flex-col justify-start items-center mt-6 md:mt-0">
          <div className="relative w-full h-[360px] sm:h-[400px] md:h-[420px] lg:h-[450px] flex justify-center items-center">
            {testimonials.map((item, index) => {
              const position =
                (index - current + testimonials.length) % testimonials.length;

              let translateY = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 0;

              if (position === 0) {
                translateY = 0;
                scale = 1;
                zIndex = 40;
                opacity = 1;
              } else if (position === 1) {
                translateY = 25;
                scale = 1;
                zIndex = 30;
                opacity = 1;
              } else {
                opacity = 0;
                zIndex = 0;
              }

              return (
                <div
                  key={index}
                  className="absolute w-[95%] sm:w-[90%] md:w-[90%] transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col items-start space-y-3 sm:space-y-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 object-cover rounded-full border-4 border-white shadow-md mb-3"
                    />
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-base">
                      {item.feedback}
                    </p>
                    <p className="font-semibold text-gray-900 text-base sm:text-base md:text-lg">
                      {item.name}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between w-full mt-1 text-sm sm:text-sm md:text-base">
                      <p className="text-black mb-1 sm:mb-0">{item.role}</p>
                      <p className="font-semibold">{item.company}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Navigation Buttons */}
          <div
            className="flex sm:flex-row lg:flex-col justify-center gap-4 w-full sm:w-auto
    mt-4 lg:mt-0 lg:absolute lg:right-[-40px] xl:right-[-60px] lg:top-1/2 lg:-translate-y-1/2 z-40"
          >
            <button
              onClick={prevTestimonial}
              className="p-3 w-12 h-12 sm:w-12 sm:h-12 flex text-xl font-semibold justify-center items-center rounded-full border-2 border-emerald-500 text-emerald-500 hover:text-emerald-500 hover:bg-black shadow-md transition"
            >
              ▲
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 w-12 h-12 sm:w-12 sm:h-12 flex text-xl font-semibold justify-center items-center rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-black transition"
            >
              ▼
            </button>
          </div>
        </div>
      </div>

      {/* --- ABOUT PACIOLI (Below Everything) --- */}
      <div className="flex items-center justify-center md:justify-start mt-20 mb-10 w-full max-w-6xl px-4 sm:px-0">
        <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
        <p className="font-semibold uppercase text-lg tracking-wide">
          ABOUT PACIOLI
        </p>
      </div>
    </section>
  );
}
