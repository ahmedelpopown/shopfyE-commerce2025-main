/* eslint-disable react/prop-types */

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const ProductGallery = ({ images }) => {
  const [searchParams] = useSearchParams();
  const layout = searchParams.get("layout") || "Thumbnail-Bottom";

  const layoutLower = layout.toLowerCase();

  const position = layoutLower.includes("right")
    ? "Thumbnail-Right"
    : layoutLower.includes("left")
    ? "Thumbnail-Left"
    : layoutLower.includes("bottom")
    ? "Thumbnail-Bottom"
    : "Page-Full-Width"; // أو default اللي انت عاوزه
  console.log(position);
  const baseUrl = "http://localhost:8000/storage/";
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const isVertical =
    position === "Thumbnail-Left" || position === "Thumbnail-Right";

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
  // const image =

  //  console.log(position== "bottom")
  return (
    // <div className="">
 
<>
            {/* //                             Thumbnail-Bottom
      // /////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////
       */}
      {position == "Thumbnail-Bottom" ? (
     <div className="h-[130vh] w-full flex flex-row flex-wrap   gap-4 justify-start items-center">
  {/* ✅ الصورة الرئيسية */}
  <div 
    ref={containerRef}
    onMouseMove={(e) => {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      e.currentTarget.style.backgroundPosition = `${x}% ${y}%`;
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundSize = "250%";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundSize = "100%";
      e.currentTarget.style.backgroundPosition = "center";
    }}
    className="flex-1 w-full transition-all ease-in-out duration-400"
    style={{
      backgroundImage: `url(${selected})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      cursor: "zoom-in",
    }}
  >
    <img
      src={selected}
      alt="product"
      className="w-full h-full opacity-0 pointer-events-none"
    />
  </div>

  {/* ✅ Swiper للصور المصغرة */}
  <div className="w-full h-[120px] relative flex items-center justify-center">
    {/* ◀️ السهم لليسار */}
    <button
      ref={prevRef}
      onClick={() => {
        swiperRef.current?.slidePrev();
        setTimeout(updateSelectedFromSlide, 150);
      }}
      className="absolute z-10 p-2 bg-white rounded-full shadow left-2 hover:bg-gray-100"
    >
      <FaChevronLeft />
    </button>

    {/* ✅ Swiper أفقي */}
    <Swiper
      direction="horizontal"
      slidesPerView={5}
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
      className="w-[90%] h-full"
    >
      {images.map((img, index) => {
        const fullUrl = `${baseUrl}${img.image}`;
        return (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <button
              onClick={() => setSelected(fullUrl)}
              className={`w-[70px] h-[70px]  overflow-hidden border-2 transition-all duration-200 flex justify-center items-center ${
                selected === fullUrl
                  ? "border-blue-500 ring-2 ring-blue-300"
                  : "border-gray-200 hover:border-blue-400"
              }`}
            >
              <img
                src={fullUrl}
                alt={`img-${index}`}
                className="object-cover w-full h-full"
              />
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>

    {/* ▶️ السهم لليمين */}
    <button
      ref={nextRef}
      onClick={() => {
        swiperRef.current?.slideNext();
        setTimeout(updateSelectedFromSlide, 150);
      }}
      className="absolute z-10 p-2 bg-white rounded-full shadow right-2 hover:bg-gray-100"
    >
      <FaChevronRight />
    </button>
  </div>
</div>

      ) :
      //                             Thumbnail-Left
      // /////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////
      
      position == "Thumbnail-Left" ? (
     <div className="h-[90vh] w-full flex flex-row   gap-4 justify-start items-center">
          <div className="w-[15%] h-[90vh]  relative">
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
              const { left, top, width, height } =
                e.currentTarget.getBoundingClientRect();
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
            className="w-full h-full transition-all ease-in-out duration-400"
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
      ) :
      
      //         {/* //                             Thumbnail-Right
      // // /////////////////////////////////////////////////////////////////////////////////
      // // /////////////////////////////////////////////////////////////////////////////////
      // // /////////////////////////////////////////////////////////////////////////////////
      //  */}
      position == "Thumbnail-Right" ? (
     <div className="h-[90vh] w-full flex flex-row   gap-4 justify-end items-center">
         
             <div
            ref={containerRef}
            onMouseMove={(e) => {
              const { left, top, width, height } =
                e.currentTarget.getBoundingClientRect();
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
            className="w-full h-full transition-all ease-in-out duration-400"
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
          <div className="w-[15%] h-[90vh]  relative">
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
      
        </div>
      ) : (
        <>
          <div className="w-[15%] h-[90vh]  relative">
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
              const { left, top, width, height } =
                e.currentTarget.getBoundingClientRect();
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
            className="w-full h-full transition-all ease-in-out duration-400"
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
        </>
      )}
</>
    
  );
};

export default ProductGallery;
