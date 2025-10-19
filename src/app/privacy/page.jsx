import Breadcrumb from "../component/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata = {
  title: "Privacy Policy | Website Development and Digital Marketing Services",
  description: "Learn about how we collect, use, and protect your personal information when using our website and services.",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Read our privacy policy to understand how we collect and handle your information."
      />

      <section id="PrivacyPolicy" className="pt-2 mb-2">
        <div className="container mx-auto px-4">

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-lg text-gray-800 mb-6">
              This Privacy Policy outlines how we collect, use, and protect the information you provide us during your interaction with our website and services. By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">1. Information We Collect</h3>
              <p className="text-lg text-gray-700 mb-4">
                We collect different types of information to provide and improve our services to you:
              </p>
              <ul className="list-inside list-disc">
                <li><strong>1.1 Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and company details when you contact us or engage with our services.</li>
                <li><strong>1.2 Payment Information:</strong> For billing purposes, we may collect payment information like credit card details. All payment transactions are securely processed through third-party payment gateways, and we do not store your payment information.</li>
                <li><strong>1.3 Website Usage Information:</strong> We may gather non-personal information such as your IP address, browser type, and pages visited to improve the website and services.</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">2. How We Use Your Information</h3>
              <p className="text-lg text-gray-700 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-inside list-disc">
                <li><strong>2.1 Service Delivery:</strong> To provide, maintain, and improve our website development and digital marketing services.</li>
                <li><strong>2.2 Communication:</strong> To communicate with you regarding your inquiries, ongoing projects, or service updates.</li>
                <li><strong>2.3 Marketing:</strong> With your consent, we may send you promotional emails about new services, special offers, and other updates we think you may be interested in.</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">3. Information Sharing</h3>
              <p className="text-lg text-gray-700 mb-4">
                We may share your information with third parties in the following circumstances:
              </p>
              <ul className="list-inside list-disc">
                <li><strong>3.1 Third-Party Service Providers:</strong> We may share your information with trusted third-party service providers to assist in delivering our services.</li>
                <li><strong>3.2 Legal Compliance:</strong> We may disclose your information if required by law or in response to a valid legal request.</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">4. Data Security</h3>
              <p className="text-lg text-gray-700 mb-4">
                We take the security of your information seriously. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or destruction.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">5. Your Rights</h3>
              <p className="text-lg text-gray-700 mb-4">
                You have the right to access, update, or delete your personal information. If you wish to exercise any of these rights or have concerns about your data, please contact us at [Your Contact Information].
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">6. Cookies</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our website uses cookies to enhance your experience. You can choose to accept or decline cookies through your browser settings.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">7. Changes to the Privacy Policy</h3>
              <p className="text-lg text-gray-700 mb-4">
                We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">8. Contact Us</h3>
              <p className="text-lg text-gray-700 mb-4">
                If you have any questions or concerns about this Privacy Policy, please feel free to contact us at [Your Contact Information].
              </p>
            </div>

            <p className="text-lg text-gray-800 mt-6">
              By using our website and services, you agree to the terms outlined in this Privacy Policy. Thank you for trusting us with your information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
