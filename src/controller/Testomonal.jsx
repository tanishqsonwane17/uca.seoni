import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import '../controller/'; // optional custom CSS

import t1 from '../assets/15.jpg';
import t2 from '../assets/14.jpg';
import t3 from '../assets/imp.png';
import t4 from '../assets/t4.jpg';
import t5 from '../assets/t5.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Tanishq Sonwane',
    quote: 'My experience at UCA has been truly amazing. The supportive faculty, quality education...',
    image: t1
  },
  {
    id: 2,
    name: 'Lacksya Bhagat',
    quote: 'UCA helped me grow personally and professionally. Grateful for the environment and mentors.',
    image: t3
  },
  {
    id: 3,
    name: 'Ayush Pandey',
    quote: 'The labs, faculty, and opportunities are truly unmatched. Proud to be part of this.',
    image: t2},
  {
    id: 4,
    name: 'Gaurav Raghuwanshi',
    quote: 'UCA didn’t just teach me subjects — it shaped my future. The faculty here truly care about each student’s journey.',
    image: t4
  },
  {
    id: 5,
    name: 'Nikki Thakur',
    quote: '“From zero to confident — my transformation began the day I joined UCA. The practical learning environment helped me build real skills',
    image: t5
  }
];

const Testimonials = () => {
  return (
    <div className="bg-[#12153f] text-white py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-10">
        <span className="bg-blue-500 px-3 py-1 rounded">Testimonials</span>
      </h2>
      
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000 }}
        navigation
        loop
        spaceBetween={50}
        slidesPerView={1}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
              <div className="md:w-1/2 text-xl font-semibold leading-snug">
                “{t.quote}”
                <div className="mt-4 text-sm font-light">— {t.name}</div>
              </div>
              <div className="md:w-1/4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-full w-48 h-48 object-cover border-4 border-white"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 underline cursor-pointer hover:text-blue-300">
        View All →
      </div>
    </div>
  );
};

export default Testimonials;
