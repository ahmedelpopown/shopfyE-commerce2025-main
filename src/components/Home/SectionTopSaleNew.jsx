import img1 from "../../assets/adv-banner-img1.png";
import img2 from "../../assets/adv-banner-img2.png";
import img3 from "../../assets/adv-banner-img3.png";
const SectionTopSaleNew = () => {
  return (
    <div className=" flex items-center lg:h-[100vh] justify-center w-[100%] mt-[9%]">
     
      <div className="w-[100%] grid lg:h-[100%] grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] px-[2%] lg:px-[9%] md:gap-0 gap-[2rem] items-center justify-center">
    
        <div className="flex justify-center lg:h-[100%] h-[100%] items-center flex-wrap relative px-[1rem] flex-col w-[100%]">
          <div className="w-full lg:h-[50%] h-[11rem]">
            <div
              className="imgTop relative   bg-center bg-no-repeat bg-cover  w-full h-[11rem] lg:min-h-[100%]"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className="absolute   justify-start flex items-start md:text-[50px] text-[30px]    flex-col md:top-[1rem] top-[5rem] left-[2rem]">
                <span className="bg-black text-white p-1 px-2  md:text-[0.3em] text-[0.4em]">
                  New
                </span>
                <p className="mt-[0.5rem] mb-[1rem] text-[0.4em] font-[500] lg:text-[30px]">
                  Checked Blouse With Ruffle Trims
                </p>
                <a
                  href="#"
                  className="underline text-gray-500 md:text-[0.3em] text-[0.4em]"
                >
                  Shop Now
                </a>
              </div>
            
            </div>
          </div>

          <div className="w-full h-[11rem] lg:h-[50%]">
            <div
              className="  relative   bg-center bg-no-repeat bg-cover  w-full lg:min-h-[100%] min-h-[11rem]"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="absolute   justify-start flex items-end md:text-[50px] text-[30px] flex-wrap   flex-col md:top-[1rem] top-[3rem] right-[2rem]">
                <span className="  text-white p-1 px-2 md:text-[0.3em] text-[0.4em] bg-[#fff3cd]">
                  sale
                </span>
                <p className="mt-[0.5rem] mb-[1rem] text-[0.4em] font-[500] text-end   ">
                  trousers with contrasting topstitching
                </p>
                <a
                  href="#"
                  className="underline text-gray-500 md:text-[0.3em] text-[0.4em]"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:min-h-[100%] h-[11rem] px-[1rem]">
          <div
            className="  relative    bg-center bg-no-repeat bg-cover  w-full min-h-[100%]"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="absolute   justify-start flex items-end md:text-[50px] text-[30px] flex-wrap   flex-col top-[1rem] left-[2rem]">
              <span className="  text-black p-1 px-2 text-[1em] ">Tops</span>
              <p className="mt-[0.5rem] mb-[1rem] text-[0.4em] font-[500] lg:text-[30px]">
                Season festival
              </p>
              <a href="#" className=" text-white text-[0.4em] bg-black p-2">
                Buy Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTopSaleNew;
