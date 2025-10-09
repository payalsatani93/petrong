import Navbar from "../About/Navbar";

export default function Expertise() {
  return (
    <div className="font-Poppins">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <section className="relative bg-[#EBFAF4] py-16 md:py-24 h-auto xl:h-180 px-6 md:px-16 overflow-hidden">
        {/* Right Side Decorative Line Image */}
        <img
          src="/Image/EXPERTISE-line.png"
          alt="Expertise Line"
          className="absolute hidden xl:block xl:-top-0 xl:left-65 2xl:-top-0 2xl:left-128 max-w-full h-230 object-contain"
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-10">
          {/* Left - Image */}
          <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
            <img
              src="/Image/Expertise.png"
              alt="Expertise"
              className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] object-cover rounded-2xl"
            />
          </div>

          {/* Right - Text + Circle */}
          <div className="md:w-1/2 w-full flex flex-col relative px-4 md:px-8 text-center">
            {/* Decorative Circle */}
            <div className="hidden 2xl:block absolute bottom-[70px] right-[70px] w-32 h-32 bg-[#7BEBC1] rounded-full"></div>

            {/* Text Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center   mb-4">
                <div className="w-16 h-[4px] bg-[#4FD1A1] mr-2"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  EXPERTISE
                </h2>
              </div>
              <p className="text-black text-lg md:text-2xl font-semibold leading-relaxed">
                We provide reliable service to our clients that is <br />
                unbeatable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Digital Product Design */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center justify-self-center-center py-2 px-6 md:px-16">
        {/* Content */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <div className="bg-white p-3 md:p-10 text-center xl:text-start ">
            <p className="text-gray-500 text-lg md:text-2xl font-bold">01</p>
            <h2 className="text-2xl md:text-4xl font-bold text-black mt-2">
              Digital Product Design
            </h2>
            <p className="text-sm md:text-lg mt-4 leading-relaxed">
              The best software has both a strong back-end and a good front-end.
              We've got the tools and expertise to assist you in creating an
              intuitive and engaging user experience that your customers will
              love and your rivals will envy. Our UX/UI Design services include:
            </p>
            <ul className="mt-4 space-y-3 w-full">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm sm:text-base md:text-lg  md:text-left">
                  Design Workshops
                </span>
              </li>

              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm sm:text-base md:text-lg  md:text-left">
                  UX &amp; UI Consulting
                </span>
              </li>

              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm sm:text-base md:text-lg md:text-left">
                  Creative Direction
                </span>
              </li>

              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm sm:text-base md:text-lg  md:text-left">
                  Prototyping
                </span>
              </li>

              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm sm:text-base md:text-lg md:text-left">
                  Usability Testing
                </span>
              </li>
            </ul>

            <button className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-md border border-none">
              Read More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src="/Image/Digital Product.png"
            alt="Digital Product"
            className="w-full max-w-xs xl:absolute xl:top-188 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl  object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Section 2 - Web & Mobile Development */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center justify-center py-2 px-6 md:px-16 ">
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center order-2 md:order-1">
          <img
            src="/Image/Mobile Development.png"
            alt="Web & Mobile Development"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl  object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start order-1 md:order-2">
          <div className="bg-white p-3 md:p-10  text-center xl:text-start ">
            <p className="text-gray-500 text-lg md:text-2xl font-bold">02</p>
            <h2 className="text-2xl md:text-4xl font-bold text-black mt-2">
              Web & Mobile Development
            </h2>
            <p className="text-sm md:text-lg mt-4 leading-relaxed">
              We build custom applications to help companies save smarter, grow
              faster, serve better; through automation, business process
              management, to create unique advantages for the business. We have
              been trusted by many businesses to build their entire technology
              from the ground up. With a highly-qualified, committed, and
              results-driven team, we can provide modern, scalable, and easily
              maintainable software solutions.
            </p>
            <button className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* Section 3 - Cloud, DevOps & Deployment */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center justify-center py-2 px-6 md:px-16">
        {/* Content */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <div className="bg-white p-3 md:p-10  text-center xl:text-start ">
            <p className="text-gray-500 text-lg md:text-2xl font-bold">03</p>
            <h2 className="text-2xl md:text-4xl font-bold text-black mt-2">
              Cloud, DevOps & Deployment
            </h2>
            <p className="text-sm md:text-lg mt-4">
              We assist clients in leveraging cloud technologies while avoiding
              any of the IT pain points. We create public cloud applications to
              allow agile, future-ready business models, and we use automation
              to speed up and reduce costs in your infrastructure.
            </p>
            <p className="text-sm md:text-lg mt-4 leading-relaxed">
              Our DevOps consulting services will support you with each of the
              three main elements of your DevOps transition, from deployment to
              optimization. Our DevOps services will assist you in selecting
              best-in-class resources, equipping your team with the necessary
              skills, and fine-tuning your processes in order to break down
              silos, collaborate more effectively, and achieve a cultural shift
              that supports DevOps thinking.
            </p>
            <button className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-md ">
              Read More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src="/Image/DevOps Deployment.png"
            alt="Cloud & DevOps"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl  object-cover rounded-2xl"
          />
        </div>
      </div>
      {/* Section-5 */}
      <div className="flex flex-col items-center justify-center text-center py-8 px-6 bg-white gap-4">
        <h2 className="text-2xl md:text-4xl font-bold text-black">
          Let's build great things together!
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
          Fill out this form and one of our client success managers will contact
          you within 24 hours. We have notifications set to make sure your
          message is received.
        </p>
        <button className="mt-4 px-8 py-3 bg-black text-white rounded-md">
          Contact
        </button>
      </div>
    </div>
  );
}
