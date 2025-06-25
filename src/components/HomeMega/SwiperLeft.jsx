import data from "../../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const SwiperLeft = () => {
    const productGroups = [];
    for (let i = 0; i < data.ProductCard.length; i += 3) {
      productGroups.push(data.ProductCard.slice(i, i + 3));
    }
  return (
    <div className="  w-[27rem] max-w-[100%]">
    {/* العنوان وأزرار التنقل */}
    <div className="flex justify-between items-center w-full mb-4">
      <h1 className="text-xl font-bold">FEATURED PRODUCT</h1>
      <div>
        <button className="swiper-button-prev-custom text-black text-2xl">
          <IoIosArrowBack />
        </button>
        <button className="swiper-button-next-custom text-black text-2xl">
          <IoIosArrowForward />
        </button>
      </div>
    </div>

    {/* إعداد الـ Swiper */}
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      direction="horizontal" // التنقل أفقي
      slidesPerView={1} // عرض شريحة واحدة في كل مرة
      spaceBetween={20}
      className="mySwiper w-full"
    >
      {productGroups.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col gap-4">
            {group.map((item) => (
              <div key={item.id} className="flex items-center bg-white w-full p-2">
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
  )
}

export default SwiperLeft