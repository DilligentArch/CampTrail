import React from 'react';
import Navbar from './Navbar';

import SliderSection from './SliderSection';
import CardsSection from './CardsSection';
import CustomerTestimonials from './CustomerTestimonials';
import WhyChooseUs from './WhyChooseUs';
import Footer from './Footer';
import Swiper from './Swiper';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div className=' max-w-screen-2xl mx-auto'>
             <Toaster />
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
         <footer>
            <Footer></Footer>
         </footer>
        </div>
    );
};

export default Home;