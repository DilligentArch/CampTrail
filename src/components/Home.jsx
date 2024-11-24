import React from 'react';
import Navbar from './Navbar';

import SliderSection from './SliderSection';
import CardsSection from './CardsSection';
import CustomerTestimonials from './CustomerTestimonials';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <section className="mb-12"> {/* Add margin-bottom to space out the slider */}
                <SliderSection />
            </section>
         <main>
            <CardsSection></CardsSection>
            <CustomerTestimonials></CustomerTestimonials>
            <WhyChooseUs></WhyChooseUs>
         </main>
        </div>
    );
};

export default Home;