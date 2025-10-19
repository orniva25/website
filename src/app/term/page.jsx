import Breadcrumb from "../component/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata = {
  title: "Terms of Use | Website Development & Digital Marketing",
  description:
    "Read our Terms of Use to understand the rules and conditions for using our website development and digital marketing services.",
};

const TermsOfUsePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Use"
        description="Understand the terms and conditions for using our website development and digital marketing services"
      />

      <section id="TermsOfUse" className="pt-2 mb-2">
        <div className="container mx-auto px-4">
          
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-lg text-gray-800 mb-6">
              By engaging our website development and digital marketing
              services, you agree to comply with and be bound by the terms and
              conditions outlined below. If you have any questions or concerns,
              please contact us.
            </p>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                1. Services Provided
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                We provide comprehensive website development and digital
                marketing services, including custom website design, eCommerce
                solutions, end-to-end payment integration, and marketing
                strategies tailored to your business needs. Details of the
                project scope, deliverables, and timelines will be outlined in
                the proposal or contract.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                2. Client Responsibilities
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Clients are responsible for providing all necessary materials,
                content, and access required to execute the project. Delays in
                providing this information may impact project timelines and
                completion dates.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                3. Payment Terms
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                An initial payment of 80% is required before the project
                commences. The remaining 20% is due upon final delivery and
                approval of the project. Additional requests outside the agreed
                deliverables may incur extra charges.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                4. Revisions and Additional Requests
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                The project includes a predefined number of revisions. Any
                additional revisions or service requests beyond the agreed
                deliverables may result in additional charges and extended
                timelines.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                5. Ownership and Intellectual Property
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Upon full payment, clients own the rights to the final website
                design and materials. We retain the right to showcase the
                project in our portfolio or promotional channels unless agreed
                otherwise in writing.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                6. Cancellation and Refunds
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                If a project is canceled after initiation, the initial payment
                is non-refundable. We retain ownership of all work completed up
                to the point of cancellation.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                7. Timeline and Delays
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                We strive to meet all agreed timelines. Delays caused by the
                client, such as untimely submission of required materials, may
                lead to extended project deadlines and additional costs.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                8. Limitation of Liability
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                We are not liable for any damages, losses, or costs arising from
                the use of the website or services provided. The client assumes
                full responsibility for the website's use and performance.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">
                9. Changes to Terms
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                We reserve the right to modify these terms at any time without
                prior notice. It is the client's responsibility to review these
                terms periodically for updates.
              </p>
            </div>

            <p className="text-lg text-gray-800 mt-6">
              For any questions regarding these terms, please contact us. We
              are here to help ensure your experience is seamless and
              satisfactory.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUsePage;
