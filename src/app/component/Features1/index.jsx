import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-2 md:py-2 lg:py-2">
        <div className="container">
        <h2 className="text-3xl font-bold text-center my-8">Our Services</h2>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-y-12 md:gap-x-10 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-12"
          >
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
