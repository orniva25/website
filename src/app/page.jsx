import Hero from "./component/Hero/index";
import FAQ from "./component/FAQ/index";
import Testimonial from "./component/Testimonials/index";
import ServicesSection from "./component/Services/index";
import WhiteLabel from "./component/WhiteLabel/index";
import Pricing from "./component/Pricing/index";
import AboutSectionOne from "./component/About/AboutSectionOne";
import ScrollUp from "./component/Common/ScrollUp";
import Features from "./component/Features1";
import GoogleAd from "./component/Common/GoogleAd";
export const metadata = {
  title: "orniva for Startup and SaaS",
  description: "This is Home for orniva Website",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <div className="container mx-auto">
        <GoogleAd slot="9144121565" /> 
      </div> */}
      <AboutSectionOne />
      <Features />
      <ServicesSection />
      <WhiteLabel />
      <Testimonial />
      <FAQ />
    </>
  );
}
