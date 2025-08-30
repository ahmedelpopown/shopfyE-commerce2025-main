/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { addToCart } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useGridView from "@/context/useGridView";
import { useCardLayout } from "@/context/CardLayoutContext";
import QuickViewModal from "@/components/QuickViewModal";
import CompareModal from "@/components/CompareModal";
import { useCompare } from "@/context/CompareContext";

const Card = ({ item }) => {
  const { layout } = useCardLayout(); // ← نقرأ نوع العرض
  const { addToCompare } = useCompare();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const totalQty = item.variants.reduce((sum, v) => sum + v.quantity, 0);

  const [showOptions, setShowOptions] = useState(false);

  const handleActionClick = () => {
    if (totalQty === 0) return; // لو مفيش كمية، مفيش أكشن

    if (hasOptions) {
      setShowOptions(true); // لو المنتج عنده مقاسات أو ألوان، افتح نافذة الخيارات
    } else {
      // لو مفيش خيارات، أضفه مباشر إلى السلة
      dispatch(
        addToCart({
          id: item.id,
          name: item.name,
          price: item.price,
          image: `http://127.0.0.1:8000/storage/${item.images[0]?.image}`,
          quantity: 1,
          variantId: item.variants[0]?.id ?? null,
          maxQuantity: item.variants[0]?.quantity ?? 1,
          color: item.variants[0]?.color ?? null,
          size: item.variants[0]?.size ?? null,
        })
      );
      alert("✅ تمت الإضافة إلى السلة");
    }
  };

  const { compareItems, showCompare, closeCompare, removeFromCompare } =
    useCompare();
  const hasOptions = item.variants.some(
    (v) => v.color_id !== null || v.size_id !== null
  );

  const allColors = item.variants
    .filter((v) => v.color !== null)
    .map((v) => v.color)
    .filter((v, i, arr) => v?.id && arr.findIndex((s) => s?.id === v.id) === i);

  const allSizes = item.variants
    .filter((v) => v.size !== null)
    .map((v) => v.size)
    .filter((v, i, arr) => arr.findIndex((s) => s.id === v.id) === i);

  const handleColorSelect = (id) => {
    setSelectedColor(id);
    setSelectedSize(null);
  };
  useEffect(() => {
    const hasColors = item.variants.some((v) => v.color_id !== null);
    if (!hasColors && item.variants.length > 0) {
      setSelectedColor(null);
      setSelectedSize(item.variants[0].size_id);
    }
  }, [item]);
  const handleAddToCart = () => {
    if (!user) {
      alert("يجب تسجيل الدخول أولًا لإضافة المنتج إلى السلة");
      navigate("/login");
      return;
    }

    const selectedVariant = item.variants.find(
      (v) => v.color_id === selectedColor && v.size_id === selectedSize
    );

    if (!selectedVariant) {
      alert("هذا الخيار غير متاح");
      return;
    }

    // 🔴 تحقق الكمية
    if (quantity > selectedVariant.quantity) {
      alert(
        `الكمية المطلوبة غير متوفرة، المتاح فقط ${selectedVariant.quantity}`
      );
      return;
    }

    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: `http://127.0.0.1:8000/storage/${item.images[0]?.image}`,
        quantity,
        variantId: selectedVariant.id,
        maxQuantity: selectedVariant.quantity, // 🟢 مهم جداً هنا
        color: selectedVariant.color,
        size: selectedVariant.size,
      })
    );
    setShowOptions(false); // إغلاق النافذة
  };
  const { viewMode } = useGridView();

  const NoPageHeader = layout === "NoPageHeader";
  const FiltersArea = layout === "FiltersArea";
  const FilterStyleWidget = layout === "FilterStyleWidget";
  const DefaultShop = layout === "DefaultShop";
  const HiddenSidebar = layout === "HiddenSidebar";
  const ProductListView = layout === "ProductListView";
  const ProductInfoPage = layout === "ProductInfoPage";
const ProductInfoPageLeftSidebar = layout === "ProductInfoPageLeftSidebar"; // ✅ الجديد
const stickyGalleryNoSidebar = layout === "stickyGalleryNoSidebar"; // ✅ الجديد
  
  const scaleClass =  {
      xl: `scale-90    
                    ${DefaultShop ? "h-[45vh] w-[35vh] " : ""} 
                    ${ProductInfoPageLeftSidebar ? "h-[45vh] w-[32vh] " : ""} 
                    ${stickyGalleryNoSidebar ? "h-[55vh] w-[45vh] " : ""} 
                    ${ProductInfoPage ? "h-[50vh] w-[35vh] gap-x-4  " : ""} 
                    ${FiltersArea ? "h-[60vh] w-[45vh] " : ""} 
                    ${HiddenSidebar ? "h-[60vh] w-[45vh]" : ""} 
                    
                    
                    ${NoPageHeader ? "h-[50vh] w-[37vh]" : ""} 
                    ${FilterStyleWidget ? "h-[60vh] w-[45vh]" : ""} 
                    ${ProductListView ? "h-[45vh] w-[35vh]" : ""} 
              
                    `,
      lg: `scale-100   gap-y-[6rem]
                    ${DefaultShop ? "h-[55vh] w-[45vh] " : ""} 
                    ${ProductInfoPage ? "h-[45vh] w-[35vh] " : ""} 
                    ${ProductInfoPageLeftSidebar ? "h-[45vh] w-[35vh] " : ""} 
                    ${stickyGalleryNoSidebar ? "h-[55vh] w-[45vh] " : ""} 

                    ${FiltersArea ? "h-[60vh] w-[45vh]" : ""} 
                    ${HiddenSidebar ? "h-[60vh] w-[45vh]" : ""} 
                    ${NoPageHeader ? "h-[60vh] w-[45vh]" : ""} 
                    ${FilterStyleWidget ? "h-[60vh] w-[45vh]" : ""} 
                    ${ProductListView ? "h-[55vh] w-[45vh]" : ""} 

  `,
      md: `scale-[1.05]   ${DefaultShop ? "h-[85vh] w-[55vh]" : ""} 
                    ${ProductInfoPage ? "h-[45vh] w-[35vh] " : ""} 
                    ${ProductInfoPageLeftSidebar ? "h-[45vh] w-[35vh] " : ""} 
                    ${stickyGalleryNoSidebar ? "h-[55vh] w-[45vh] " : ""} 

                    ${FiltersArea ? "h-[60vh] w-[45vh]" : ""} 
                    ${HiddenSidebar ? "h-[60vh] w-[45vh]" : ""} 
                    ${NoPageHeader ? "h-[98vh] w-[65vh]" : ""} 
                    ${FilterStyleWidget ? "h-[60vh] w-[55vh]" : ""} 
                    ${ProductListView ? "h-[60vh] w-[30vh]" : ""} 
                    
                    `,
      sm: "scale-[1.1] h-[20vh] w-full",
    }[viewMode] || "scale-100 h-[20vh] w-[400px]";

  return (
    <>
      {viewMode === "sm" ? (
        <>
          {/*start QuickView  */}
          {showQuickView && (
            <QuickViewModal
              item={item}
              onClose={() => setShowQuickView(false)}
            />
          )}
          {/*end QuickView  */}

          {/* start compare modal */}
          {showCompare && compareItems.length > 0 && (
            <CompareModal
              items={compareItems}
              onClose={closeCompare}
              onRemove={removeFromCompare}
            />
          )}

          <div
            className="w-full h-[45vh]   flex gap-4 flex-wrap flex-row justify-start items-center gap-y-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative mt-auto transition-transform duration-500 ease-in-out transform w-[25%] h-full hover:z-50">
              <div className="relative h-full overflow-hidden bg-gray-100 ">
                <button
                  className="absolute z-10 p-2 transition rounded-full opacity-1 top-2 left-2 hover:bg-gray-100 group-hover:opacity-100"
                  onClick={() => setShowQuickView(true)} // ← هنا التعديل
                >
                  <FaEye className="text-gray-700 text-[18px]" />
                </button>

                <Link to={`/products/${item.id}`}>
                  {item.images.slice(0, 2).map((imgObj, idx) => (
                    <img
                      key={idx}
                      src={`http://localhost:8000/storage/${imgObj.image}`}
                      alt={`Product Image ${idx + 1}`}
                      className={`w-full h-full absolute top-0 cursor-default left-0 transition-all duration-700 ease-in-out ${
                        idx === 0
                          ? isHovered
                            ? "opacity-0 scale-105"
                            : "opacity-100 scale-100"
                          : isHovered
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                </Link>
              </div>
              <div
                className={`flex gap-3 flex-wrap flex-row justify-center  hover:text-white text-gray-500 btn rounded-none p-[0.7rem] bg-[#323232] hover:bg-[#323232] w-[90%] absolute font-thin text-sm bottom-[29%] left-[1.5vh] transition-all  duration-500 ${
                  isHovered
                    ? "opacity-100 -translate-y-4"
                    : "opacity-0 translate-y-0"
                }`}
              >
                <button className=" text-[18px] px-2 py-1 border-r text-gray-500 hover:text-white transition-all">
                  <FaHeart />
                </button>

                {totalQty === 0 ? (
                  <button
                    className="bg-gray-400 cursor-not-allowed btn "
                    disabled
                  >
                    Out of Stock
                  </button>
                ) : (
                  <button
                    onClick={hasOptions ? handleActionClick : handleAddToCart}
                    className="text-base "
                  >
                    {hasOptions ? "Select Option" : "Add to Cart"}
                  </button>
                )}

                <button
                  onClick={() => addToCompare(item)}
                  className="px-2 py-1 text-[20px] border-l text-gray-500 hover:text-blue-500 transition-all"
                >
                  <IoGitCompareOutline />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-between w-[70%]">
              <div className={`pt-2 pl-0 `}>
                {item.categories.slice(0, 1)?.map((category) => (
                  <p className="text-sm text-gray-500 uppercase" key={item.id}>
                    {category.name}
                  </p>
                ))}
                <h3 className="text-sm ">{item.name}</h3>
                <h3 className="text-sm ">{item.price}</h3>
                <h3 className="text-xs ">{item.description.slice(0, 100)}</h3>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {showQuickView && (
            <QuickViewModal
              item={item}
              onClose={() => setShowQuickView(false)}
            />
          )}
          {/*end QuickView  */}

          {/* start compare modal */}
          {showCompare && compareItems.length > 0 && (
            <CompareModal
              items={compareItems}
              onClose={closeCompare}
              onRemove={removeFromCompare}
            />
          )}

          <div
            className={`relative     mt-auto    hover:z-50 transform transition-transform duration-500 ease-in-out ${scaleClass}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* صورة المنتج وزر العين   */}
            <div className="relative h-full overflow-hidden bg-gray-100 ">
              <button
                className="absolute z-10 p-2 transition rounded-full opacity-1 top-2 left-2 hover:bg-gray-100 group-hover:opacity-100"
                onClick={() => setShowQuickView(true)} // ← هنا التعديل
              >
                <FaEye className="text-gray-700 text-[18px]" />
              </button>

              <Link to={`/product/${item.slug}`}>
                {item.images.slice(0, 2).map((imgObj, idx) => (
                  <img
                    key={idx}
                    src={`http://localhost:8000/storage/${imgObj.image}`}
                    alt={`Product Image ${idx + 1}`}
                    className={`w-full h-full absolute top-0 left-0 transition-all duration-700 ease-in-out ${
                      idx === 0
                        ? isHovered
                          ? "opacity-0 scale-105"
                          : "opacity-100 scale-100"
                        : isHovered
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
              </Link>
            </div>

            {showOptions && (
              <div className="absolute h-[81%] w-[101%] p-0 bg-[rgba(255,255,255,0.96)] inset-0 flex flex-col justify-center items-center text-black gap-4 z-20">
                <div className="flex justify-end w-full">
                  <button
                    onClick={() => setShowOptions(false)}
                    className="px-4 py-2 mt-4 text-gray-500 rounded"
                  >
                    X
                  </button>
                </div>

                {/* المقاسات */}
                <div className="mb-4 text-center">
                  <h3 className="mb-2 text-lg font-medium">Size</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {allSizes.map((size) => {
                      const isAvailable =
                        !selectedColor ||
                        item.variants.some(
                          (v) =>
                            v.size_id === size.id &&
                            v.color_id === selectedColor
                        );

                      return (
                        <button
                          key={size.id}
                          onClick={() =>
                            isAvailable && setSelectedSize(size.id)
                          }
                          disabled={!isAvailable}
                          className={`px-3 py-1 text-sm border rounded transition-all duration-200 ${
                            selectedSize === size.id
                              ? "bg-green-100 border-green-500"
                              : "border-gray-300"
                          } ${
                            !isAvailable ? "opacity-30 cursor-not-allowed" : ""
                          }`}
                        >
                          {size.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* الألوان */}
                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-lg font-medium">Color</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {allColors.map((color) => {
                      const isAvailable =
                        !selectedSize ||
                        item.variants.some(
                          (v) =>
                            v.color_id === color.id &&
                            v.size_id === selectedSize
                        );

                      return (
                        <button
                          key={color.id}
                          onClick={() =>
                            isAvailable && handleColorSelect(color.id)
                          }
                          disabled={!isAvailable}
                          className={`w-6 h-6 border rounded-full transition-all duration-200 ${
                            selectedColor === color.id
                              ? "ring-2 ring-green-500"
                              : ""
                          } ${
                            !isAvailable ? "opacity-30 cursor-not-allowed" : ""
                          }`}
                          style={{ backgroundColor: color.name2 }}
                          title={color.name}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* الكمية */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <label className="font-medium" htmlFor="qty">
                    QTY:
                  </label>
                  <button
                    className="w-6 h-6 text-lg font-bold border border-gray-300 rounded hover:bg-gray-200"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    id="qty"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-12 text-center border border-gray-300 rounded"
                  />
                  <button
                    className="w-6 h-6 text-lg font-bold border border-gray-300 rounded hover:bg-gray-200"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* زر الإضافة للسلة */}
                <button
                  className="w-full px-4 py-2 mt-0 text-white bg-green-600 hover:bg-green-500"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            )}

            {/* تفاصيل المنتج */}
            <div className={`pt-2 pl-0 `}>
              {item.categories.slice(0, 1)?.map((category) => (
                <p className="text-sm text-gray-500 uppercase" key={item.id}>
                  {category.name}
                </p>
              ))}
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <div className="flex justify-between">
                <div className="text-sm font-bold">{item.price}</div>
              </div>
            </div>

            <div
              className={`flex gap-3 flex-wrap flex-row justify-center  hover:text-white text-gray-500 btn rounded-none p-[0.7rem] bg-[#323232] hover:bg-[#323232] w-[90%] absolute font-thin text-sm bottom-[29%] left-[1.5vh] transition-all  duration-500 ${
                isHovered
                  ? "opacity-100 -translate-y-4"
                  : "opacity-0 translate-y-0"
              }`}
            >
              {/*     bottom: 29% ! IMPORTANT;
    padding: 0.7rem 0; */}
              <button className=" text-[18px] px-2 py-1 border-r text-gray-500 hover:text-white transition-all">
                <FaHeart />
              </button>

              {totalQty === 0 ? (
                <button
                  className="bg-gray-400 cursor-not-allowed btn "
                  disabled
                >
                  Out of Stock
                </button>
              ) : (
                <button
                  onClick={hasOptions ? handleActionClick : handleAddToCart}
                  className="text-base "
                >
                  {hasOptions ? "Select Option" : "Add to Cart"}
                </button>
              )}
              <button
                onClick={() => addToCompare(item)}
                className="px-2 py-1 text-[20px] border-l text-gray-500 hover:text-blue-500 transition-all"
              >
                <IoGitCompareOutline />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;

