/* eslint-disable react/prop-types */

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ProductGallery = ({ images  }) => {
  const baseUrl = "http://localhost:8000/storage/";
  const [selected, setSelected] = useState(null);
    const containerRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
 
  useEffect(() => {
    if (images?.length) {
      const firstImage = `${baseUrl}${images[0].image}`;
      setSelected(firstImage);
    }
  }, [images]);

  const updateSelectedFromSlide = () => {
    if (!swiperRef.current) return;
    const realIndex = swiperRef.current.realIndex;
    const nextImage = `${baseUrl}${images[realIndex].image}`;
    setSelected(nextImage);
  };

  if (!images || images.length === 0) {
    return <div className="text-gray-500">لا توجد صور</div>;
  }

 
  return (
    <div className="w-[100%] flex flex-row gap-4 h-[80vh] justify-start items-center">
      {/* ✅ الصور المصغّرة داخل container فيها الأسهم فوق وتحت */}
      <div className="w-[15%] h-full relative">
        {/* 🔼 سهم فوق */}
        <button
          ref={prevRef}
          onClick={() => {
            swiperRef.current?.slidePrev();
            setTimeout(updateSelectedFromSlide, 150);
          }}
          className="absolute z-10 p-1 -translate-x-1/2 bg-white bottom-0-[96%] left-[50%] hover:bg-gray-100"
        >
          <FaChevronUp />
        </button>

        {/* ✅ Swiper */}
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="h-full "
        >
          {images.map((img, index) => {
            const fullUrl = `${baseUrl}${img.image}`;
            return (
              <SwiperSlide key={index}>
                <img
                  src={fullUrl}
                  alt={`img-${index}`}
                  onClick={() => setSelected(fullUrl)}
                  className={`w-full h-[100%] object-cover cursor-pointer ${
                    selected === fullUrl ? "opacity-30 " : ""
                  }`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* 🔽 سهم تحت */}
        <button
          ref={nextRef}
          onClick={() => {
            swiperRef.current?.slideNext();
            setTimeout(updateSelectedFromSlide, 150);
          }}
          className="absolute bottom-0 z-10 p-1 -translate-x-1/2 bg-white rounded shadow left-1/2 hover:bg-gray-100"
        >
          <FaChevronDown />
        </button>
      </div>
<div
  ref={containerRef}
  onMouseMove={(e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    e.currentTarget.style.backgroundPosition = `${x}% ${y}%`;
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundSize = "250%"; // نسبة الزوم
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundSize = "100%";
    e.currentTarget.style.backgroundPosition = "center";
  }}
  className="w-full h-full transition-all duration-300 ease-in-out"
  style={{
    backgroundImage: `url(${selected})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%", // البداية تكون بحجم طبيعي
    cursor: "zoom-in",
  }}
>
  {/* صورة شفافة فوق الخلفية عشان تحافظ على البُعد */}  
  <img
    src={selected}
    alt="product"
    className="w-full h-full opacity-0 pointer-events-none"
  />
</div>

 
    </div>
  );
};

export default ProductGallery;
