import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RightSlider from "./Right-Slider";

export default function BlogSingle() {
  return (
    <div className="w-full flex flex-col items-center md:items-start md:text-left mb-8 p-6">
      {/* ===== Wrapper for All Sections ===== */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-10">
        {/* ===== Section 1 : Content Only ===== */}
        <div className="flex flex-col">
          {/* Categories */}
          <div className="flex gap-5 mb-4 justify-center md:justify-start">
            <p className="underline cursor-pointer">Inspiration</p>
            <p className="underline cursor-pointer">Design</p>
          </div>

          {/* Blog Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            8 UX/UI Trends That Will Dominate The Web Design World{" "}
            <br className="hidden md:block" />
            in 2022
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img
              src="/Image/Singleblog-img.png"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <p className="text-gray-700 font-medium">By Prime Leonard</p>
          </div>
        </div>

        {/* ===== Section 2 : Blog Content + Slider ===== */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side Blog Content */}
          <div className="md:w-2/3 w-full">
            <img
              src="/Image/Enjoyholiday.png"
              alt="Blog"
              className="max-w-full w-full h-auto rounded-lg mb-4"/>

            <h2 className="text-2xl font-semibold mb-4">
              More Design Insights
            </h2>
            <p className="mb-4">
              2021 is slowly reaching its end. This year’s UI design trends and
              UX trends will gently move aside to let next year’s winners take
              their place.
            </p>
            <p className="mb-4">
              Quality design is paramount when it comes to creating an
              attractive website that generates traffic and converts visitors
              into customers. Whether your brand offers a service or product,
              consumers will judge your company based not only on the quality of
              your product but also on the quality of your design. Poorly
              designed sites are often ignored, regardless of how beneficial
              they are. The only way to acquire customers and distinguish
              yourself from the competition is by improving your UX/UI design.
            </p>
            <p>
              And don’t get me wrong, you might have one of the top user
              interface designs of the past, but if you don’t update it, you’ll
              most likely end up with an old website.
            </p>
          </div>

          {/* Right Side Vertical Slider */}
          <div className="md:w-1/3 w-full">
            <RightSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
