 
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/store/productSlice";
import { useFilter } from "@/hooks/useFilter";
import Card from "../../pages/Card";
import ViewSort from "./ViewSort";
  import  useGridView  from "@/context/useGridView";
const ShopMain = () => {
  const dispatch = useDispatch();
  const { filters, updateFilter } = useFilter();
 

 
  const { 
    list: products = [], 
    meta = {
      totalPages: 0,
      currentPage: 1,
      totalItems: 0
    }, 
    loading = false, 
    error = null 
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
      if (startPage > 2) pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < meta.totalPages) {
      if (endPage < meta.totalPages - 1) pages.push('...');
      pages.push(meta.totalPages);
    }

    return pages;
  };
   const { viewMode } = useGridView();
const gridColsClass = {
  xl: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(30vh,1fr))] gap-y-[4rem]   ",
   lg: "grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(45vh,1fr))] gap-y-[6rem]",
  md: "grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(69vh,1fr))] gap-y-[10rem] ",
  sm: "grid-cols-1 gap-y-[4rem]",
}[viewMode] || "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  return (
    <div className=" p-0 md:px-4 md:py-8 h-full  mx-auto my-[0] flex flex-wrap flex-col gap-[5rem] items-center justify-center">
      {loading && (
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {[...Array(6)].map((_, i) => (
       
<div className="animate-pulse bg-gray-200 rounded-md  h-[350px] w-full" key={i}></div>
          ))}
        </div>
      )}

      {error && (
        <div className="py-8 text-center ">
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
              <p className="text-lg text-gray-500">لا توجد منتجات متاحة</p>
            </div>
          ) : (
            <>
           
            {/* grid-cols-[repeat(auto-fit,minmax(250px,1fr)) */}
       <div className="flex flex-row flex-wrap items-start justify-end ">
  <ViewSort />
       <div className={`relative grid  w-full ${gridColsClass}`}>
    {products.map((item) => (
       
    
      <Card  item={item} key={item.id} />

          
    
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

                  {getPageNumbers().map((page, index) => (
                    page === '...' ? (
                      <span key={`ellipsis-${index}`} className="px-4 py-2">...</span>
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
                  ))}

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
  );
};

export default ShopMain;