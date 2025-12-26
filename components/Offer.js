"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function OfferHeadline() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await fetch("/api/txt");
        const data = await res.json();
        setTexts(data);
      } catch (error) {
        console.error("Failed to fetch offer headlines:", error);
      }
    };

    fetchTexts();
  }, []);

  // Don't render if no data
  if (!texts.length) return null;

  return (
    <div
      style={{
        backgroundColor: "#0d5176",
        color: "#fff",
        fontSize: "14px",
        padding: "5px 0",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 99999999,
      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {texts.map((item) => (
          <SwiperSlide key={item._id}>
            <div style={{ textAlign: "center", color: "#fff" }}>
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
