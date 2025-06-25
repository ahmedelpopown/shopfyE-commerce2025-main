import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import data from '../../ProductCard';
import Card from '../../pages/Card';
import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
  

const PopularProduct = () => {
  const swiperRef = useRef(null); // ⬅️ مرجع للتحكم في Swiper

  return (
    <div className="relative w-[100%]  md:max-w-6xl h-[100vh] flex flex-row flex-wrap items-center mx-auto">

    {/* العنوان في الأعلى على اليسار */}
    <div className="absolute top-[3rem] left-4 text-[30px] font-extrabold
  text-gray-800 z-10">
      Popular Product
    </div>

    {/* Swiper */}
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
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

       loopAdditionalSlides={3} // ⬅️ إصلاح مشكلة الرجوع للخلف
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      className="relative w-full   mt-12"
    >
      {data.ProductCard.map((item) => (
        <SwiperSlide key={item.id}>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* أزرار التنقل اليدوية في الزاوية اليمنى العلوية */}
    <div className="absolute top-[3rem] right-4 flex gap-2 z-10">
      <button
        className="bg-white-300 p-3 text-textColor text-[20px] font-bold  shadow-md"
        onClick={() => swiperRef.current?.slidePrev()} // ⬅️ زر الانتقال للخلف
      >
        <IoIosArrowBack className='text-[20px] font-extrabold' />

        
      </button>
      <button
        className="bg-white-300 p-3 text-textColor   shadow-md"
        onClick={() => swiperRef.current?.slideNext()} // ⬅️ زر الانتقال للأمام
      >
        <IoIosArrowForward className='text-[20px] font-extrabold' />
      </button>
    </div>
  </div>
  );
};

export default PopularProduct;
