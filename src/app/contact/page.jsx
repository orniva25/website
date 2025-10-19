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
      {/* Responsive call section */}

      {/* Simple responsive contact line below the breadcrumb */}
      <div className="max-w-3xl mx-20">
        <p className="text-left md:text-left text-sm text-gray-600 dark:text-gray-300">
          Contact us for any Queries: <a href="tel:9820488831" className="text-indigo-600 hover:underline">+91 - 9820488831</a>
        </p>
      </div>

      <Contact />
    </>
  );
};

export default ContactPage;
