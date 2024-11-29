import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaClock, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdventureDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const adventure = data.find((camp) => camp.id === parseInt(id));

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize AOS for smooth animations
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 100 });
  }, []);

  // Function to check if current time is within the consultation hours
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 10 && hours < 20; // Between 10:00 AM - 8:00 PM
  };

  // Open Google Meet or show modal based on time
  const handleTalkWithExpert = () => {
    const isWithinConsultationHours = getCurrentTime();

    if (isWithinConsultationHours) {
      // Open Google Meet link in a new tab
      window.open("https://meet.google.com/", "_blank");
    } else {
      // Show consultation time modal
      setIsModalOpen(true);
    }
  };

  if (!adventure) {
    return (
      <div className="text-center text-red-600 mt-20">
        Adventure not found. Please check the link and try again.
      </div>
    );
  }

  const {
    adventureTitle,
    image,
    shortDescription,
    adventureCost,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = adventure;

  return (
    <div>
        <Navbar></Navbar>
        <main><div className="bg-gray-50 py-16 px-6 lg:px-12">
      <section className="max-w-screen-xl mx-auto">
        {/* Adventure Title and Image */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-16" data-aos="fade-up">
          <img
            src={image}
            alt={adventureTitle}
            className="w-full lg:w-1/2 h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{adventureTitle}</h1>
            <p className="text-lg text-gray-600 mb-6">{shortDescription}</p>
            <div>
              <p className="text-gray-800 font-semibold">
                Cost: <span className="text-green-600">${adventureCost}</span>
              </p>
              <p className="text-gray-800 font-semibold">Location: {location}</p>
              <p className="text-gray-800 font-semibold">Duration: {duration}</p>
              <p className="text-gray-800 font-semibold">Level: {adventureLevel}</p>
              <p className="text-gray-800 font-semibold">Max Group Size: {maxGroupSize}</p>
            </div>
          </div>
        </div>

        {/* Adventure Details Section */}
        <div className="mt-16">
          {/* Adventure Level */}
          <section
            data-aos="fade-left"
            className="mb-12 text-center flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              <FaUsers className="inline-block mr-2" />
              Adventure Level
            </h2>
            <p className="text-lg text-gray-600">{adventureLevel}</p>
          </section>

          {/* What's Included */}
          <section
            data-aos="fade-right"
            className="mb-12 text-center flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              <FaMapMarkerAlt className="inline-block mr-2" />
              What's Included
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {includedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Eco-friendly Features */}
          <section
            data-aos="fade-up"
            className="mb-12 text-center flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              <FaMapMarkerAlt className="inline-block mr-2" />
              Eco-friendly Features
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Special Instructions */}
          <section
            data-aos="fade-left"
            className="mb-12 text-center flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              <FaClock className="inline-block mr-2" />
              Special Instructions
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {specialInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Talk with Expert Button */}
        <div className="flex justify-center mt-12">
          <button
            className="btn btn-primary px-8 py-3 text-white rounded-full hover:bg-green-800 transition-all"
            onClick={handleTalkWithExpert}
          >
            Talk with Expert
          </button>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center mt-12">
          <button className="btn btn-primary px-8 py-3 text-white rounded-full hover:bg-green-800 transition-all">
            Book Now
          </button>
        </div>

        {/* Testimonials Section */}
        <section className="mt-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Guests Say</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Testimonial 1 */}
            <div className="w-80 p-6 bg-white rounded-lg shadow-md text-gray-800">
              <p className="text-lg mb-4">"An unforgettable experience! The adventure was perfectly organized, and the views were stunning. Highly recommended!"</p>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-600">Adventure Enthusiast</p>
            </div>
            {/* Testimonial 2 */}
            <div className="w-80 p-6 bg-white rounded-lg shadow-md text-gray-800">
              <p className="text-lg mb-4">"I loved every moment of the adventure. It was a perfect mix of relaxation and excitement. Will definitely come back!"</p>
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-600">Nature Lover</p>
            </div>
            {/* Testimonial 3 */}
            <div className="w-80 p-6 bg-white rounded-lg shadow-md text-gray-800">
              <p className="text-lg mb-4">"A unique experience surrounded by nature. I was able to disconnect and enjoy the peaceful environment. 10/10!"</p>
              <p className="font-semibold">Emily Brown</p>
              <p className="text-sm text-gray-600">Explorer</p>
            </div>
          </div>
        </section>
      </section>

      {/* Modal for Consultation Time */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Consultation Hours</h3>
            <p className="text-gray-600 mb-4">
              Our experts are available for consultations between 10:00 AM and 8:00 PM. Please reach out during these hours.
            </p>
            <button
              className="btn btn-secondary px-8 py-3 text-white rounded-full hover:bg-red-800 transition-all"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div></main>
        <Footer></Footer>
    </div>
  );
};

export default AdventureDetails;
