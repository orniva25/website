import AboutSectionOne from "../component/About/AboutSectionOne";
import AboutSectionTwo from "../component/About/AboutSectionTwo";
import Breadcrumb from "../component/Common/Breadcrumb";
import Pricing from "../component/Pricing/index";
import Features from "../component/Features/index";
import { Metadata } from "next";

export const metadata = {
  title: "About Page | Website Development Company",
  description: "This is About Page for Website Development",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Packages"
        description="We are a One-Stop Solution for delivering the best web design and development services. We offer affordable web design facilities to suit your requirements"
      />
      <Pricing />
    </>
  );
};

export default ServicesPage;
