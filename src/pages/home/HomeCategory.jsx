import NewDeals from "../../components/homeCategory/NewDeals";
import CategorySwiper from "../../components/homeCategory/CategorySwiper";
import Layout from "../../components/Layout/Layout";
import TopInteresting from "../../components/homeCategory/TopInteresting";
import SwiperFooter from "../../components/homeCategory/SwiperFooter";
// import Test from "../Test";
import MouseParallax from "../../components/design/MouseParallax";
 
const HomeCategory = () => {
  
 
  return (
    <Layout>
      <div className="gap-4">
        <div className="flex flex-start  mb-4 px-[2%] py-[2%]">
          <CategorySwiper />
        </div>

        <div className="w-[100%] flex flex-wrap items-center justify-center flex-row mb-4 ">
          <NewDeals />
        </div>

        <div className="w-[100%] flex flex-wrap items-center justify-center flex-row py-[3%] px-[2%] mb-4 ">
          <div className="flex flex-col flex-wrap gap-1 items-center w-[85%] mb-[2rem]">
            <b>
              <h1 className="text-3xl text-center ">#Top Interesting</h1>
            </b>
            <p className="w-[100%] md:max-w-[60%] text-center">
              Forget about struggling to do everything at once: taking care of
              the family, running your business, walking your dog, cleaning the
            </p>
            <div className="flex flex-wrap items-center justify-center gap-[2rem] text-[20px] mt-[16px]">
              <h1 className="hover:text-customTeal cursor-pointer duration-300">
                Newest
              </h1>
              <h1 className="hover:text-customTeal cursor-pointer duration-300">
                Featured
              </h1>
              <h1 className="hover:text-customTeal cursor-pointer duration-300">
                Best Sellers
              </h1>
              <h1 className="hover:text-customTeal cursor-pointer duration-300">
                On sale
              </h1>
              <h1 className="hover:text-customTeal cursor-pointer duration-300">
                Cheapest
              </h1>
            </div>
          </div>

          <TopInteresting />
        </div>

        <SwiperFooter />
    <MouseParallax/>
      </div>
    </Layout>
  );
};

export default HomeCategory;
