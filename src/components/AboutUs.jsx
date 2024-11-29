import React from "react";
import { FaUserTie, FaUserCog, FaChartLine } from "react-icons/fa"; // Replaced FaUserChart with FaChartLine
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Discover who we are and why we’re passionate about bringing unique experiences to you.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At CampTrail, our mission is to create unforgettable outdoor experiences while promoting 
            sustainability and fostering a love for nature. We aim to connect people with the beauty 
            of the outdoors and inspire them to explore the world around them.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaUserTie className="text-green-700 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            {/* Team Member */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaUserCog className="text-green-700 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            {/* Team Member */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaChartLine className="text-green-700 text-6xl mx-auto mb-4" /> {/* Updated icon */}
              <h3 className="text-xl font-semibold text-gray-800">Emily Brown</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Whether you're an outdoor enthusiast, a casual camper, or just curious about 
            exploring the beauty of nature, we're here to help you make it unforgettable. 
            Get in touch and let’s create memories together!
          </p>
          <Link to={'/contact'} className="btn btn-outline btn-white rounded-full">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
