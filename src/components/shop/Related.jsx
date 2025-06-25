import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../../pages/Card";
import data from "../../ProductCard";

 
const Related = () => {
      const swiperRef = useRef(null);
   const [showNav, setShowNav] = useState(false); // 🔥 تتبع حالة الأزرار

  return (
    <div className="px-[4%] relative flex flex-wrap flex-row justify-center " 
          onMouseEnter={() => setShowNav(true)} // عند دخول الماوس
      onMouseLeave={() => setShowNav(false)} 
    >
<div className="flex flex-row flex-wrap items-center justify-between w-full py-4 text-2xl font-semibold ">
        <h1 >Related products</h1>

</div>
          <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        loopAdditionalSlides={4}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mt-4"
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
            slidesPerView: 4,
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
        className={`absolute top-1/2 left-[4rem] -translate-y-1/2 px-1 py-2 bg-black text-white shadow-md hover:bg-customTeal transition-opacity duration-300 z-50 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <IoIosArrowBack className="text-[20px] font-extrabold" />
      </button>

      <button
        className={`absolute top-1/2 right-[4rem] -translate-y-1/2 px-1 py-2 bg-black text-white shadow-md hover:bg-customTeal transition-opacity duration-300 z-50 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <IoIosArrowForward className="text-[20px] font-extrabold" />
      </button>
    </div>
  )
}

export default Related