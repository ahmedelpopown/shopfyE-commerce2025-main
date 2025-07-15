import { useEffect, useState } from "react";
import CardArea from "../FiltersArea/cardArea/CardArea";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/productSlice";
import { useFilter } from "@/hooks/useFilter";
import ViewSort from "@/components/shop/ViewSort";
import useGridView from "@/context/useGridView";
import { useSidebar } from "@/context/SidebarToggleContext";
import ShopSideBarCategory from "@/components/shop/ShopSideBarCategory";
import PriceRangeFilter from "@/components/shop/PriceRangeFilter";
import axiosClient from "@/hooks/axiosClient";
import FilterBySize from "@/components/shop/FilterBySize";
import ShopFilterByColor from "@/components/shop/ShopFilterByColor";
import ProductBrand from "@/components/shop/ProductBrand";
import { FaFilter } from "react-icons/fa";
import Land from "../Land";

const HiddenSidebar = () => {
  const dispatch = useDispatch();
  const { filters, updateFilter } = useFilter();
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();

  const {
    list: products = [],
    meta = {
      totalPages: 0,
      currentPage: 1,
      totalItems: 0,
    },
    loading = false,
    error = null,
  } = useSelector((state) => state.products || {});

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch, filters]);

  const goToPage = (page) => {
    if (page >= 1 && page <= meta.totalPages) {
      updateFilter("page", page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // إنشاء مجموعة صفحات للعرض (لتحسين واجهة Pagination)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (meta.totalPages <= maxVisiblePages) {
      return Array.from({ length: meta.totalPages }, (_, i) => i + 1);
    }

    let startPage = Math.max(meta.currentPage - 2, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, meta.totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < meta.totalPages) {
      if (endPage < meta.totalPages - 1) pages.push("...");
      pages.push(meta.totalPages);
    }

    return pages;
  };
  const { viewMode } = useGridView();
  const [priceRangeLimits, setPriceRangeLimits] = useState({
    min: 0,
    max: 3000,
  });
  // eslint-disable-next-line no-unused-vars
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [tempPriceRange, setTempPriceRange] = useState([0, 3000]);

  const handleApplyPriceFilter = () => {
    setPriceRange(tempPriceRange);
    updateFilter("priceMin", tempPriceRange[0]);
    updateFilter("priceMax", tempPriceRange[1]);
  };

const gridColsClass = {
  
  // xl: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(35vh,1fr))] gap-y-[5rem] gap-x-0",
  xl: "grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(40vh,1fr))] gap-y-[10rem] gap-x-0  ",
   lg: "grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(55vh,1fr))] gap-y-[10rem] gap-x-0",
  md: "grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(80vh,1fr))] gap-y-[10rem] gap-x-0",
  sm: "grid-cols-1",
}[viewMode] || "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  useEffect(() => {
    axiosClient.get("/price-range").then((res) => {
      let { min, max } = res.data;

      const STEP = 10;
      min = Math.floor(min / STEP) * STEP;
      max = Math.ceil(max / STEP) * STEP;

      setPriceRangeLimits({ min, max });
      setPriceRange([min, max]);
      setTempPriceRange([min, max]); // مهم عشان السلايدر يشتغل بقيم أولية
    });
  }, []);
  return (
    <>
    <Land/>
      <div className="container p-0 md:px-4 md:py-8 h-full  mt-4 mx-auto my-[0] flex flex-wrap flex-col gap-[5rem] items-center justify-center">
        {loading && (
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {[...Array(6)].map((_, i) => (
              <div
                className="animate-pulse bg-gray-200 rounded-md h-[350px] w-full"
                key={i}
              ></div>
            ))}
          </div>
        )}

        {error && (
          <div className="py-8 text-center">
            <p className="text-lg text-red-500">{error}</p>
            <button
              onClick={() => dispatch(fetchProducts(filters))}
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
            >
              إعادة المحاولة
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {products.length === 0 ? (
              <div className="py-12 text-center">
                {/* <FilterToggle/> */}
                <p className="text-lg text-gray-500">لا توجد منتجات متاحة</p>
              </div>
            ) : (
              <>
                {/* grid-cols-[repeat(auto-fit,minmax(250px,1fr)) */}
                <div className="flex flex-row flex-wrap justify-center w-full gap-4">
                  {/* <FilterToggle/> */}
                  {/* 
     width: 100%;
    display: flex
;
    gap: 8rem;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
 */}
                 
                    <button
                      onClick={toggleSidebar}
                      className="text-xs  font-bold uppercase border h-[30px] p-[10px] -tracking-wider text-textColor"
                    >
                      ☰ show sidebar
                    </button>

                    <ViewSort />
                  

                  {/* السايدبار */}
                  {isOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-[10000] bg-[rgba(0,0,0,0.8)]  "
                        onClick={closeSidebar}
                      ></div>
                      <div className="fixed top-0 left-0 w-[22%] h-full bg-white   shadow-md z-[10010] p-[1em] flex flex-wrap flex-row  justify-start ">
                        <section className="w-full  overflow-y-scroll max-h-[100vh] scroll-container">
                          <div className="flex  items-center justify-between border-b p-[1em]">
                            <h2 className="text-lg font-semibold uppercase ">
                              Close
                            </h2>
                            <button onClick={closeSidebar}>✕</button>
                          </div>
                          <div className="max-h-[300px] w-full   ">
                            <ShopSideBarCategory />
                          </div>

                          <div className="flex flex-row flex-wrap w-full">
                            <PriceRangeFilter
                              min={priceRangeLimits.min}
                              max={priceRangeLimits.max}
                              value={tempPriceRange}
                              onChange={setTempPriceRange}
                            />
                            <button
                              onClick={handleApplyPriceFilter}
                              className=" px-4   w-full  flex justify-start items-center   rounded hover:text-[#03b386] transition"
                            >
                              {/* display: flex
;
    justify-content: flex-end;
    align-items: center; */}
                            <FaFilter />
                            Filter
                            </button>
                          </div>

                          <div className="my-6">
                            <h4 className="text-lg font-semibold uppercase ">
                              Filter by size
                            </h4>

                            <FilterBySize />
                          </div>

                          <div className="relative group">
                            <ShopFilterByColor />
                          </div>
                          <div className="relative mb-4 group">
                            <ProductBrand />
                          </div>
                        </section>
                      </div>
                    </>
                  )}
                  <div className={`relative grid w-[100%]   ${gridColsClass}`}>
                    {products.map((item) => (
 
                        <CardArea key={item.id} item={item} />
                       
                    ))}
                  </div>
                </div>

                {meta.totalPages > 1 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-8">
                    <button
                      onClick={() => goToPage(meta.currentPage - 1)}
                      disabled={meta.currentPage === 1}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                    >
                      <span>السابق</span>
                    </button>

                    {getPageNumbers().map((page, index) =>
                      page === "..." ? (
                        <span key={`ellipsis-${index}`} className="px-4 py-2">
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`px-4 py-2 rounded-lg ${
                            meta.currentPage === page
                              ? "bg-[#04d39f] text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}

                    <button
                      onClick={() => goToPage(meta.currentPage + 1)}
                      disabled={meta.currentPage === meta.totalPages}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                    >
                      <span>التالي</span>
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default HiddenSidebar;
