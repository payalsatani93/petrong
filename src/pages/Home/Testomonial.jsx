import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    company: "Leonard Technologies",
    image: "/Image/JoneDeo-CEO.png",
    feedback:
      "Working with the PETRONG team has been a huge success! They're good people who care deeply about our business!",
  },
  {
    name: "Sarah Smith",
    role: "Marketing Head",
    company: "Nova Solutions",
    image: "/Image/JoneDeo-CEO.png",
    feedback:
      "PETRONG transformed our digital presence completely. Their creativity and professionalism stand out.",
  },
  {
    name: "Michael Lee",
    role: "CTO",
    company: "Bright Labs",
    image: "/Image/JoneDeo-CEO.png",
    feedback:
      "A reliable and passionate team — they exceeded our expectations in every project milestone.",
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
    <section className="bg-blue-50 flex flex-col md:flex-row items-center justify-around px-4 py-12 md:px-16 relative overflow-hidden">
      {/* Left Text Section */}
      <div className="text-black max-w-md text-center md:text-left md:mb-0 md:mr-10">
        <div className="flex items-center justify-center md:justify-start">
          <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
          <p className="font-semibold uppercase text-lg tracking-wide">
            TESTIMONIALS
          </p>
        </div>
        <p className="text-lg  font-semibold">
          See how our clients feel about us.
        </p>
      </div>

      {/* Right Card Section */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col justify-center items-center">
        {/* Card stack */}
        <div className="relative w-full h-[380px] flex justify-center items-center">
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
              zIndex = 30;
            } else if (position === 1) {
              translateY = 25;
              scale = 0.95;
              zIndex = 20;
              opacity = 0.85;
            } else if (position === 2) {
              translateY = 50;
              scale = 0.9;
              zIndex = 10;
              opacity = 0.7;
            }

            return (
              <div
                key={index}
                className="absolute w-[90%] sm:w-[95%] md:w-full transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col items-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-md"
                  />
                  <p className="text-gray-700  leading-relaxed text-sm sm:text-base">
                    {item.feedback}
                  </p>
                  <p className="font-semibold text-gray-900 text-base">
                    {item.name}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between w-full mt-1 text-sm">
                    <p className="text-black mb-1 sm:mb-0">{item.role}</p>
                    <p className="font-semibold">{item.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        {/* lg → right side, md-sm → below card */}
        <div
          className="flex lg:flex-col justify-center gap-4 w-full lg:w-auto lg:mt-0 
                        lg:absolute lg:right-[-60px] lg:top-1/2 lg:-translate-y-1/2 z-40"
        >
          <button
            onClick={prevTestimonial}
            className="p-2 sm:p-3 rounded-full border bg-white hover:bg-emerald-500 hover:text-white transition 
            shadow-md"
          >
            ▲
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 sm:p-3 rounded-full border bg-white hover:bg-emerald-500 hover:text-white transition shadow-md"
          >
            ▼
          </button>
        </div>
      </div>
    </section>
  );
}
