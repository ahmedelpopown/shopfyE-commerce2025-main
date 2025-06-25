import img1 from "../../../assets/5okzfewk.png";
import img2 from "../../../assets/8au3ligq.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
 // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 

const LandingDefault = () => {

  const timeLine=gsap.timeline({
    repeat:-1,repeatDelay:1,yoyo:true,
  });
    useGSAP(()=>{
  timeLine.to('#green-box-2',{
    x:250,
    rotation:360,
    borderRadius:"100%",
    duration:2,
    ease:"back.inOut",
  }) 
  timeLine.to('#green-box-2',{
    y:100,
    rotation:360,
    borderRadius:"100%",
    duration:2,
    scale:2,
    ease:"back.inOut",
  }) })


  
 
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = document.querySelector(".swiper-pagination-current");
      if (current) {
        current.style.fontSize = "2rem";
        current.style.fontWeight = "bold";
        current.style.color = "blue";
        current.style.transform = "scale(1.5)";
      }
    }, 100);  

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".swiper-pagination span").forEach((el, index) => {
        el.addEventListener("click", () => {
          setTimeout(() => {
            swiperRef.current?.slideTo(index);  
          }, 1000);
        });
      });
    }, 500);
  }, []);
 
  const divRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
 
    tl.to(divRef.current, {
      x: 100, 
      duration: 6,
      ease: "power1.inOut",
      position:"relative",
      onStart: () => {
        if (divRef.current) divRef.current.style.zIndex = "25";
      }
    });
 
    tl.to(divRef.current, {
      x: 0, 
      duration: 2,
      ease: "power1.inOut",
      onStart: () => {
        if (divRef.current) divRef.current.style.zIndex = "25";
      }
    });
  }, []);
  useGSAP(()=>{
    gsap.to('#text-left-1',{
      ease:'power1.inOut',
      opacity:1,
      x:2,
      delay:5,
    })
    gsap.to('#text-left-2',{
      ease:'power1.inOut',
      opacity:1,
      x:2,
      delay:2,
    })
    gsap.to('#text-left-3',{
      ease:'power1.inOut',
      opacity:1,
      x:2,
      delay:3,
    })
    
    gsap.fromTo('.para',{
      opacity:0,
      x:20,
      delay:1
    },
    {
      opacity:1,
      x:0,
      delay:1,
       
    })
      },[])
  useGSAP(()=>{
    
    
    gsap.fromTo('.para',{
      opacity:0,
      x:20
    },
    {
      opacity:1,
      x:0,
      delay:1,
       
    })
      },[])

  return (
    <Swiper
    pagination={{
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return `
          <span class="${currentClass}"></span> /
          <span class="${totalClass}"></span>
        `;
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    allowTouchMove={false}  
  >
        <SwiperSlide>
      <div className="relative md:gap-5 px-[10px] max-w-full w-full justify-around md:px-[4rem] flex">
        <div className="mdS:min-w-[10rem] mdS:max-w-[26rem] mdS:text-[28px] mdS:py-2 mdS:tracking-[5px] mdS:flex-col mdS:flex mdS:items-start min-w-fit flex flex-col flex-wrap items-start justify-center">
          <span className="flex items-center justify-start flex-wrap w-fit p-[6px] text-xs bg-landingSel text-white">
            <b className="flex text-[27px]">20</b>
            <p className="flex flex-col text-[9px]">
              <b>%</b> <b>OFF</b>
            </p>
          </span>
          <h1 className="mdS:text-[10vw] text-[7vw]">
            <b>Spring</b>
          </h1>
          <b className="text-[16px] mb-1 md777:text-[36px]">
            season festival
          </b>
          <span className="mdS:tracking-[4px] bg-landingSpan">
            <b className="text-[10px]">CATALOGUE 2018</b>
          </span>
        </div>
        <div className="animate relative">
          <div className="bg-landingService absolute para rounded-full left-[2rem] h-[10rem] w-[10rem] sm425:h-[15rem] sm425:w-[15rem] sm425:left-[6rem] md:h-[15rem] md:w-[15rem] mdS:w-[30rem] mdS:h-[30em]" id="green-box-2"></div>
          <div className="relative block min-w-[10rem] max-w-[26rem]">
            <img src={img2} alt="Product" />
          </div>
        </div>
        <div className="mdS:text-[28px] para z-1 mdS:font-semibold mdS:min-w-[10rem] mdS:max-w-[16rem] mdS:min-h-[10rem] mdS:max-h-[17rem] flex text-[13px] min-w-fit font-semibold flex-col flex-wrap items-end justify-center">
          <span className="text-right">Limited</span>
          <span className="text-right">Time</span>
          <span>Offer</span>
          <span className="underline text-[7px] pb-[10px] tracking-[-1px]">
            GET THE OFFER
          </span>
        </div>
      </div>
    </SwiperSlide>
     
    <SwiperSlide className="max-w-full">
      <div className="hidden md777:flex max-w-full md777:h-full md777:relative md777:pl-[1rem] md777:items-center md777:justify-between md777:flex-row md777:flex-wrap">
  
      <div className="relative w-full min-h-screen bg-landingDefault">
 
      <div className="absolute top-0 left-[10rem] z-[2] ">
        <div
          ref={divRef}
          className="w-32 h-80 bg-customGreen-300 flex items-center justify-center para "
        >
           
        </div>
      </div>

  
      <div className="relative z-100 flex justify-between items-center w-full px-4 my780:px-8 py-8">
        <div className="flex flex-col items-start gap-4 z-[200]">
          <p className="font-[Poppins] text-[8vw] font-bold leading-[5rem] mdS:leading-[8rem]">
            <span className="block para" >New</span>
            <span className="block para" >Arrival</span>
          </p>
          <h3 className="text-[20px] tracking-[3px] font-bold text-left para"  >
            For Women
          </h3>
          <button className="bg-black text-white font-bold p-2">
            Shop Now
          </button>
        </div>

        <div className="bg-landingService para rounded-full justify-center h-[25rem] w-[25rem] flex flex-col items-center gap-2 font-[700] mt-[5rem] mdS:text-[2vw] mdS:gap-0">
          <span id="text-left-1">Limited</span>
          <span id="text-left-2">Time</span>
          <span id="text-left-3">Offer</span>
          <span className="text-[10px] underline para" >GET THE OFFER</span>
        </div>
      </div>

 
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[29rem] mdS:w-[41rem]">
        <img src={img1} alt="Product" className="w-full object-contain para" />
      </div>
    </div>


      </div>
    </SwiperSlide>

   

  </Swiper>
  );
};

export default LandingDefault;
