import React from "react";

function Ourcoresrv() {
  const services = [
    {
      title: "Web Development",
      description:
        "We convert any design file: PSD, Sketch, Figma, Adobe XD to pixel-perfect, semantic, and standard-compliant HTML/CSS templates.",
      image: "/Image/home-web.png",
    },
    {
      title: "Mobile Applications",
      description:
        "We do highly customizable, easy-to-manage, and extendable WordPress solutions. Plugins, themes, or an eCommerce. We can do it.",
      image: "/Image/home-mobaile.png",
    },
    {
      title: "Shopify & Woo Commerce Development",
      description:
        "We know the ins and outs of Shopify & WooCommerce and we can help you get your eCommerce site running in a matter of weeks.",
      image: "/Image/home-shopify.png",
    },
    {
      title: "Vue - React Development & Email Template Coding",
      description:
        "Performance, Scalability, Reusable Components, One Way Data Flow – the perfect ingredients for building websites or web apps; also high class coding for email marketing.",
      image: "/Image/home-hue-react.png",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* Left Image */}
      <div className="flex justify-center md:justify-start">
        <img
          src="/Image/home-2.jpg"
          alt="Core Services"
          className="w-full max-w-md md:max-w-lg object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="space-y-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto md:mx-0">
            As part of our high quality service, we'd like to offer something
            extra too.
          </p>
        </div>

        <ul className="space-y-6">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:items-start gap-4 text-left"
            >
              {/* Service Image */}
              <div className="w-12 h-12 flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Ourcoresrv;
