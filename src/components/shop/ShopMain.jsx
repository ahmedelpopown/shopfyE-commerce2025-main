import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/store/productSlice";
import { useFilter } from "@/hooks/useFilter";
import Card from "../../pages/Card";

const ShopMain = () => {
  const dispatch = useDispatch();
  const { filters, updateFilter } = useFilter();
  const { list: products, meta, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch, filters]);

  const goToPage = (page) => {
    updateFilter("page", page);
  };

  return (
    <>
      {loading && <p>جاري تحميل المنتجات...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      {meta.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => goToPage(meta.currentPage - 1)}
            disabled={meta.currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            السابق
          </button>

          {Array.from({ length: meta.totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                meta.currentPage === i + 1
                  ? "bg-[#04d39f] text-white"
                  : "bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(meta.currentPage + 1)}
            disabled={meta.currentPage === meta.totalPages}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            التالي
          </button>
        </div>
      )}
    </>
  );
};

export default ShopMain;
