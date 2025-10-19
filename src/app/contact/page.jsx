import Breadcrumb from "../component/Common/Breadcrumb";
import Contact from "../component/Contact";

import { Metadata } from "next";

export const metadata = {
  title: "Contact Page | Expert Web & App Development and Digital Marketing",
  description: "Get in touch with us for top-notch web and app development solutions, as well as effective digital marketing strategies. We're here to help your business grow and succeed.",
  keywords: "web development, app development, digital marketing, contact us, startup solutions, SaaS",
  author: "orniva",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Don't hesitate to reach out. You can contact us at info@orniva.com"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
