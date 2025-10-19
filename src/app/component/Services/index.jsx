"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
const services = [
  {
    title: "Website Creation",
    details: [
      "Premium Website Design",
      "Graphic Design",
      "Payment Gateway Integration",
      "And Much More...",
    ],
    button1: "Contact Us",
    url:"/pricing",
    button2: "Know More",
  },
  {
    title: "Website Redesign",
    details: [
      "Website Rebranding",
      "Banner Redesign",
      "CRO Implementation",
      "And Much More...",
    ],
    button1: "Contact Us",
    url:"/pricing",
    button2: "Know More",
  },
  {
    title: "Website Audit",
    details: [
      "Website Rebranding",
      "Banner Redesign",
      "CRO Implementation",
      "And Much More...",
    ],
    button1: "Contact Now",
    url:"/pricing",
    button2: "Know More",
  },
];

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  // Trigger staggered animation for each card one by one
  useEffect(() => {
    const delays = [500, 1000, 1500]; // Delay in ms for each card
    const timeouts = [];

    services.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleCards((prevState) => {
          const newState = [...prevState];
          newState[index] = true; // Set each card's visibility one by one
          return newState;
        });
      }, delays[index]);

      timeouts.push(timeout);
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout)); // Cleanup timeouts
  }, []);

  return (
    <section className="services-section p-5 md:p-20 bg-yellow-400">
      <h2 className="text-3xl font-bold text-center mb-8">WEBSITE DESIGNING</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card border-4 border-black shadow-lg flex-1 transform transition-all duration-700 ease-in-out ${
              visibleCards[index]
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } w-full md:w-1/3`} // Adjust width for mobile and desktop
          >
            {/* Title section with black background and white text */}
            <h3 className="text-xl font-semibold text-white bg-black text-center p-4 mb-6">
              {service.title}
            </h3>

            {/* Inner section with black text */}
            <ul className="mb-6 text-black px-6">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-center space-x-2 mb-2">
                  <span>✔</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {/* Button section */}
            <div className="flex gap-4 justify-center mb-4">
              {service.button2 && (
                 <Link href={service.url}>
                <button className="bg-primary text-white py-2 px-4 rounded-lg font-bold" >
                  {service.button2}
                </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
