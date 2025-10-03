import React from "react";

function OurPromise() {
  const promises = [
    {
      image: "/Image/home-web.png",
      title: "Top Code Quality",
      description:
        "What we promise is not simply code but rather a solution. You get a W3C fully compliant markup with no compromise on quality.",
    },
    {
      image: "/Image/home-web.png",
      title: "Responsive",
      description:
        "We know you look for positive attitude, timely reactions, and flexibility. We are here to listen and give the utmost of our capabilities.",
    },
    {
      image: "/Image/home-web.png",
      title: "Rockstar Team",
      description:
        "Expertise is our USP. You get an all-star squad of experienced geeks, fully at your service and armed with coding skills to die for.",
    },
    {
      image: "/Image/home-web.png",
      title: "Fast Turn-arounds",
      description:
        "Speed matters no less than quality. We are fast, agile and capable of delivering top notch quality code in a timeframe chosen by you.",
    },
    {
      image: "/Image/home-web.png",
      title: "Life-time support",
      description:
        "The ultimate proof of our code quality: you get our non-expiring support. If any bugs happen to appear in the future, just write us a line.",
    },
    {
      image: "/Image/home-web.png",
      title: "Secured Agreement",
      description:
        "Your artwork is fully yours and we would never claim otherwise. You get our word and our full willingness to sign, just  an NDA.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Promise</h2>
        <p className="mt-2 text-gray-600">
          As part of our high quality service, we'd like to offer something extra too.
        </p>

        <div className="mt-15 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((item, index) => (
            <div
              key={index}
              className="h-full"
            >
              <div className="shadow-md rounded-2xl h-full">
                <div className="p-10 text-left flex flex-col items-start bg-green-50">
                  {/* Show image instead of icon */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPromise;
