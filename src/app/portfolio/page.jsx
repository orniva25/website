import AboutSectionOne from "../component/About/AboutSectionOne";
import AboutSectionTwo from "../component/About/AboutSectionTwo";
import Breadcrumb from "../component/Common/Breadcrumb";
import Portfolio from "../component/Portfolio/index";
import ClientHighlights from "../component/Highlights/index";
import { Metadata } from "next";

export const metadata = {
  title: "About Page | Website Development Company",
  description: "This is About Page for Website Development",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="We are a One-Stop Solution for delivering the best web design services."
      />
      <Portfolio />
      <ClientHighlights />
    </>
  );
};

export default AboutPage;
