import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay  } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import landImage from '../../assets/ShopLandSwiper/cate-men-img-02.jpg'
 import img1 from '../../assets/ShopLandSwiper/cat-01.png'
 import img2 from '../../assets/ShopLandSwiper/cat-02.png'
 import img3 from '../../assets/ShopLandSwiper/cat-03.png'
 import img4 from '../../assets/ShopLandSwiper/cat-04.png'
 import img5 from '../../assets/ShopLandSwiper/cat-05.png'
 import img6 from '../../assets/ShopLandSwiper/cat-06.png'

const Land = () => {
  const images = [
    { id: 1, name: 'Coats & jackets', count: '2 product', img:  img1 },
    { id: 2, name: 'KIDS', count: '2 product', img:  img2 },
    { id: 3, name: 'Blazers', count: '2 product', img:  img3 },
    { id: 4, name: 'Accessories', count: '2 product', img:  img4 },
    { id: 5, name: 'Women', count: '3 product', img:  img5 },
    { id: 6, name: 'Men', count: '5 product', img:  img6 },
  ]

  return (
    <div
      className="relative w-full h-[200px] bg-current bg-center    overflow-hidden"
      style={{ backgroundImage: `url(${landImage})` }}
    >
      {/* طبقة شفافة سوداء */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      {/* Swiper في المنتصف */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]">
        <Swiper
        modules={[ Autoplay]}
  slidesPerView={5}
  spaceBetween={10}
  loop={true} // يخلي السلايدر يلف تلقائيًا
  speed={1500}
  autoplay={{
    delay: 2500, // كل 2.5 ثانية يتغير السلايد
    disableOnInteraction: false, // يفضل شغال حتى لو المستخدم لمس السلايدر
  }}
  pagination={{ clickable: true }}
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
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }}
     
        >
          {images.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-row items-center justify-center gap-2 p-4 flex-nowrap">
                <img src={item.img} alt={item.name} className="object-contain h-20" />
               <div className='flex flex-row flex-wrap items-center justify-center w-full '>
                 <span className="w-full text-white font-sm">{item.name}</span>
                <span className="w-full text-sm text-white">  {item.count}</span>
               </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Land
