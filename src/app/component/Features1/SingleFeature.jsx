import Link from 'next/link';

const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph, href } = feature; // Assuming `href` contains the target URL
  return (
    <div className="w-full">
      <Link href={href} className="block w-full">
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md wow fadeInUp" data-wow-delay=".15s">
            <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              {icon}
            </div>
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
          </div>
      </Link>
    </div>
  );
};

export default SingleFeature;
