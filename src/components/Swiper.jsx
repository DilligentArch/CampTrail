import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={0} // Remove the gap between slides
      slidesPerView={3}
    >
      <SwiperSlide><img className='w-full h-60 object-cover' src='/one.jpg' /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/three.jpg' /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/four.jpg' /></SwiperSlide>
      <SwiperSlide><img className='w-full h-60 object-cover' src='/new1.jpg' /></SwiperSlide>
      {/* Additional slides here */}
    </Swiper>
  );
};
