import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "@/store/categoriesSlice";
import { useFilter } from "../../hooks/useFilter"; // ✅ لازم ده

const ShopSideBarCategory = () => {
  const dispatch = useDispatch();
  const { list: categories, loading, error } = useSelector((state) => state.categories);
  const { updateFilter, filters } = useFilter();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

const handleCategoryClick = (id) => {
  updateFilter("categoryId", id);
};
   if (loading) return <p>جاري تحميل الأقسام...</p>;
  if (error) return <p className="text-red-500">خطأ: {error}</p>;

  return (
    <div className="w-full">
      <div className="p-4 text-base font-bold tracking-widest uppercase text-start pl-[0.2rem]">
        <h1>Product Category</h1>
      </div>
      <div className="gap-4 p-2 scroll-container">
      
        {categories.map((cat) => (
  <div
    className={`p-2 cursor-pointer rounded ${
      filters.categoryId === cat.id ? "font-bold" : ""
    }`}
    key={cat.id}
    onClick={() => handleCategoryClick(cat.id)}
  >
    <h4 className="text-gray-500 transition-all duration-200 hover:text-customTeal">{cat.name}</h4>
    <ul className="mt-2 ml-8 ">
      {cat.children?.map((sup, index) => (
      <li key={sup?.id ?? `child-${cat.id}-${index}`} className="mt-2 text-gray-500 transition-all duration-200 hover:text-customTeal">
  {sup?.name}
</li>
      ))}
    </ul>
  </div>
))}

      </div>
    </div>
  );
};

export default ShopSideBarCategory;
