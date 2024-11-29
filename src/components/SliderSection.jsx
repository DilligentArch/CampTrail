import React from 'react';
import Slider from './Slider';
import Swiper from './Swiper';

const SliderSection = () => {
    return (
        <div className=' max-w-screen-2xl mx-auto'>
             <div class="hero bg-base-200 py-10">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold text-brown-700">
                                Welcome to <span class="text-green-500">CampTrail</span>
                            </h1>
                            <p class="py-6 text-gray-600 text-lg">
                                Your Adventure Starts Here!
                            </p>
                        </div>
                    </div>
                </div>
              <Swiper></Swiper>
            
        </div>
    );
};

export default SliderSection;