import React from "react";
import { Building2, Phone } from "lucide-react"; // ✅ Added icons

export default function ContactUs() {
  return (
    <section>
      <section className="relative bg-[#f2fdfb]" style={{ fontFamily: "var(--font-poppins)" }}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 py-10 px-5 md:px-16 lg:px-32">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              src="/Image/ContectUs.png"
              alt="Phone"
              className="rounded-lg w-full max-w-sm md:max-w-lg lg:max-w-xl"
            />
          </div>

          {/* Right: Contact Info */}
          <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-base/6">
            {/* ✅ Green Circle Behind Contact Us */}
            <div className="hidden lg:block absolute -top-12 lg:left-55 w-40 h-40 bg-[#5bdfaf] rounded-full opacity-70 z-0"></div>

            <h1 className="flex items-center text-lg relative z-10 mb-2">
              <span className="w-10 h-1 bg-green-500 mr-3"></span>
              Do you have any question
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 relative z-10">
              Contact Us
            </h2>

            <p className="text-gray-600 max-w-lg relative z-10  font-medium mt-5" style={{ fontFamily: "var(--font-montserrat)" }}>
              We are located in Nigeria and we operate internationally, with
              clients from the US, UK, Canada, Australia, and many other
              countries.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ closed top section properly */}

      {/* Bottom Section */}
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 w-full max-w-6xl px-10 py-10">
          {/* Left: Form */}
          <div className="lg:w-1/2 relative">
            {/* Green solid line before title */}
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
              <p className="font-semibold uppercase text-lg tracking-wide">
                Work with us
              </p>
            </div>
            <h1 className="text-4xl font-semibold text-gray-900 mt-2 mb-6">
              Let's build something <br /> awesome together
            </h1>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border-0 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none bg-[#f2fdfb]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border-0 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none bg-[#f2fdfb]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border-0 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none bg-[#f2fdfb]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="lg:w-1/2 flex justify-evenly items-center ">
            <div className="flex flex-col space-y-5 relative gap-10">
              {/* Vertical Line */}
              <div className="absolute left-5 top-0 bottom-12 w-px bg-gray-300"></div>

              {/* Address */}
              <div className="flex items-start space-x-3 relative">
                <div className="relative z-10">
                  <Building2 className="w-10 h-10 text-green-600 bg-white p-1 rounded-md border border-gray-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Pay us a visit
                  </h4>
                  <p className="text-gray-600">
                    471, Alagbado off Ijaye Ojokoro <br />
                    Inner Street Long Road, <br />
                    Lagos Nigeria
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-3 relative ">
                <div className="relative z-10">
                  <Phone className="w-10 h-10 text-green-600 bg-white p-1 rounded-md border border-gray-300" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Or drop us a line
                  </h4>
                  <p className="text-gray-600">
                    partnerships@petrongsolutions.com
                  </p>
                  <p className="text-gray-600">+234 810 7565 941</p>
                </div>
              </div>
              {/* loop for green dots */}
              <div className="absolute hidden lg:block lg:right-0 xl:right-0 xl:bottom-90 lg:bottom-90">
                <div className="grid grid-cols-10 gap-2">
                  {Array.from({ length: 90 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></span>
                  ))}
                </div>

                {/* green Line / Curve */}
                <img
                  src="public/Image/Partner-greenline.png"
                  alt="Decorative Line"
                  className="absolute -top-100 h-200 w-32 hidden xl:block lg:w-96 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
