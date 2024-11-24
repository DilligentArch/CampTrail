import React from "react";
import { FaLeaf, FaHiking, FaCampground } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaLeaf className="text-green-600 text-4xl" />,
      title: "Eco-Friendly Camping",
      description:
        "We focus on sustainability with eco-friendly practices like solar energy and waste management.",
    },
    {
      id: 2,
      icon: <FaHiking className="text-green-600 text-4xl" />,
      title: "Expert Guides",
      description:
        "Our experienced guides ensure a safe and enjoyable adventure for everyone.",
    },
    {
      id: 3,
      icon: <FaCampground className="text-green-600 text-4xl" />,
      title: "Scenic Locations",
      description:
        "Discover the most beautiful and serene camping spots in Bangladesh.",
    },
  ];

  return (
    <div className="my-12 px-6 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-center text-green-700">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
