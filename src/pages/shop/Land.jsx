import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import landImage from '../../assets/ShopLandSwiper/cate-men-img-02.jpg'
 
import {   useEffect, useState } from 'react'
  
import axiosClient from '@/hooks/axiosClient'
import { useCardLayout } from '@/context/CardLayoutContext'

const Land = () => {
    const { layout } = useCardLayout(); // ← نقرأ نوع العرض
  
    const SmallCategories = layout === "SmallCategories";
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosClient.get("/category-web").then((res) => {
      setData(res.data);
    });
  }, []);
  // console.log("📦 البيانات الأصلية:", data);
const uniqueMap = new Map();

data.flatMap((parent) => {
  if (parent.svg && !uniqueMap.has(parent.id)) {
    uniqueMap.set(parent.id, parent);
  }

  if (Array.isArray(parent.children)) {
    parent.children.forEach((child) => {
      if (child.svg && !uniqueMap.has(child.id)) {
        uniqueMap.set(child.id, child);
      }
    });
  }

  return null; // مجرد لتلبية flatMap
});

const categoriesWithSvg = Array.from(uniqueMap.values());


 
  return (
    <div
      className="relative w-full min-h-[270px] h-[200px] bg-current bg-center    overflow-hidden"
      style={{ backgroundImage: `url(${landImage})` }}
    >
      {/* طبقة شفافة سوداء */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      {/* Swiper في المنتصف */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]">
        <Swiper
        modules={[Autoplay]}
  slidesPerView={5}
  spaceBetween={10}
  loop={true} // يخلي السلايدر يلف تلقائيًا
  speed={1500}
  autoplay={{
    delay: 2500, // كل 2.5 ثانية يتغير السلايد
    disableOnInteraction: true, // يفضل شغال حتى لو المستخدم لمس السلايدر
  }}
 
   breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  }}
     
        >
   {categoriesWithSvg.map((item) => (
  <SwiperSlide key={item.id}>
    
    <div className="flex flex-row items-center justify-center gap-2 p-4 flex-nowrap">
      {
        SmallCategories?  
      <div className="flex flex-row flex-wrap text-center items-center justify-center w-[100%] ">
        <span className="w-[100%] font-semibold text-white cursor-pointer hover:text-customTeal">
          {item.name}
        </span>
        {/* 
            display: flex
;
    border-radius: 13px;
    border: 1px white solid;
    height: 1.5rem;
    width: 3rem;
    align-items: center;
    justify-content: center;
}
        
        */}
        <span className="   flex justify-center items-center rounded-[13px] h-[1.5rem] w-[3rem] border border-white text-sm text-center text-white">{item.products_count}</span>
      </div>:     <>
         <img
        src={`http://127.0.0.1:8000/storage/categorySvg/${item.svg}`}
        alt={item.name}
        className="object-contain h-20"
      />
      <div className="flex flex-row flex-wrap items-center justify-center w-full">
        <span className="w-full font-semibold text-white cursor-pointer hover:text-customTeal">
          {item.name}
        </span>
        <span className="w-full text-sm text-white">{item.products_count}</span>
      </div>
        </>
      }

    </div>
  </SwiperSlide>
))}

        </Swiper>
      </div>
    </div>
  )
}

export default Land
