import SectionService from "../../components/HomeMega/SectionService";
import LandingSwiper from "../../components/HomeMega/LandingSwiper";
import Layout from "../../components/Layout/Layout";
import PopularProduct from "../../components/HomeMega/PopularProduct";
import img from "../../assets/HomeCategory/HomeMega/01-2.png";
import Special from "../../components/HomeMega/Special";
import SidebarMenu from "../../components/HomeMega/SidebarMenu";
import RequestBox from "../../components/HomeMega/RequestBox";
import SwiperLeft from "../../components/HomeMega/swiperLeft";
import TeamSUPPORT from "../../components/HomeMega/TeamSUPPORT";
// import Card from "../../pages/Card"
// import ProductCard from "../../ProductCard"

const HomeMega = () => {
  
  return (
    <Layout>
      <div className="gap-4 items-start flex flex-wrap flex-row-reverse mdS:flex-row justify-center  ">
        {/* left site */}
       




        {/* right site */}
        <div className="  md:w-[60%] w-[100%] p-3 min-h-[85rem]">
          <LandingSwiper />

          <SectionService />
          <PopularProduct />
          <div
            className="w-full h-[7rem] bg-cover bg-center flex items-center p-4  bg-textBg  
            
            "
            style={{ backgroundImage: `url(${img})` }}
          >
            {/* المحتوى الداخلي */}
            <div className="flex flex-wrap flex-row w-full justify-between items-center">
              {/* النص */}
              <div className="flex flex-col ">
                <h4 className="text-[15px] uppercase  text-white font-bold">
                  Shop all new
                </h4>
                <h1 className="text-[20px] uppercase  tracking-[2px]  text-white font-bold">
                  Electronics Items
                </h1>
              </div>

              {/* زر الشراء */}
              <button className="bg-customTeal text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                Shop Now
              </button>
            </div>
          </div>


          <Special />
        </div>
        <div className=" justify-center   w-[100%] mdS:w-[30%]  md:flex flex-wrap flex-row   min-h-[85rem]">
         
         <div className= " hidden mdS:flex w-[100%]">
<SidebarMenu/>
         </div>
         <div className="p-4 ">
         <RequestBox/>
         </div>
         <div className="p-4 relative max-w-[100%] ">
      <SwiperLeft/>
         </div>
         <div className=" max-w-[100%] ">
      <TeamSUPPORT/>
         </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeMega;
