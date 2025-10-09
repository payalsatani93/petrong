import React from "react";

function FeatureSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 " style={{ fontFamily: "var(--font-Poppins)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[36px]  font-medium leading-snug mb-4">
            Creating What You Need, <br />
            The Way You Want Them
          </h2>
          <p className="text-black text-[14px] mb-4 md:text-xl font-medium">
            Petrong developers have excelled in a number of fields due to their<br/>
            deep expertise in software development as a service.
          </p>
        </div>

        {/* Right Feature Boxes */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="bg-green-50 rounded-lg shadow-sm p-6 w-[160px] text-center">
            <h3 className="text-green-500 font-medium text-[20px] mb-2">Fast</h3>
            <p className="text-black text-[14px] font-medium">Delivery</p>
          </div>
          <div className="bg-green-50 rounded-lg shadow-sm p-6 w-[160px] text-center">
            <h3 className="text-green-500 font-medium text-[20px ] mb-2">Advance</h3>
            <p className="text-black  text-[14px] font-medium">Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
