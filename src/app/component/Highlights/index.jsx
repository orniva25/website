// components/ClientHighlights.js (Server-side)
import dynamic from "next/dynamic";
import React from "react";
import "./ClientHighlights.css";

// Dynamically import the ClientSlider to run only on the client side
const ClientSlider = dynamic(() => import("./ClientSlider"), { ssr: false });

const ClientHighlights = () => {
  const clients = [
    {
      id: 1,
      name: "JPI Performance",
      imageUrl: "/images/highlights/jpi.png",
      description: `Performance improved within 30 days with a 25% rise in search visibility and enhanced conversion rates 
        leveraging data-driven marketing strategies.`,
    },
    {
      id: 2,
      name: "Jainame Enterprises Analytics",
      imageUrl: "/images/highlights/jainame.png",
      description: `Achieved a 40% increase in organic traffic in just 1 week through targeted SEO strategies. Real-time analytics 
        dashboard for user engagement and demographic insights.`,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          CLIENT HIGHLIGHTS
        </h2>

        {/* Use the dynamically loaded ClientSlider component */}
        <ClientSlider>
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col md:flex-row min-w-full md:min-w-[80%] max-w-xl bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 snap-start"
            >
              <img
                src={client.imageUrl}
                alt={client.name}
                className="w-full md:w-1/2 h-64 object-contain rounded-t-lg md:rounded-l-lg"
              />
              <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-semibold">{client.name}</h3>
                <p className="mt-4 text-gray-600">{client.description}</p>
              </div>
            </div>
          ))}
        </ClientSlider>
      </div>
    </section>
  );
};

export default ClientHighlights;
