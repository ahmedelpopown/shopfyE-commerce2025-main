import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/HomeCategory/HomeMega/01.jpg";
import img2 from "../../assets/HomeCategory/HomeMega/02.png";
import img3 from "../../assets/HomeCategory/HomeMega/a01.png";

const SliderComponent = () => {
 
 

  return (
<div className="relative w-full h-[45vh] md:h-[70vh] bg-[#e4e4e4]">
  <Swiper
    modules={[Pagination, Autoplay]}
    // loop={true}
    // autoplay={{ delay: 3000, disableOnInteraction: true }}
    autoplay={false}
    pagination={{ clickable: true }}
    className="h-full w-full"
  >
    <SwiperSlide className="flex items-center   relative justify-center h-full w-full">
      <img src={img1} alt="Slide 1" className="absolute top-0 left-0  object-cover w-full h-full" />
      <div className="z-10     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col gap-2 items-center justify-center    text-white  ">
        <span className="bg-white  text-customTeal px-2 py-1 font-semibold ">New</span>
        <h1 className=" text-[16px] md:text-[4.5rem] font-bold">Collection</h1>
        <p className=" text-[16px] md:text-[2.5rem] font-semibold">save up to 40% off</p>
        <button className="bg-customTeal text-white p-1 md:px-4 md:py-2 ">Shop Now</button>
      </div>
    </SwiperSlide>
    <SwiperSlide className="flex items-center justify-center relative h-full w-full">
<div className="">
<img src={img3} alt="Slide 2" className="w-[40%] object-cover left-[0rem] top-[2rem]  absolute md:w-[20rem]" />

<img src={img2} alt="Slide 2" className="w-[40%] object-cover  absolute  right-[0rem] top-[2rem] md:w-[20rem]" />
<div className=" text-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-[100%] flex flex-col gap-2 md:[3rem] items-center justify-center">
  <h3 className="text-xl md:text-[1em]  font-bold text-customTeal text-center">POLS & TEES </h3>
  <h5 className=" text-xs md:text-[0.8em] font-semibold">Online Sale</h5>
  <h5 className=" text-xs md:text-[0.5em]">For Men & women</h5>
  <button className=" text-xs md:text-[0.4em] text-white px-4 py-2 bg-black ">Shop Now</button>
</div>
</div>
    </SwiperSlide>
  </Swiper>
</div>
  );
};

export default SliderComponent;
