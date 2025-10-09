import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function RightSlider() {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      src: "/Image/UIUXDesign.png",
      alt: "Slide 1",
      link: "/blog-single",
      title: "Design",
      desc: "Designing an Effective Splash",
      desc1: "Screen: Best Practices, Tips and",
      desc2: "Examples",
      personImg: "public/Image/Singleblog-img.png",
      personName: "By Prime Leonard",
    },
    {
      id: 2,
      src: "/Image/Enjoyholiday.png",
      alt: "Slide 2",
      link: "/Enjoy-holiday",
      title: "Design",
      desc: "How To Design The Perfect Hero",
      desc1: "Screen: Best Practices, Tips and",
      desc2: "Examples",
      personImg: "/Image/Ellipse 183.png",
      personName: "By Prime Leonard",
    },
    {
      id: 3,
      src: "/Image/Slider-img.png",
      alt: "Slide 3",
      link: "/design-effect",
      title: "Design",
      desc: "Designing an Effective Splash",
      desc1: "Screen: Best Practices, Tips and",
      desc2: "Examples",
      personImg: "/Image/Ellipse 184.png",
      personName: "By Rasheed",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id} className="p-5">
          <Link to={slide.link} className="block">
            <div className="bg-gray-100 shadow-lg flex flex-col justify-between h-full rounded-lg overflow-hidden">
              {/* Slide Image */}
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-54 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm mb-2 underline">{slide.title}</h3>
                  <p className="text-black text-lg font-bold leading-relaxed mb-1">
                    {slide.desc}
                  </p>
                  <p className="text-black text-lg  font-bold leading-relaxed mb-1">
                    {slide.desc1}
                  </p>
                  <p className="text-black text-lg  font-bold leading-relaxed">
                    {slide.desc2}
                  </p>
                </div>

                {/* Person Image & Name */}
                {slide.personImg && (
                  <div className="flex items-center mt-2 pt-1">
                    <img
                      src={slide.personImg}
                      alt={slide.personName}
                      className="w-8 h-8 rounded-full mr-2 object-cover"
                    />
                    <span className="font-semibold">{slide.personName}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
