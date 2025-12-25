"use client";
import React, { useState, useEffect } from "react";

const MyCarousel = () => {
  const slides = [
    {
      img: "https://res.cloudinary.com/dq8p68g9f/image/upload/v1766692074/interna_progetto_5_v2_juk1gk.jpg",
    },
    {
      img: "https://res.cloudinary.com/dq8p68g9f/image/upload/v1766692074/Untitled-2_sk1ysr.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[200px] md:h-[500px] lg:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover ${
              index === 1 ? "object-[35%_center] md:object-center" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default MyCarousel;
