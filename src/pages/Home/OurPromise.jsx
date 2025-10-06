import React from "react";
import {
  Codesandbox,
  MonitorSmartphone,
  Users,
  Undo2,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";

export default function OurPromise() {
  const promises = [
    {
      icon: <Codesandbox className="w-8 h-8 text-gray-600" />,
      title: "Top Code Quality",
      description:
        "What we promise is not simply code but rather a solution. You get a W3C fully compliant markup with no compromise on quality.",
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-gray-600" />,
      icon: <MonitorSmartphone className="w-8 h-8 text-gray-600" />,
      title: "Responsive",
      description:
        "We know you look for positive attitude, timely reactions, and flexibility. We are here to listen and give the utmost of our capabilities.",
    },
    {
      icon: <Users className="w-8 h-8 text-gray-600" />,
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: "Rockstar Team",
      description:
        "Expertise is our USP. You get an all-star squad of experienced geeks, fully at your service and armed with coding skills to die for.",
    },
    {
      icon: <Undo2 className="w-8 h-8 text-gray-600" />,
      icon: <Undo2 className="w-8 h-8 text-gray-600" />,
      title: "Fast Turn-arounds",
      description:
        "Speed matters no less than quality. We are fast, agile and capable of delivering top-notch code in a timeframe chosen by you.",
        "Speed matters no less than quality. We are fast, agile and capable of delivering top-notch code in a timeframe chosen by you.",
    },
    {
      icon: <LifeBuoy className="w-8 h-8 text-gray-600" />,
      title: "Life-time Support",
      icon: <LifeBuoy className="w-8 h-8 text-gray-600" />,
      title: "Life-time Support",
      description:
        "The ultimate proof of our code quality: you get our non-expiring support. If any bugs appear in the future, just write us a line.",
        "The ultimate proof of our code quality: you get our non-expiring support. If any bugs appear in the future, just write us a line.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gray-600" />,
      icon: <ShieldCheck className="w-8 h-8 text-gray-600" />,
      title: "Secured Agreement",
      description:
        "Your artwork is fully yours and we would never claim otherwise. You get our word and our full willingness to sign an NDA.",
        "Your artwork is fully yours and we would never claim otherwise. You get our word and our full willingness to sign an NDA.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Promise
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          As part of our high quality service, we'd like to offer something
          extra too.
        </p>
      </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3  mx-auto ">
        {promises.map((item, index) => (
          <div
            key={index}
            className="bg-[#f3fcf8] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-4 flex gap-5 ">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
