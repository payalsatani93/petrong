import React from "react";

export default function Hero() {
  // const [isOpen, setIsOpen] = useState(false); // state for mobile menu

  return (
    <section
      className="w-100% 2xl:h-235 xl:h-200 lg:h-160 md:h-150 sm:200 h-170  bg-white overflow-hidden flex relative "
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      

        <div
        className="bg-black lg:w-[80%] w-full flex xl:lg:md:h-[90%]"
      >

          {/* ✅ Hero Content Centered */}
          <div className="text-white flex flex-col justify-center items-start px-10 md:px-16 lg:px-20 w-full">
            <h1
              className="xl:text-[4rem] lg:text-[2.5rem] md:text-[3rem] sm:text-[3rem] text-[2.1rem] 
            font-bold"
            >
              Get the next <br /> level developments.
            </h1>

            <p
              className="text-semibold text-base xl:text-[1.2rem] lg:text-[0.9rem] 
            mt-4 mb-6 max-w-[600px] flex-wrap "  style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Every line of code we deliver is carefully crafted by our in-house
              team of professional developers. While constantly looking for new
              horizons, challenges, and opportunities in web development, we
              focus on these core areas:
            </p>

            <div className="xl:flex lg:flex md:flex border-0 xl:gap-5 lg:gap-5 md:gap-2 sm:gap-5 gap-6">
              <button
                className="bg-[#00D285] text-white xl:px-[2.5rem] xl:py-[1rem] lg:px-[2.5rem]
              lg:py-[1rem] md:px-[1rem] sm:px-[1.3rem] sm:py-[1rem] px-[1.5rem] py-[1rem] rounded-full font-semibold
              hover:bg-green-400 mr-5 md:mr-2 sm:mr-5 sm:mb-0 mb-5"
              >
                Get a Quote
              </button>
              <button
                className="bg-white text-black xl:px-[1.9rem] xl:py-[1rem] lg:px-[2.5rem] lg:py-[1rem] 
              md:px-[1.3rem] sm:px-[1rem] sm:py-[1rem] px-[1.5rem] py-[1rem] rounded-full font-semibold
              hover:bg-green-400 mr-0 md:mr-2 sm:mr-5 sm:mb-0 mb-5"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
    

      {/* // show only md screen other screen sm down screen hide div aqua color with div parent // */}
      <div className="top-0 right-0 lg:md:block hidden z-10 lg:w-[20%]">
        <div
          className="2xl:w-[30rem] xl:w-[19rem] lg:w-[16rem] md:w-[13rem] 2xl:h-[30rem] xl:h-[20rem]  lg:h-[18rem] md:h-[18rem]
            relative   border-0 
           bg-[#00D285] z-100 "
        ></div>
 
        <div
          className="2xl:w-[28rem] xl:w-[20rem] lg:w-[15rem] 2xl:h-[28rem]  xl:h-[25rem] 
           relative border-0 bg-[#00D285] z-100 2xl:xl:top-2 lg:top-10 md:top-10 2xl:right-80 xl:right-75 lg:right-50
            rounded-2xl "
        ></div>

        <img
          // src="public/Image/home1.png"
          src="public/Image/home1.png"
          alt="Developer working"
          className="absolute 2xl:xl:top-[12.6rem] lg:top-[10rem]
           2xl:w-[33rem] xl:w-[28rem] lg:w-[20rem] md:w-[15rem] xl:lg:right-20 md:right-8 2xl:h-150 xl:lg:md:h-140
           shadow-xl   z-500"
        />
      </div>
    </section>
  );
}
