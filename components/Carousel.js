"use client";
import React, { useState, useEffect } from "react";

const MyCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch("/api/banner");
        const data = await res.json();

        // Extract all images into one array
        const images = data?.flatMap(item => item.img) || [];
        setSlides(images);
      } catch (error) {
        console.error("Failed to load banners:", error);
      }
    };

    fetchBanners();
  }, []);

  // Auto slide
  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  if (!slides.length) return null;

  return (
    <div className="relative w-full h-[200px] md:h-[500px] lg:h-[500px] overflow-hidden">
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={img}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MyCarousel;
