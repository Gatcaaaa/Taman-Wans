import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HeroSection16() {
  const slides = [
    {
      src: "https://awsimages.detik.net.id/community/media/visual/2017/12/06/6414c1ae-fcd1-49a6-8316-4a71c29f93ff_43.jpg?w=600&q=90",
      title: "Taman Wanasutan Asri",
      description:
        "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.",
    },
    {
      src: "https://warbis.id/assets/images/product/1626693084.png",
      title: "Flora dan Fauna",
      description:
        "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.",
      link: "/flora-fauna",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      title: "Arsip",
      description:
        "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.",
      link: "/about",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden rounded-xl pt-14">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === activeIndex ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform:
              index === activeIndex
                ? "translateX(0)"
                : index < activeIndex
                ? "translateX(-100%)"
                : "translateX(100%)",
          }}
        >
          <img
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                {slide.title}
              </h1>
              <p className="mb-12 text-white opacity-80">{slide.description}</p>
              {slide.link && (
                <Link to={slide.link}>
                  <button className="px-4 py-2 text-lg bg-white text-black rounded-lg">
                    Explore
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute top-2/4 left-4 -translate-y-2/4 text-white bg-black/50 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-2/4 right-4 -translate-y-2/4 text-white bg-black/50 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection16;
