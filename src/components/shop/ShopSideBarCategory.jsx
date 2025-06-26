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
      <div className="p-1 font-medium">
        <h1>Product Category</h1>
      </div>
      <div className="gap-4 p-2">
        {categories.map((cat) => (
          <div
            className={`gap-4 p-2 cursor-pointer rounded hover:bg-gray-100 ${
              filters.categoryId === cat.id ? "bg-gray-200 font-bold" : ""
            }`}
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
          >
            <h4 className="text-gray-500">{cat.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSideBarCategory;
