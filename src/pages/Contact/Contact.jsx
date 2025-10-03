import React from "react";

export default function ContactUs() {
  return (
    <section>
      <section className="relative bg-[#f2fdfb] ">
        <div className=" flex justify-evenly py-10 bg-[#f2fdfb]">
          {/* Left: Image */}
          <div>
            <img
              src="/Image/ContectUs.png"
              alt="Phone"
              className="rounded-lg"
            />
          </div>

          {/* Right: Contact Info */}
          <div className="relative">
            {/* ✅ Green Circle Behind Contact Us */}
            <span className="absolute  w-28 h-28 bg-green-300 rounded-full opacity-70 z-10"></span>

            <p className=" items-center gap-3 text-green-600">
              <span className="h-[2px] w-10 bg-green-600"></span>
              Do you have any question
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
              Contact Us
            </h2>

            <p className="text-gray-600 max-w-md">
              We are located in Nigeria and we operate internationally, with
              clients from the US, UK, Canada, Australia, and many other
              countries.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ closed top section properly */}
      {/* Bottom Section */}
      <div className="flex justify-evenly mt-20 mb-20">
        {/* Left: Form */}
        <div>
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            Work With Us
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-6">
            Let build something awesome together
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none bg-[#f2fdfb]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none bg-[#f2fdfb]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none bg-[#f2fdfb]"
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
        <div className="flex flex-col space-y-8">
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

          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Or drop us a line
            </h4>
            <p className="text-gray-600">partnerships@petrongsolutions.com</p>
            <p className="text-gray-600">+234 810 7565 941</p>
          </div>
        </div>
      </div>
    </section>
  );

