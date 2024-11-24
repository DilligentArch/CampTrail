import React from 'react';

const Card = ({ data }) => {
    console.log(data);
    const {image,adventureTitle,shortDescription,adventureCost,bookingAvailability}=data;
    return (
        <div className="card card-compact bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <figure>
                <img
                    src={image} 
                    alt={adventureTitle} 
                    className="w-full h-60 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-green-600">{adventureTitle}</h2>
                <p className="text-gray-600">
                    {shortDescription}
                </p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-green-700">${adventureCost}</span>
                    <button
                        className={`btn ${bookingAvailability ? 'btn-primary' : 'btn-disabled'}`}
                        disabled={!bookingAvailability}
                    >
                        {bookingAvailability ? "Book Now" : "Fully Booked"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
