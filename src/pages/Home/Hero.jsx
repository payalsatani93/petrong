import React from "react";

export default function Hero() {
  // const [isOpen, setIsOpen] = useState(false); // state for mobile menu

  return (
    <section className="w-full h-full bg-white overflow-hidden z-0 relative " style={{ fontFamily: "var(--font-poppins)" }}>
      <div className="bg-black lg:w-[90%] md:w[90%]  flex z-50  ">
        <div className="border-0 xl:flex lg:flex md:flex sm:grid mt-15">
          {/* Hero Content */}
          <div
            className="text-white flex flex-col xl:p-12 lg:p-10 gap-5 md:p-8 sm:p-10 p-8 text-left
        2xl:w-[70%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] border-0 2xl-h-100"
          >
            <h1
              className="xl:text-[4rem] lg:text-[2.5rem] md:text-[2rem] sm:text-[3rem] text-[2.1rem] 
          font-bold font-Poppins mt-10"
            >
              Get the next <br /> level developments.
            </h1>

            <p
              className="text-semibold font-Montserrat xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[100%] w-[100%] 
          text-base xl:text-[1.2rem] lg:text-[1rem] md:text-[0.8rem] sm:text-[1rem] text-[1rem] mt-4 mb-6 text-left"
            >
              Every line of code we deliver is carefully crafted by our in-house
              team of professional developers. While constantly looking for new
              horizons, challenges, and opportunities in web development, we
              focus on these core areas:
            </p>

            <div className="xl:flex lg:flex md:flex border-0  xl:gap-5 lg:gap-5 md:gap-2 sm:gap-5 gap-6">
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
        <div className="xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[40%] w-[40%] relative justify md:block hidden">
          <div
            className="xl:w-[22rem] xl:h-[30rem] lg:w-[15rem] lg:h-[14rem] md:w-[13rem] md:h-[12rem]
           xl:block lg:block md:hidden sm:hidden hidden relative xl:left-[17rem] lg:left-[12.6rem] md:left-[10.2rem]  border-0 
           bg-[#00D285] z-100 "
          ></div>

          <div
            className="xl:w-[22rem] xl:h-[25rem] lg:w-[15rem] lg:h-[20rem] md:w-[13rem] md:h-[12rem] 
          xl:block lg:block md:block sm:hidden hidden relative -bottom-2  border-0 bg-[#00D285] z-100 
          xl:left-[8rem] lg:left-[10.6rem] md:left-[16.2rem] sm:left-[20rem] left-[18rem] top-0"
          ></div>

          <img
            // src="public/Image/home1.png"
            src="public/Image/home1.png"
            alt="Developer working"
            className="absolute xl:top-[12.6rem] xl:left-[6rem] lg:top-[10.5rem] lg:left-[3.5rem] md:top-[6rem] md:-left-[1rem] 
            sm:top-[3.8rem] sm:left-[6rem] top-[3.8rem] left-[6rem] xl:w-[25rem] lg:w-[19rem] md:w-[16rem] sm:w-[25rem] w-[25rem] 
           shadow-xl z-500 xl:block lg:block md:block sm:hidden hidden"
          />
        </div>
      </div>
    </section>
  );
}
