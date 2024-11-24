import React from "react";
import { FaUserAlt, FaUserTie } from "react-icons/fa"; // Importing profile icons

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fatema Begum",
      icon: <FaUserAlt className="text-pink-500 text-3xl" />, // Female profile icon
      review:
        "The Bandarban Hills Camping Retreat was amazing! The guides were great, and the views were stunning.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahim Uddin",
      icon: <FaUserTie className="text-blue-500 text-3xl" />, // Male profile icon
      review:
        "I loved the eco-friendly initiatives and the peaceful campsite atmosphere. Highly recommended!",
      rating: 4,
    },
    {
      id: 3,
      name: "Shafiq Ahmed",
      icon: <FaUserTie className="text-blue-500 text-3xl" />, // Male profile icon
      review:
        "Camping by the serene lake and stargazing was magical. I’ll definitely book again!",
      rating: 5,
    },
  ];

  return (
    <div className="my-12 px-6 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Adventurers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
            <div className="flex items-center ">
              <div className="avatar flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full">
                {testimonial.icon} {/* Render dynamic React Icon */}
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold">{testimonial.name}</p>
                <p className="text-yellow-500 text-xs">
                  {"⭐".repeat(testimonial.rating)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
