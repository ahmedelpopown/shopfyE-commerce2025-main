import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import men from "../../assets/HomeCategory/swiperCategory/category-men.jpg";
import WOMEN from "../../assets/HomeCategory/swiperCategory/category-women.jpg";
import shoes from "../../assets/HomeCategory/swiperCategory/category-shoes.jpg";
import KIDS from "../../assets/HomeCategory/swiperCategory/category-kids.jpg";
import DRESSWEAR from "../../assets/HomeCategory/swiperCategory/category-dresswear.jpg";
import BLAZERS from "../../assets/HomeCategory/swiperCategory/category-blazers.jpg";
import BAGS from "../../assets/HomeCategory/swiperCategory/category-bag.jpg";

const CategorySwiper = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      modules={[Pagination]}
      className="mySwiper w-[100%] h-[100%]  "
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
        1280: { slidesPerView: 4, spaceBetween: 10 },
      }}
    >
      <SwiperSlide>
        <div className="relative w-[100%] h-[100%] overflow-hidden group">
          {/* الصورة */}
          <img
            src={BAGS}
            alt="image"
            className="w-[100%] h-[100%] object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* التراكب الأسود الشفاف */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* النص فوق الصورة */}

          <div className="absolute inset-0 p-[2rem] flex flex-col flex-wrap items-start justify-end text-white z-10">
            <p className="text-lg">1 Product</p>
            <h2 className="text-4xl font-bold">BAGS</h2>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-[100%] h-[100%] overflow-hidden group">
          {/* الصورة */}
          <img
            src={BLAZERS}
            alt="image"
            className="w-[100%] h-[100%] object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* التراكب الأسود الشفاف */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* النص فوق الصورة */}

          <div className="absolute inset-0 p-[2rem] flex flex-col flex-wrap items-start justify-end text-white z-10">
            <p className="text-lg">10 Product</p>
            <h2 className="text-4xl font-bold">BLAZERS</h2>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-[100%] h-[100%] overflow-hidden group">
          {/* الصورة */}
          <img
            src={DRESSWEAR}
            alt="image"
            className="w-[100%] h-[100%] object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* التراكب الأسود الشفاف */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* النص فوق الصورة */}

          <div className="absolute inset-0 p-[2rem] flex flex-col flex-wrap items-start justify-end text-white z-10">
            <p className="text-lg">15 Product</p>
            <h2 className="text-4xl font-bold">DRESSWEAR</h2>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-[100%] h-[100%] overflow-hidden group">
          {/* الصورة */}
          <img
            src={KIDS}
            alt="image"
            className="w-[100%] h-[100%] object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* التراكب الأسود الشفاف */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* النص فوق الصورة */}
          <div className="absolute inset-0 p-[2rem] flex flex-col flex-wrap items-start justify-end text-white z-10">
            <p className="text-lg">23 Product</p>
            <h2 className="text-4xl font-bold">KIDS</h2>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-[100%] h-[100%] overflow-hidden group">
          {/* الصورة */}
          <img
            src={men}
            alt="image"
            className="w-[100%] h-[100%] object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* التراكب الأسود الشفاف */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* النص فوق الصورة */}
          <div className="absolute inset-0 p-[2rem] flex flex-col flex-wrap items-start justify-end text-white z-10">
            <p className="text-lg">23 Product</p>
            <h2 className="text-4xl font-bold">Men</h2>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-[100%] h-[100%] overflow-hidden group">
          {/* الصورة */}
          <img
            src={shoes}
            alt="image"
            className="w-[100%] h-[100%] object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* التراكب الأسود الشفاف */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* النص فوق الصورة */}
          <div className="absolute inset-0 p-[2rem] flex flex-col flex-wrap items-start justify-end text-white z-10">
            <p className="text-lg">23 Product</p>
            <h2 className="text-4xl font-bold">SHOES</h2>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-[100%] h-[100%] overflow-hidden group">
          {/* الصورة */}
          <img
            src={WOMEN}
            alt="image"
            className="w-[100%] h-[100%] object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* التراكب الأسود الشفاف */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* النص فوق الصورة */}

          <div className="absolute inset-0 p-[2rem] flex flex-col flex-wrap items-start justify-end text-white z-10">
            <p className="text-lg">23 Product</p>
            <h2 className="text-4xl font-bold">WOMEN</h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategorySwiper;
