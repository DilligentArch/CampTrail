import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";

const AdventureDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const adventure = data.find((camp) => camp.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, offset: 100 });
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 10 && hours < 20;
  };

  const handleTalkWithExpert = () => {
    const isWithinConsultationHours = getCurrentTime();
    if (isWithinConsultationHours) {
      window.open("https://meet.google.com/", "_blank");
      toast.success("You are now in a consultation session!");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleBookNow = () => {
    toast.success("Booking confirmed! You’ve successfully booked your adventure.");
    setIsButtonDisabled(true);
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
      <Toaster />
      <Navbar />
      <main>
        <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto">
          <section className="max-w-screen-xl mx-auto">
            {/* Adventure Details */}
            <div className="flex flex-col md:flex-row items-center md:gap-8" data-aos="fade-up">
              <img
                src={image}
                alt={adventureTitle}
                className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{adventureTitle}</h1>
                <p className="text-sm md:text-lg text-gray-600 mb-6">{shortDescription}</p>
                <div className="space-y-2">
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

            {/* Sections */}
            <div className="mt-12">
              <Section title="Adventure Level" icon={<FaUsers />}>
                {adventureLevel}
              </Section>

              <Section title="What's Included" icon={<FaMapMarkerAlt />}>
                <ul className="list-none pl-4 space-y-1 text-gray-600">
                  {includedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Eco-friendly Features" icon={<FaMapMarkerAlt />}>
                <ul className="list-none pl-4 space-y-1 text-gray-600">
                  {ecoFriendlyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Special Instructions" icon={<FaClock />}>
                <ul className="list-none pl-4 space-y-1 text-gray-600">
                  {specialInstructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </Section>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button
                className="btn btn-primary px-6 py-2 text-white rounded-full hover:bg-green-800 transition-all"
                onClick={handleTalkWithExpert}
              >
                Talk with Expert
              </button>
              <button
                className="btn btn-primary px-6 py-2 text-white rounded-full hover:bg-green-800 transition-all"
                onClick={handleBookNow}
                disabled={isButtonDisabled}
              >
                {isButtonDisabled ? "Booked" : "Book Now"}
              </button>
            </div>

            {/* Testimonials */}
            <section className="mt-16 text-center" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">What Our Guests Say</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Testimonial
                  text="An unforgettable experience! The adventure was perfectly organized, and the views were stunning. Highly recommended!"
                  author="John Doe"
                  role="Adventure Enthusiast"
                />
                <Testimonial
                  text="I loved every moment of the adventure. It was a perfect mix of relaxation and excitement. Will definitely come back!"
                  author="Jane Smith"
                  role="Nature Lover"
                />
                <Testimonial
                  text="A unique experience surrounded by nature. I was able to disconnect and enjoy the peaceful environment. 10/10!"
                  author="Emily Brown"
                  role="Explorer"
                />
              </div>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Section Component
const Section = ({ title, icon, children }) => (
  <section className="mb-12 text-center" data-aos="fade-up">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
      {icon}
      {title}
    </h2>
    <div>{children}</div>
  </section>
);

// Testimonial Component
const Testimonial = ({ text, author, role }) => (
  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-gray-800">
    <p className="text-sm md:text-lg mb-4">{`"${text}"`}</p>
    <p className="font-semibold">{author}</p>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

export default AdventureDetails;
