import React from 'react';
import Navbar from './Navbar';

import SliderSection from './SliderSection';
import CardsSection from './CardsSection';
import CustomerTestimonials from './CustomerTestimonials';
import WhyChooseUs from './WhyChooseUs';
import Footer from './Footer';
import Swiper from './Swiper';

const Home = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <section className="mb-12"> {/* Add margin-bottom to space out the slider */}
                <SliderSection />
                {/* <Swiper></Swiper> */}
            </section>
         <main>
            <CardsSection></CardsSection>
            <CustomerTestimonials></CustomerTestimonials>
            <WhyChooseUs></WhyChooseUs>
         </main>
         <footer>
            <Footer></Footer>
         </footer>
        </div>
    );
};

export default Home;