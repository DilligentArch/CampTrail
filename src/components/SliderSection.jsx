import React from 'react';
import Slider from './Slider';
import Swiper from './Swiper';

const SliderSection = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="hero bg-base-200 py-10">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1
                            className="text-5xl font-bold text-brown-700 animate__animated animate__fadeIn"
                        >
                            Welcome to <span className="text-green-500">CampTrail</span>
                        </h1>
                        <p className="py-6 text-gray-600 text-lg animate__animated animate__fadeIn animate__delay-1s">
                            Your Adventure Starts Here!
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="animate__animated animate__fadeIn animate__delay-1s">
                <Swiper />
            </div>
        </div>
    );
};

export default SliderSection;
