"use client";
import { useState } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isUSD, setIsUSD] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-4 md:py-2 lg:py-2">
      <div className="container">
        {/* Header Section */}
        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16 space-x-6">
            <span
              onClick={() => setIsUSD(true)}
              className={`${
                isUSD ? "pointer-events-none text-primary" : "text-dark dark:text-white"
              } cursor-pointer text-lg font-semibold px-4 py-2`}
            >
              USD
            </span>
            <div
              onClick={() => setIsUSD(!isUSD)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isUSD ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsUSD(false)}
              className={`${
                isUSD ? "text-dark dark:text-white" : "pointer-events-none text-primary"
              } cursor-pointer text-lg font-semibold px-4 py-2`}
            >
              INR
            </span>
          </div>
        </div>

        {/* Pricing Boxes */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Basic"
            price={isUSD ? "238" : "20,000"}
            currency={isUSD ? "USD" : "INR"}
            subtitle="Perfect for personal or small business websites"
          >
            <OfferList text="1 Year Web Hosting" status="active" />
            <OfferList text="1 Year Domain" status="active" />
            <OfferList text="Basic Logo Design" status="active" />
            <OfferList text="10 Page Website" status="active" />
            <OfferList text="10 Edited Images" status="active" />
            <OfferList text="Social Media Integration" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Ecommerce"
            price={isUSD ? "475" : "40,000"}
            currency={isUSD ? "USD" : "INR"}
            subtitle="For businesses wanting to sell products online."
          >
         <OfferList text="Everything in Basic Plan" status="active" />
            <OfferList text="Up to 25 Products" status="active" />
            <OfferList text="Payment Gateway Integration" status="active" />
            <OfferList text="Shipping Setup" status="active" />
            <OfferList text="Monthly Backup" status="active" />
            <OfferList text="Meta Ad Setup" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Custom"
            price={isUSD ? "-" : "-"}
            currency={isUSD ? "" : ""}
            subtitle="Solutions for your specific business needs."
          >
            <OfferList text="Cloud Setup (AWS, Azure, GCP)" status="active" />
            <OfferList text="Node.js, React.js, Next.js Projects" status="active" />
            <OfferList text="Any Project Customization" status="active" />
            <OfferList text="Mobile App Development" status="active" />
            <OfferList text="End-to-End Project Development" status="active" />
            <OfferList text="Hire a Freelancer" status="active" />
          </PricingBox>
        </div>
      </div>

      {/* Background SVG Decoration */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg width="239" height="601" viewBox="0 0 239 601" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.3" x="-184.451" y="600.973" width="196" height="541.607" rx="2" transform="rotate(-128.7 -184.451 600.973)" fill="url(#paint0_linear_93:235)" />
          <rect opacity="0.3" x="-188.201" y="385.272" width="59.7544" height="541.607" rx="2" transform="rotate(-128.7 -188.201 385.272)" fill="url(#paint1_linear_93:235)" />
          <defs>
            <linearGradient id="paint0_linear_93:235" x1="-90.1184" y1="420.414" x2="-90.1184" y2="1131.65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_93:235" x1="-159.441" y1="204.714" x2="-159.441" y2="915.952" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
