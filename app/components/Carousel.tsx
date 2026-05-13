import { useState, useEffect } from "react";
import img1 from "../assets/carousel/11.jpg";
import img3 from "../assets/carousel/22.jpg";
import img5 from "../assets/carousel/122.jpg";
import img6 from "../assets/carousel/444.png";
import img7 from "../assets/carousel/5.jpg";

const carouselData = [
  {
    id: 1,
    title: "Computer & Laptop Screen Repair ",
    subtitle: "Professional screen replacement for all major brands with high-quality parts and quick turnaround time",
    buttonText: "Book a Repair",
    buttonLink: "/repair-online-booking/phone_and_tablet/",
    backgroundImage: img1,
    buttonColor: null,
  },
  {
    id: 2,
    title: "Phone Repair",
    subtitle: "Fast and reliable repair services for iPhone, Samsung, and all major smartphone brands",
    buttonText: "Book a Repair",
    buttonLink: "/repair-online-booking/phone_and_tablet/",
    backgroundImage: img3,
    buttonColor: null,
  },
  {
    id: 3,
    title: "Tablet Repair",
    subtitle: "Expert repair services for tablets to get you back to using your device in no time",
    buttonText: "Book a Repair",
    buttonLink: "/contact",
    backgroundImage: img5,
    buttonColor: null,
  },
  {
    id: 4,
    title: "PS5 & Nintendo Switch Repair",
    subtitle: "Expert repair services for your gaming consoles to get you back to playing in no time",
    buttonText: "Book a Repair",
    buttonLink: "/contact",
    backgroundImage: img6,
    buttonColor: null,
  },
  {
    id: 5,
    title: "Custom & Fancy PC Builds",
    subtitle: "Premium custom PC builds with stunning aesthetics and top-of-the-line components for gaming and content creation",
    buttonText: "Get a Quot",
    buttonLink: "/contact",
    backgroundImage: img7,
    buttonColor: null,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = carouselData[currentIndex];

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const getButtonStyle = (color) => {
    if (!color) return {};
    return {
      backgroundColor: color,
      boxShadow:
        "0 2px 2px 0 rgba(129,215,66,0.14), 0 3px 1px -2px rgba(129,215,66,0.2), 0 1px 5px 0 rgba(129,215,66,0.12)",
    };
  };

  return (
    <div
      className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${currentSlide.backgroundImage})`,
      }}
    >
      <div className="absolute inset-0  bg-gradient-to-r  from-black via-black/80 to-blue-900/20" />
      <div className="flex items-center justify-center h-[90vh]">
        <div className="relative w-[1000px]">
          <div className="max-w-[1000px] block mx-auto px-4">
            {currentSlide.title && (
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-0 drop-shadow-lg">
                {currentSlide.title}
              </h1> 
            )}

            {currentSlide.subtitle && (
              <p
                className="text-xl md:text-2xl text-white/60 mb-6 drop-shadow-md whitespace-pre-line pt-6"
                dangerouslySetInnerHTML={{ __html: currentSlide.subtitle }}
              />
            )}

            {currentSlide.buttonText && (
              <div className="flex  gap-8 pt-6">
                <a
                  href={currentSlide.buttonLink}
                  title={currentSlide.buttonText}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105 border border-blue-500/30"
                  style={getButtonStyle(currentSlide.buttonColor)}
                >
                  {currentSlide.buttonText}
                </a>
                {currentSlide.buttonText2 && (
                  <a
                    href={currentSlide.buttonLink2}
                    title={currentSlide.buttonText2}
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105 border border-blue-500/30"
                    style={getButtonStyle(currentSlide.buttonColor)}
                  >
                    {currentSlide.buttonText2}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-blue-600/20 backdrop-blur-sm text-white rounded-full hover:bg-blue-600/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 border border-blue-500/30 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-blue-600/20 backdrop-blur-sm text-white rounded-full hover:bg-blue-600/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 border border-blue-500/30 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-38 left-1/2 -translate-x-1/2 flex space-x-4 opacity-60">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-[#155dfc] scale-125 w-12 h-3 "
                : "bg-white/50 hover:bg-white/75 w-3 h-3 "
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
