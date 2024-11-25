import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}   // Space between slides
      slidesPerView={3}   // Number of slides visible at once
      autoplay={{
        delay: 2500, // Delay between each slide change in ms
        disableOnInteraction: false, // Continue autoplay after user interaction
        pauseOnMouseEnter: true, // Pause on hover
      }}
      loop={true} // Infinite loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='/one.jpg' alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src='/four.jpg' alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src='/three.jpg' alt="Slide 3" /></SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};
