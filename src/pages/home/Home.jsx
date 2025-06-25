 
import Layout from "../../components/Layout/Layout"
 import LandingDefault from "../../components/Home/landing/LandingDefault"
import { useEffect, useState } from "react";
import LandingMd from "../../components/Home/landing/LandingMd";
import SectionTow from "../../components/Home/SectionTow";
import Card from "../Card";
import data from "../../ProductCard"
import SectionTopSaleNew from "../../components/Home/SectionTopSaleNew";
import SectionFive from "../../components/Home/SectionFive";
import SectionAbout from "../../components/Home/SectionAbout";
import SectionSex from "../../components/Home/SectionSex";
import SectionBlog from "../../components/Home/SectionBlog";


 const Home = ( ) => {
 
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return width;
  }
  const width = useWindowWidth();
  return (
    <Layout>
 <section className="h-full w-full bg-landingDefault font-[Poppins] md:bg-top">
  <div className="flex flex-col items-center justify-center h-full text-center">
    {width >= 780 ?  <>
      <LandingDefault />
    
    </>:
     
    
    <>
    <LandingMd/>
    </>}
 
  </div>
  
</section>
<SectionTow/>
<section className="w-[100%]  flex min-h-[100vh] flex-col flex-wrap content-center justify-center items-center">
<div className="flex flex-col flex-wrap gap-1 items-center w-[85%] mb-[2rem]">
        <b>
          <h1 className="text-3xl text-center ">Top Selling Products</h1>
        </b>
        <p className="max-w-[40%] text-center">
          Forget about struggling to do everything at once: taking care of the
          family, running your business etc.
        </p>
      </div>
      {/* 
          
  


      */}
<div   className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] justify-center items-center w-[85%] md:grid-cols-2 lg:grid-cols-4 gap-8">
  {data.ProductCard.map((item, index) => (
  
     <Card key={index} item={item} />
    
 
  ))}
</div>
</section>
<SectionTopSaleNew/>
<SectionFive/>
<SectionAbout/>a
<SectionSex/>
<section className="min-h-[50vh] py-[2%] px-[9%]">
<SectionBlog/>

</section>
</Layout>
  )
}

export default Home