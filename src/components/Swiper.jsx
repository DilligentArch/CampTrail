import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import { Autoplay } from 'swiper/modules'; // Import Swiper autoplay module

export default () => {
  return (
    <Swiper
      spaceBetween={0} // Remove the gap between slides
      slidesPerView={3} // Default slides per view (on larger screens)
      breakpoints={{
        320: { // For screens with width >= 320px (mobile)
          slidesPerView: 1, // Show 1 slide on mobile
          spaceBetween: 10, // Optional: Adjust the space between slides for mobile
        },
        768: { // For screens with width >= 768px (tablet and larger)
          slidesPerView: 2, // Show 2 slides on tablets
        },
        1024: { // For screens with width >= 1024px (desktop)
          slidesPerView: 3, // Show 3 slides on desktop
        },
      }}
      modules={[Autoplay]} // Include the autoplay module
      autoplay={{
        delay: 3000, // Delay between transitions (in ms)
        disableOnInteraction: false, // Keep autoplay active on user interaction
      }}
      loop={true} // Enable infinite loop
    >
      <SwiperSlide><img className='w-full h-60 object-cover' src='/one.jpg' alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/three.jpg' alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/four.jpg' alt="Slide 3" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/new1.jpg' alt="Slide 4" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/new2.jpg' alt="Slide 5" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/new3.jpg' alt="Slide 6" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/new4.jpeg' alt="Slide 7" /></SwiperSlide>
      {/* Additional slides here */}
    </Swiper>
  );
};
