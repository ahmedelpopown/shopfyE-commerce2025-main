import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Land from "./Land";
import ShopMain from "../../components/shop/ShopMain";
import ShopSideBarCategory from "../../components/shop/ShopSideBarCategory";
import PriceRangeFilter from "../../components/shop/PriceRangeFilter";
import FilterBySize from "../../components/shop/FilterBySize";
import ShopFilterByColor from "../../components/shop/ShopFilterByColor";
import ProductBrand from "../../components/shop/ProductBrand";
import FilterProvider from "../../providers/FilterProvider.jsx";
import axios from "@/hooks/axiosClient";
import { useFilter } from "../../hooks/useFilter";

const allProducts = [
  { id: 1, color: "Red" },
  { id: 2, color: "Blue" },
  { id: 3, color: "Red" },
  { id: 4, color: "Green" },
  { id: 5, color: "Green" },
  { id: 6, color: "Yellow" },
  { id: 7, color: "Black" },
  { id: 8, color: "White" },
  { id: 9, color: "Purple" },
  { id: 10, color: "Gray" },
];
const Shop = () => {
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

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    updateFilter("priceMin", range[0]);
    updateFilter("priceMax", range[1]);
  };

  const [filtered, setFiltered] = useState(allProducts);

  const [priceRangeLimits, setPriceRangeLimits] = useState({
    min: 0,
    max: 3000,
  });
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

  return (
    <Layout>
    
        <div className="flex flex-row flex-wrap   items-start justify-between   px-[4rem] text-[16px] font-[500] py-[1rem]">
          <h1>Shop</h1>
          <span className="flex flex-row flex-wrap items-start gap-1">
            <h2>Home</h2>/<h2>Shop</h2>
          </span>
        </div>

        <Land />

        <section className="w-full p-[3rem]   flex flex-wrap flex-row justify-center items-start">
          <section className="w-1/4">
            <div className="w-full">
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
              <FilterBySize />
            </div>

            <div className="relative group">
              <ShopFilterByColor
                products={allProducts}
                onFilter={setFiltered}
              />
            </div>
            <div className="relative group">
              <ProductBrand />
            </div>
          </section>

          <main className="w-3/4 ">
            <ShopMain />
          </main>
        </section>
 
    </Layout>
  );
};

export default Shop;
