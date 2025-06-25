import { useState } from "react";
import  img1 from "../../assets/HomeCategory/weLoveFashon/01.png"
import  img2 from "../../assets/HomeCategory/weLoveFashon/02.png"
import  img3 from "../../assets/HomeCategory/weLoveFashon/03.png"
import  img4 from "../../assets/HomeCategory/weLoveFashon/04.png"
import  img5 from "../../assets/HomeCategory/weLoveFashon/05.png"
import  img6 from "../../assets/HomeCategory/weLoveFashon/06.png"
import  img7 from "../../assets/HomeCategory/weLoveFashon/07.png"
import  img8 from "../../assets/HomeCategory/weLoveFashon/08.png"
const MouseParallax = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 50;  
      const y = (e.clientY / innerHeight - 0.5) * 50;
  
   
      setPosition({ x: -x, y: -y });
    };
  
  return (
    
<div
  className="w-[100%] h-[20rem] mdS:h-[47rem] bg-no-repeat bg-top bg-contain mdS:bg-[length:inherit] flex justify-center items-center overflow-hidden relative"
  style={{ backgroundImage: `url(${img1})` }}
  onMouseMove={handleMouseMove}
>
  {/* ✅ الصورة + العنوان + الزر في div واحد */}
  <div className="absolute w-[100%] mdS:top-[0%] left-[0%] flex flex-col items-center">
    {/* 🔼 الزر أعلى الصورة  z-index: 10;
    bottom: 10%;*/}
    <button className="absolute bottom-[10%] z-10  px-3  py-1 mdS:px-6 mdS:py-2 bg-black text-white rounded-md shadow-lg">
      View Collection
    </button>

    {/* 🖼️ الصورة  
      
    */}
    <img
      src={img2}
      alt="Mid Layer"
      className=" w-[50%] mdS:w-[30%]  will-change z-2 transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
      }}
    />
{/* 
     
     
     
    line-height: 160px;
    letter-spacing: 0px;
    font-weight: 900;
    font-size: 152px;
     
*/}
   {/* ✅ جعل "We Love" في نفس السطر */}
  <div 
    style={{
        transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
      }}
  className="absolute top-[20%] z-[1] flex flex-col items-center text-center font-[Lato] text-[rgb(4,211,159)] whitespace-nowrap min-h-0 min-w-0 max-h-none max-w-none mdS:leading-[160px] tracking-[0] font-[900] mdS:text-[152px] opacity-100 visible">
  {/* ✅ جعل "We Love" في نفس السطر */}
  <div className="flex  flex-wrap justify-center gap-2" >
    <h1>We</h1>
    <h1>Love</h1>
  </div>

  {/* ✅ جعل "Fashion" تحت "We Love" */}
  <h1 className="w-full">Fashion</h1>
</div>
 


  </div>

  {/* باقي الصور (بدون تغيير) */}
  <img
    src={img3}
    alt="Front Layer"
    className="absolute w-[10%] mdS:w-[10%] will-change bottom-[5%] left-[20%] transition-transform duration-100 ease-out"
    style={{
      transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
    }}
  />
  <img
    src={img4}
    alt="Front Layer"
    className="absolute w-[10%] mdS:w-[15rem] will-change top-[20%] left-[10%] transition-transform duration-100 ease-out"
    style={{
      transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
    }}
  />
  <img
    src={img5}
    alt="Front Layer"
    className="absolute w-[10%] mdS:w-[15%] will-change top-[0%] left-[20%] transition-transform duration-100 ease-out"
    style={{
      transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
    }}
  />
  <img
    src={img6}
    alt="Front Layer"
    className="absolute w-[10%] mdS:w-[20%] will-change top-[5%] right-[10%] transition-transform duration-100 ease-out"
    style={{
      transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
    }}
  />
  <img
    src={img7}
    alt="Front Layer"
    className="absolute w-[10%] mdS:w-[10%] will-change bg-inherit bottom-[20%] right-[20%] transition-transform duration-100 ease-out"
    style={{
      transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
    }}
  />
  <img
    src={img8}
    alt="Front Layer"
    className="absolute w-[10%] mdS:w-[10%] will-change bg-inherit bottom-[10%] right-[10%] transition-transform duration-100 ease-out"
    style={{
      transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
    }}
  />
</div>

  );
};

export default MouseParallax;
