import data from "../../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
 
const SwiperFooter = () => {
 
  return (
    <div className="relative py-[4%] px-[8%] grid md:grid-cols-3 grid-cols-1 gap-4 min-h-[45rem] w-full">
    {["FEATURED PRODUCT", "NEW ARRIVALS", "BEST SELLERS"].map((sectionTitle, idx) => (
      <div key={idx} className="relative w-full">
        {/* ✅ العنوان وأزرار التحكم */}
        <div className="absolute top-0 right-0 flex justify-between items-center z-10 w-full">
          <h1 className="md:text-2xl text-xl font-bold">{sectionTitle}</h1>
          <div>
            <button className={`swiper-button-prev-custom-${idx} text-black text-[30px]`}>
              <IoIosArrowBack />
            </button>
            <button className={`swiper-button-next-custom-${idx} text-black text-[30px]`}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
  
        
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.swiper-button-next-custom-${idx}`,
            prevEl: `.swiper-button-prev-custom-${idx}`,
          }}
          slidesPerView={1} 
          spaceBetween={20}
          className="mySwiper w-full mt-12"
        >
          {Array.from({ length: Math.ceil(data.ProductCard.length / 4) }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-4">
                {data.ProductCard.slice(i * 4, i * 4 + 4).map((item, index) => (
                  <div key={index} className="flex items-center bg-white w-full p-2 ">
                    <img src={item.imgCard} alt={item.title} className="w-24 h-24 object-cover" />
                    <div className="ml-4">
                      <h2 className="text-lg font-medium">{item.title}</h2>
                      <p className="text-customTeal">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    ))}
  </div>
  
  );
};

export default SwiperFooter;
