import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 }); 
  }, []);

  const { image, adventureTitle, shortDescription, adventureCost, bookingAvailability,id } = data;

  return (
    <div
      className="card card-compact bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300  max-w-screen-2xl mx-auto"
      data-aos="fade-up" 
    >
      <figure>
        <img
          src={image}
          alt={adventureTitle}
          className="w-full h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-green-600">{adventureTitle}</h2>
        <p className="text-gray-600">{shortDescription}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-green-700">${adventureCost}</span>
          <Link to={`/adventure-details/${id}`} 
            className={`btn ${bookingAvailability ? "btn-primary" : "btn-disabled"}`}
            disabled={!bookingAvailability}
          >
            {bookingAvailability ? "Book Now" : "Fully Booked"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
