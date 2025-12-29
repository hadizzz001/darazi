"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ReviewsSwiper = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/review");
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p className="text-center my-20">Loading reviews...</p>;
  }

  return (
    <div className="w-full px-4 my-16">
      <h1 className="uppercase text-center my-6 px-4 myGrayCat1 mt-20 mb-10">
        WHAT OUR CUSTOMERS SAY
      </h1>

      <Swiper
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
        className="rounded-xl"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review._id}
            className="bg-white p-6 rounded-xl text-center"
          >
            {/* Avatar (fallback image) */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt={review.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />

            {/* Stars image (static or dynamic) */}
            <img
              src="https://res.cloudinary.com/dnucihygt/image/upload/v1761851497/homepage_testimonial_rating_image_01_epng2v.svg"
              alt={`${review.stars} stars`}
              className="w-32 mx-auto mb-3"
            />

            {/* Review text */}
            <p className="myGrayR line-clamp-3 text-[15px] leading-relaxed">
              {review.description}
            </p>

            {/* Name */}
            <h3 className="myGrayR1 font-semibold mt-2">
              {review.name}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSwiper;
