import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import data from "../../ProductCard";
import Card from "../../pages/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const categories = ["Newest", "Featured", "Best Sellers", "On Sale", "Cheapest"];

const Special = () => {
  const swiperRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Newest");
  const [showNav, setShowNav] = useState(false); // 🔥 تتبع حالة الأزرار

  return (
    <div
      className="relative gap-8 h-[100vh] w-full max-w-6xl mx-auto flex flex-row flex-wrap justify-center items-center"
      onMouseEnter={() => setShowNav(true)} // عند دخول الماوس
      onMouseLeave={() => setShowNav(false)} // عند خروج الماوس
    >
      {/* العنوان والأزرار */}
      <div className="absolute z-10 top-4 left-4">
        <h2 className="text-2xl font-bold text-gray-900">Special Items</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {categories.map((category) => (
            <h1
              key={category.id}
              className={`px-4 py-1 rounded-md transition ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-black hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </h1>
          ))}
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        loopAdditionalSlides={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mt-16"
        breakpoints={{
          // عند الشاشات الصغيرة
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // عند حجم الشاشة المتوسط
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // عند الشاشات الكبيرة
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data.ProductCard.map((item) => (
          <SwiperSlide key={item.id}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل (تظهر عند تمرير الماوس) */}
      <button
        className={`absolute top-1/2 left-4 -translate-y-1/2 px-1 py-2 bg-black text-white shadow-md hover:bg-customTeal transition-opacity duration-300 z-50 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <IoIosArrowBack className="text-[20px] font-extrabold" />
      </button>

      <button
        className={`absolute top-1/2 right-4 -translate-y-1/2 px-1 py-2 bg-black text-white shadow-md hover:bg-customTeal transition-opacity duration-300 z-50 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <IoIosArrowForward className="text-[20px] font-extrabold" />
      </button>
    </div>
  );
};

export default Special;
