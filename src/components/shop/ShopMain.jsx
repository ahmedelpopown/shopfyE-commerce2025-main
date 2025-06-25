import { useState } from "react";
import ProductCard from "../../ProductCard"
import Card from "../../pages/Card"

 import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { fetchProducts }  from '@/store/productSlice';

const ShopMain = () => {
    // const itemsPerPage = 8;
  // const [currentPage, setCurrentPage] = useState(1);

  // const totalItems = ProductCard.ProductCard.length;
  // const totalPages = Math.ceil(totalItems / itemsPerPage);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentItems = ProductCard.ProductCard.slice(startIndex, endIndex);

  const dispatch = useDispatch();

  const { list: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
    if (loading) return <p>جاري تحميل المنتجات...</p>;
  if (error) return <p className="text-red-500">خطأ: {error}</p>;


  // const goToPage = (page) => {
  //   if (page >= 1 && page <= totalPages) {
  //     setCurrentPage(page);
  //   }
  // };
 
   return (
    <>
 <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
         {products?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      {/* <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          السابق
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          التالي
        </button>
      </div> */}
    </>
  )
}

export default ShopMain