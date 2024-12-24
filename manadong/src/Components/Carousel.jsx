import React, { useState, useEffect } from "react";
import Review from "./Review";

function Carousel() {
  const reviews = [
    {
      title: "Jennifer",
      description:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      title: "A*******a",
      description: "Cakalangnya terbaikkkkkkkk, the best cakalang everrrr",
    },
    {
      title: "Nadia",
      description:
        "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab",
    },
    {
      title: "A*******a",
      description: "Cakalangnya terbaikkkkkkkk, the best cakalang everrrr",
    },
    {
      title: "Jennifer",
      description:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      title: "Nadia",
      description:
        "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab",
    },
    {
      title: "Nadia",
      description:
        "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab",
    },
    {
      title: "Jennifer",
      description:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      title: "A*******a",
      description: "Cakalangnya terbaikkkkkkkk, the best cakalang everrrr",
    },
    {
      title: "Jennifer",
      description:
        "Such a good value for your money. Really good Manadonese food. Well recommended!",
    },
    {
      title: "Nadia",
      description:
        "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab",
    },
    {
      title: "A*******a",
      description: "Cakalangnya terbaikkkkkkkk, the best cakalang everrrr",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [totalSlides]);

  const currentItems = reviews.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className="relative w-full">
      <div className="flex relative h-auto overflow-hidden rounded-lg items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 gap-8 items-center mt-6">
          {currentItems.map((review, index) => (
            <Review
              key={index}
              title={review.title}
              description={review.description}
            />
          ))}
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-0 left-1/2 space-x-3 rtl:space-x-reverse">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-[#00548C]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button> */}
    </div>
  );
}

export default Carousel;
