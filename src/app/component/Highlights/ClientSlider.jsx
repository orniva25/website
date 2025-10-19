'use client';

import React, { useRef } from 'react';

const ClientSlider = ({ children }) => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat" role="presentation" aria-hidden="true"></div>
      
      <button
        className="hidden md:flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white w-10 h-10 rounded-full z-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
        onClick={handlePrevClick}
        aria-label="Previous slide"
      >
        <span className="text-lg" aria-hidden="true">&#8592;</span>
      </button>

      <div
        ref={sliderRef}
        className="overflow-x-auto flex gap-6 pb-4 snap-x snap-mandatory scroll-smooth custom-scrollbar"
        role="region"
        aria-label="Client slider"
      >
        {children}
      </div>

      <button
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white w-10 h-10 rounded-full z-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
        onClick={handleNextClick}
        aria-label="Next slide"
      >
        <span className="text-lg" aria-hidden="true">&#8594;</span>
      </button>
    </div>
  );
};

export default ClientSlider;
