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
      image: "public/Image/home-mobaile.png",
    },
    {
      title: "Shopify & Woo Commerce Development",
      description:
        "We know the ins and outs of Shopify & WooCommerce and we can help you get your eCommerce site running in a matter of weeks.",
      image: "public/Image/home-shopify.png",
    },
    {
      title: "Vue - React Development & Email Template Coding",
      description:
        "Performance, Scalability, Reusable Components, One Way Data Flow – the perfect ingredients for building websites or web apps; also high class coding for email marketing.",
      image: "public/Image/home-hue-react.png",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-8 md:flex md:gap-20 mt-10 justify-evenly ">
      {/* Left Image */}
      <div className="md:w-1/2 ">
        <img src="public/Image/home-2.jpg" alt="Core Services" />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 mt-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As part of our high quality service, we'd like to offer something
            extra too.
          </p>
        </div>

        <ul className="space-y-6">
          {services.map((service, index) => (
            <li key={index} className="flex gap-4 items-start">
              {/* Service Image */}
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Ourcoresrv;
