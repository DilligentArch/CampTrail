import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
    >
      <SwiperSlide><img className='w-full h-60 object-cover' src='/one.jpg' /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/three.jpg' /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/four.jpg' /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/new1.jpg' /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/new2.jpg' /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/new3.jpg' /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/new4.jpeg' /></SwiperSlide>
      {/* Additional slides here */}
    </Swiper>
  );
};
