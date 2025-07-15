 
import { useEffect, useState } from "react";
 
 
 import ShopMain from "../../../components/shop/ShopMain";
 import ShopSideBarCategory from "../../../components/shop/ShopSideBarCategory";
import PriceRangeFilter from "../../../components/shop/PriceRangeFilter";
import FilterBySize from "../../../components/shop/FilterBySize";
import ShopFilterByColor from "../../../components/shop/ShopFilterByColor";
import ProductBrand from "../../../components/shop/ProductBrand";
 import axios from "@/hooks/axiosClient";
import { useFilter } from "../../../hooks/useFilter";
import useGridView from "@/context/useGridView";
 

 
const NoPageHeader = () => {


  
  useEffect(() => {
    document.title = "عنوان الصفحة | My Shop";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "وصف قصير لصفحة المتجر.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);
  const { updateFilter } = useFilter();
 const [priceRangeLimits, setPriceRangeLimits] = useState({
    min: 0,
    max: 3000,
  });
  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    updateFilter("priceMin", range[0]);
    updateFilter("priceMax", range[1]);
  };

 
 
  const [priceRange, setPriceRange] = useState([0, 3000]);

useEffect(() => {
  axios.get("/price-range").then((res) => {
    let { min, max } = res.data;

    const STEP = 10;

    // ✅ نخلي القيم مناسبة للـ step
    min = Math.floor(min / STEP) * STEP;
    max = Math.ceil(max / STEP) * STEP;

    setPriceRangeLimits({ min, max });
    setPriceRange([min, max]);
  });
}, []);
const { viewMode } = useGridView();
  const gridColsClass =
    {
      xl: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
      lg: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
      md: "grid-cols-1 sm:grid-cols-2",
      sm: "grid-cols-1",
    }[viewMode] || "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  return (
    <>
    
  
        <div className="flex flex-row flex-wrap   items-start justify-between   px-[4rem] text-[16px] font-[500] py-[1rem]">
          <h1>Shop</h1>
          <span className="flex flex-row flex-wrap items-start gap-1">
            <h2>Home</h2>/<h2>Shop</h2>
          </span>
        </div>

       

        <section className="w-full    xs:p-[1rem] lg:flex lg:flex-row lg:justify-between    h-full ">
          <section className=" lg:w-[30%]">
            <div className="max-h-[300px] w-full   ">
              <ShopSideBarCategory />
            </div>

            <div className="w-full">
              <PriceRangeFilter
                min={priceRangeLimits.min}
                max={priceRangeLimits.max}
                value={priceRange}
                onChange={handlePriceRangeChange}
              />
            </div>

            <div className="my-6">
        <h4 className="text-lg font-semibold uppercase ">Filter by size</h4>

              <FilterBySize />
            </div>

            <div className="relative group">
              <ShopFilterByColor
             
              />
            </div>
            <div className="relative group">
              <ProductBrand />
            </div>
          </section>
{/*     justify-content: center;
    margin-top: 1rem; */}
          <main className="flex lg:w-[70%] flex-row flex-wrap h-full justify-center w-full mt-[1rem] mb-[3rem]">
            <ShopMain />
          </main>
        </section>
 
    </>
  );
};

export default NoPageHeader;