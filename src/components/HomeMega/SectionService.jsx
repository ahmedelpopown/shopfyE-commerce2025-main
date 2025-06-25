import img1 from "../../assets/HomeCategory/HomeMega/01-1.jpg";
import img2 from "../../assets/HomeCategory/HomeMega/02-1.jpg";
const SectionService = () => {
  return (
<>
<div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-[3.5rem] text-[13px] items-center justify-center my-4">
      <div className="flex flex-wrap flex-col items-center  ">
        <div className="flex flex-wrap flex-row items-center  ">
          <span className="text-customTeal font-bold text-6xl ">01</span>
          <h1 className="text-2xl font-semibold"> Money Guarantee</h1>
        </div>
        <p className="text-textColor">
          We offer a 100% money-back guarantee within 60 days.
        </p>
      </div>
      <div className="flex flex-wrap flex-row items-center  ">
        <span className="text-customTeal font-bold text-6xl ">01</span>
        <h1 className="text-2xl font-semibold">Online Support</h1>
        <p className="text-textColor">
          Our Customer Support Team is ready and available to help.
        </p>
      </div>
      <div className="flex flex-wrap flex-row items-center  ">
        <span className="text-customTeal font-bold text-6xl ">01</span>
        <h1 className="text-2xl font-semibold"> Payment Secure</h1>
        <p className="text-textColor">
          We maintain the highest level of online payment security.
        </p>
      </div>
    
    </div>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(100%,1fr))] mdS:grid-cols-[repeat(auto-fit,minmax(40%,1fr))] items-center justify-center gap-5 min-h-[20rem]">
  
  {/* الصورة الأولى */}
  <div className="relative overflow-hidden h-[20rem] w-full">
    {/* الخلفية القابلة للتكبير */}
    <div 
      className="w-full h-full bg-cover bg-center bg-no-repeat 
                 transition-transform duration-300   ease-in-out hover:scale-110"
      style={{ backgroundImage: `url(${img1})`, willChange: "transform" }}
    ></div>
    
    {/* النص الثابت */}
    <div className="absolute inset-0   pointer-events-none flex-col flex items-start justify-between p-4">
   <div className="flex flex-col flex-wrap gap-2 items-start ">
   <span className="bg-textBg text-white p-2  text-[12px]  px-3 tracking-[5px] font-extralight ">LADIES BAGS</span>
      <span className=" text-textBg p-1 font-bold text-[22px] leading-4 tracking-[1px]">
      GET READY FOR</span>
      <span className=" text-white p-2 font-semibold text-[30px] leading-6 tracking-[5px] ">25% OFF</span>
   </div>
      <span className="bg-black text-white p-2  ">This offer has expired!</span>
    </div>
  </div>

  {/* الصورة الثانية */}
  <div className="relative overflow-hidden h-[20rem] w-full ">
    {/* الخلفية القابلة للتكبير */}
    <div 
      className="w-full h-full bg-cover bg-center bg-no-repeat 
                 transition-transform duration-300 ease-in-out hover:scale-110"
      style={{ backgroundImage: `url(${img2})`, willChange: "transform" }}
    ></div>
    
    {/* النص الثابت */}
    <div className="absolute inset-0   pointer-events-none flex-col flex items-start justify-between p-4">
   <div className="flex flex-col flex-wrap gap-2 items-start ">
   <span className="bg-[#ffffff] text-black p-2  text-[12px]  px-3 tracking-[5px] uppercase font-extralight ">Banner
   Sun Glasses</span>
      <span className=" text-[#ffffff] uppercase p-1 font-bold text-[22px] leading-4 tracking-[1px]">
      Get Ready for
 </span>
      <span className=" text-white p-2 font-semibold text-[30px] leading-6 tracking-[5px] ">25% OFF</span>
   </div>
      <span className="bg-black text-white p-2  ">This offer has expired!</span>
    </div>
  </div>

</div>
{/* 
    display: 
;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;

*/}
 


</>
  );
};

export default SectionService;
