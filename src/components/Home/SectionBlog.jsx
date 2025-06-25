import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaFolderOpen } from "react-icons/fa";
import BlogImg1 from "../../assets/cardImage/blog-03-500x375.jpg";
import BlogImg2 from "../../assets/cardImage/blog-07-500x375.jpg";
import BlogImg3 from "../../assets/cardImage/blog-09-500x375.jpg";
import logo from "../../assets/cardImage/2844719fa7552fe1ef780d955b755d2f.png";

import "swiper/css";
import "swiper/css/navigation";

const SectionBlog = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setShowNavigation(true)}
      onMouseLeave={() => setShowNavigation(false)}
    >
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        loopedSlides={3} // تحديد عدد الشرائح لإعادة التكرار بسلاسة
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={showNavigation}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full h-full"
        breakpoints={{
          // عند الشاشات الصغيرة
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // عند حجم الشاشة المتوسط
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // عند الشاشات الكبيرة
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative text-center text-[18px] flex items-center justify-between">
          <div className="flex justify-between">
            <div className="relative">
              <img width={350} src={BlogImg1} alt="" />
              <span className="absolute top-2 left-2 bg-black text-white p-1">18 Nov</span>
            </div>
            <div className="max-w-[240px] flex flex-col justify-center items-start gap-4">
              <div className="flex gap-4 items-center">
                <span className="flex gap-1 items-center">
                  <img src={logo} className="rounded-full w-4" alt="" />
                  <p>ciyashop</p>
                </span>
                <span className="text-green-500 flex gap-1 items-center">
                  <FaFolderOpen className="w-4" />
                  <p className="text-black">Fashion</p>
                </span>
              </div>
              <h1>Blog Post with Audio</h1>
              <p className="text-sm text-left">
                Focus is having the unwavering attention to complete what you set out to do....
              </p>
              <span className="text-sm">Read More...</span>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative text-center text-[18px] flex items-center justify-between">
          <div className="flex justify-between">
            <div className="relative">
              <img width={350} src={BlogImg2} alt="" />
              <span className="absolute top-2 left-2 bg-black text-white p-1">18 Nov</span>
            </div>
            <div className="max-w-[240px] flex flex-col justify-center items-start gap-4">
              <div className="flex gap-4 items-center">
                <span className="flex gap-1 items-center">
                  <img src={logo} className="rounded-full w-4" alt="" />
                  <p>ciyashop</p>
                </span>
                <span className="text-green-500 flex gap-1 items-center">
                  <FaFolderOpen className="w-4" />
                  <p className="text-black">Fashion</p>
                </span>
              </div>
              <h1>Blog Post with Audio</h1>
              <p className="text-sm text-left">
                Focus is having the unwavering attention to complete what you set out to do....
              </p>
              <span className="text-sm">Read More...</span>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative text-center text-[18px] flex items-center justify-between">
          <div className="flex justify-between">
            <div className="relative">
              <img width={350} src={BlogImg3} alt="" />
              <span className="absolute top-2 left-2 bg-black text-white p-1">18 Nov</span>
            </div>
            <div className="max-w-[240px] flex flex-col justify-center items-start gap-4">
              <div className="flex gap-4 items-center">
                <span className="flex gap-1 items-center">
                  <img src={logo} className="rounded-full w-4" alt="" />
                  <p>ciyashop</p>
                </span>
                <span className="text-green-500 flex gap-1 items-center">
                  <FaFolderOpen className="w-4" />
                  <p className="text-black">Fashion</p>
                </span>
              </div>
              <h1>Blog Post with Audio</h1>
              <p className="text-sm text-left">
                Focus is having the unwavering attention to complete what you set out to do....
              </p>
              <span className="text-sm">Read More...</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SectionBlog;
