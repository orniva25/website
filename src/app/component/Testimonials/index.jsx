'use client';
import React, { useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonials = [
  {
    id: 1,
    name: "Rohan Kapoor",
    designation: "Founder @justpasteit",
    content:
      "The intuitive design and smooth functionality of our website have boosted traffic and client engagement remarkably.",
    image: "/images/testimonials/justpasteit.png",
    star: 5,
  },
  {
    id: 2,
    name: "Aisha Patel",
    designation: "Founder @amazon.affiliate",
    content:
      "Your expertise has made our platform faster and user-friendly, playing a vital role in our online growth and success.",
    image: "/images/testimonials/amazon-affiliate.png",
    star: 5,
  },
  {
    id: 3,
    name: "Rashi Jain",
    designation: "Founder @handmadecraftsbyrashi",
    content:
      "Our eCommerce site, with its flawless payment system, has successfully turned leads into sales and customer growth",
    image: "/images/testimonials/rashijain.png",
    star: 5,
  },
  {
    id: 4,
    name: "Rishin Singh",
    designation: "Founder @tecnopack",
    content:
      "The sleek and modern website design has earned excellent feedback, showcasing your team's expertise.",
    image: "/images/testimonials/tecnopack.png",
    star: 4,
  },
];




const Testimonials = () => {
  const sliderRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
      setIsActive(true);
      setTimeout(() => setIsActive(false), 200);
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
      setIsActive(true);
      setTimeout(() => setIsActive(false), 200);
    }
  };

  return (
    <section className="relative z-10 py-4 md:py-4 lg:py-4 bg-gray-light dark:bg-bg-color-dark overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        
        <div className="relative group max-w-5xl mx-auto">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 snap-x snap-mandatory scroll-smooth pb-4"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 sm:w-1/2 md:w-1/2 p-4"
              >
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <button
              className={`text-white w-10 h-10 rounded-full ${
                isActive ? "bg-blue-800" : "bg-gray-300"
              } opacity-70 hover:opacity-100 transition-opacity duration-300`}
              onClick={handlePrevClick}
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className={`text-white w-10 h-10 rounded-full ${
                isActive ? "bg-blue-800" : "bg-gray-300"
              } opacity-70 hover:opacity-100 transition-opacity duration-300`}
              onClick={handleNextClick}
               aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
