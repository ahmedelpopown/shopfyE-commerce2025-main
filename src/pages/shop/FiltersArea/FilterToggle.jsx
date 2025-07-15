/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axiosClient from "@/hooks/axiosClient";
import { useFilter } from "@/hooks/useFilter";
import { fetchCategories } from "@/store/categoriesSlice";

// كمبوننتات الفلاتر
import CategorySelect from "./CategorySelect";
import RatingSelect from "./RatingSelect";
import ColorSelect from "./ColorSelect";
import SizeSelect from "./SizeSelect";
import PriceRangeFilter from "@/components/shop/PriceRangeFilter";

const FilterToggle = ({ onFilterChange }) => {
  // إظهار/إخفاء الفلاتر
  const [showFilters, setShowFilters] = useState(false);

  // state للفلاتر
  const [keyword, setKeyword] = useState("");
  const [rating, setRating] = useState("");
  
  
  
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [priceRangeLimits, setPriceRangeLimits] = useState({ min: 0, max: 3000 });
  const [loadingPrice, setLoadingPrice] = useState(true);

  // خيارات الفلاتر (تأتي من API)
  const [ratingsOptions, setRatingsOptions] = useState([]);
  const [colorsOptions, setColorsOptions] = useState([]);
  const [sizesOptions, setSizesOptions] = useState([]);
 

  const { updateFilter } = useFilter();
  const dispatch = useDispatch();

  // جلب التصنيفات من Redux
  const { list: categories, loading: loadingCategories } = useSelector(
    (state) => state.categories
  );

  // تحويل التصنيفات إلى شكل متوافق مع <Select />
  const categoryOptions = categories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  // ✅ جلب التقييمات (Ratings)
  useEffect(() => {
    axiosClient.get("/ratings").then((res) => {
      setRatingsOptions(res.data);
    });
  }, []);

  // ✅ جلب الألوان والمقاسات (من نفس /products-web)
  useEffect(() => {
    axiosClient.get("/products-web").then((res) => {
      setColorsOptions(res.data.colors.map(c => ({ value: c.id, label: c.name })));
      setSizesOptions(res.data.sizes.map(s => ({ value: s.id, label: s.name })));
    });
  }, []);

  // ✅ جلب مدى السعر من API
  useEffect(() => {
    axiosClient.get("/price-range").then((res) => {
      let { min, max } = res.data;
      const STEP = 10;

      // تقريب الأرقام لأقرب مضاعف
      min = Math.floor(min / STEP) * STEP;
      max = Math.ceil(max / STEP) * STEP;

      setPriceRangeLimits({ min, max });
      setPriceRange([min, max]);
      setLoadingPrice(false);
    });
  }, []);

  // ✅ جلب التصنيفات من Redux عند التحميل
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // ✅ عند تغيير مدى السعر
  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  // ✅ عند الضغط على "تطبيق الفلاتر"
const applyFilters = () => {
  updateFilter("keyword", keyword);
  updateFilter("categoryId", selectedCategory);
  updateFilter("priceMin", priceRange[0]);
  updateFilter("priceMax", priceRange[1]);
  updateFilter("rating", rating);
  updateFilter("color", selectedColor);
updateFilter("size", selectedSize);
};
  

  // ✅ عند الضغط على "إعادة ضبط"
  const resetFilters = () => {
    setKeyword("");
    setSelectedCategory(null);
    setRating("");
    setSelectedColor(null);
    setSelectedSize(null);
    setPriceRange([priceRangeLimits.min, priceRangeLimits.max]);

    updateFilter("keyword", "");
    updateFilter("categoryId", null);
    updateFilter("priceMin", null);
    updateFilter("priceMax", null);
    updateFilter("rating", null);
    updateFilter("color", null);
    updateFilter("size", null);
  };

  return (
    <>
  
    <div className="w-full">
      {/* زر إظهار/إخفاء الفلاتر */}
   

      {/* صندوق الفلاتر */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showFilters ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white border rounded shadow">
          <h2 className="mb-4 text-lg font-semibold">فلاتر المنتجات</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* ✅ حقل البحث بالكلمة المفتاحية */}
            <input
              type="text"
              placeholder="كلمة مفتاحية"
              className="w-full px-3 py-2 border rounded"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            {/* ✅ فئة المنتج */}
            <CategorySelect
              options={categoryOptions}
              value={categoryOptions.find((o) => o.value === selectedCategory)}
              onChange={(selected) => setSelectedCategory(selected?.value || null)}
            />

            {/* ✅ التقييم */}
     <RatingSelect
  options={ratingsOptions}
  value={
    rating
      ? ratingsOptions.find((opt) => opt.value === rating)
      : null
  }
  onChange={(selected) => setRating(selected?.value || "")}
/>


            {/* ✅ السعر */}
            {!loadingPrice && (
              <PriceRangeFilter
                min={priceRangeLimits.min}
                max={priceRangeLimits.max}
                value={priceRange}
                onChange={handlePriceRangeChange}
              />
            )}

            {/* ✅ اللون */}
        <ColorSelect
  options={colorsOptions}
  value={
    selectedColor
      ? colorsOptions.find((o) => o.value === selectedColor)
      : null
  }
  onChange={(selected) => setSelectedColor(selected?.value || null)}
/>

            {/* ✅ المقاس */}
 <SizeSelect
  options={sizesOptions}
  value={selectedSize ? sizesOptions.find((o) => o.value === selectedSize) : null}
  onChange={(selected) => setSelectedSize(selected?.value || null)}
/>

          </div>

          {/* ✅ أزرار التحكم */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={applyFilters}
              className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700"
            >
              تطبيق الفلاتر
            </button>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-gray-700 bg-gray-100 border rounded hover:bg-gray-200"
            >
              إعادة ضبط
            </button>
          </div>
        </div>
      </div>
    </div>
         <div className="mb-4 w-[20%]">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 text-white transition bg-teal-600 rounded hover:bg-teal-700"
        >
          {showFilters ? "إخفاء الفلاتر" : "إظهار الفلاتر"}
        </button>
      </div>
    </>
  );
};

export default FilterToggle;
