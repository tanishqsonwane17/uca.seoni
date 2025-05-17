// CollegePage.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import academyLogo from '../assets/univarsal.png';
import academyLogo1 from '../assets/clg4.jpg';
import academyLogo2 from '../assets/clg7.jpg';
import academyLogo3 from '../assets/clg2.jpg';
import academyLogo4 from '../assets/clg1.jpg';
import academyLogo5 from '../assets/clg-class.jpg';

const images = [
  {
    url: "https://content.jdmagicbox.com/v2/comp/seoni/x7/9999p7695.7695.110225203221.t7x7/catalogue/universal-computer-academy-barapatthar-seoni-it-training-institutes-szvr7syxak.jpg?imwidth=128",
    text: "UCA Academy",
  },
  {
    url: academyLogo4,
    text: "Fully Equipped Library",
  },
  {
    url: academyLogo3,
    text: "News",
  },
  {
    url: academyLogo2,
    text: "Admission Open",
  },
  {
    url: academyLogo1,
    text: "Beautiful Campus",
  },
  {
    url: academyLogo5,
    text: "Modern Lab Classrooms"
  },
];

const CollegePage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-full bg-[#9CF6FB] p-16 ">
      {/* Left Side: About College */}
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-[#9CF6FB] p-6 shadow-lg rounded-2xl bg-contain">
        <img
          src={academyLogo}
          alt="College"
          className="rounded-xl mb-6 shadow w-full h-[300px] bg-contain object-contain"
        />
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">About Our College</h2>
        <p className="text-gray-700 text-lg text-center">
          Welcome to our prestigious institution dedicated to academic excellence and all-round development. Our campus is equipped with modern infrastructure, experienced faculty, and vibrant student culture.
        </p>
      </div>

      {/* Right Side: Image Slider */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-6">
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    className="rounded-2xl shadow-lg"
  >
    {images.map((img, idx) => (
      <SwiperSlide key={idx}>
        <div className="relative group aspect-[4/3] w-full rounded-2xl overflow-hidden">
          <img
            src={img.url}
            alt={img.text}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-transparent  bg-opacity-50  group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <p className="text-white text-2xl font-semibold text-center px-4">{img.text}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};

export default CollegePage;
