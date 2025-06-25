import imgMen from "../../assets/HomeCategory/HomeOld/7fdc4-01.png";
import imgWomen from "../../assets/HomeCategory/HomeOld/2930c-02.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LandingHomeOld = () => {
  //   const [position, setPosition] = useState({ x: 0, y: 0 });
  //   const handleMouseMove = (e) => {
  //     const { innerWidth, innerHeight } = window;
  //     const x = (e.clientX / innerWidth - 0.5) * 50;
  //     const y = (e.clientY / innerHeight - 0.5) * 50;

  //     setPosition({ x: -x, y: -y });
  //   };
  return (
    <div className="h-[73vw] sm425:h-[62vw] mdS:h-[55vw] lg:!h-[45vw]
">
  <Swiper
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      className="h-[100%]"
    >
      <SwiperSlide className="w-[100%] lg:!h-[100%]">
        <div
          className="w-[100%] bg-[#e6e6e8]  !h-[100%]  mdS:bg-[length:inherit] flex justify-center items-center overflow-hidden relative"
          //   onMouseMove={handleMouseMove}
        >
          <div className="w-[100%] h-[100%] flex justify-between flex-wrap flex-col items-center">
            <img src={imgMen} alt="" className="w-[49vw] lg:w-[27rem] lg:!left-[2%] left-[-18%] sm425:left-[-6%] sm425:w-[40vw] mdS:w-[30vw]  mdS:top-[25%] mdS:left-[0%]    absolute top-[4%]  lg:!top-[6%]" />
            {/* 
                width: 49vw;
    left: -18%;
    z-index: 1;
            */}
            <div
              // style={{
              //   transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
              // }}
              className="absolute w-[100%] bottom-[10%] lg:z-[100] text-[20px] z-10 justify-center gap-[1rem] inset-0   flex flex-col items-center"
            >
                <p>spring  summer 2018</p>
                <h1 className="uppercase text-[7vw] z-1 leading-[7vw] font-[700]">Save 20%</h1>
                <h2 className="uppercase text-[2vw] leading-[2vw] font-[700]">ON</h2>
                <h2 className="uppercase text-[7vw]   font-[700] text-customTeal"> 
                    new Arrival
                </h2>
                <button className="bg-inherit border-2 text-customTeal border-customTeal px-4"> Shop Now</button>
                {/* 
                    font-size: 7vw;
    line-height: 7vw;
    font-weight: 500;
                */}
            </div>
            {/* 
                width: 66vw;
    right: -15%;
            */}
            <img src={imgWomen} alt="" className=" w-[66vw] lg:!w-[40vw] lg:!top-[5%] right-[-15%] z-[15] absolute sm425:right-[-10%] mdS:w-[42vw] mdS:top-[20%] mdS:right-0 top-[4%]  sm425:w-[55vw]" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[100%]">
    ssss
      </SwiperSlide>

      {/* أضف المزيد من الشرائح حسب الحاجة */}
    </Swiper>
    </div>
  
  );
};

export default LandingHomeOld;
