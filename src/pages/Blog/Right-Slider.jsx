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
  };

  // Slides with content
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
    },
    {
      id: 2,
      src: "/Image/Enjoyholiday.png",
      alt: "Slide 2",
      link: "/Enjoy-holiday",
      title: "Design",
      desc: "Designing an Effective Splash",
      desc1: "Screen: Best Practices, Tips and",
      desc2: "Examples",
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
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id} className="p-3">
          <Link to={slide.link} className="block">
            <div className="bg-white shadow-lg">
              {/* Image */}
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-1">{slide.title}</h3>

                {/* Multi-line descriptions */}
                {slide.desc && (
                  <p className="text-sm text-gray-600">{slide.desc}</p>
                )}
                {slide.desc1 && (
                  <p className="text-sm text-gray-600">{slide.desc1}</p>
                )}
                {slide.desc2 && (
                  <p className="text-sm text-gray-600">{slide.desc2}</p>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
