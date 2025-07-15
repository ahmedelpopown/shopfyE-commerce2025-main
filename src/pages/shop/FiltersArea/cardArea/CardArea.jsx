/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { IoIosGitCompare } from "react-icons/io";
import { PiEyeLight } from "react-icons/pi";
import useGridView from "@/context/useGridView";
import StarRating from "../StarRating";

const CardArea = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  // تقسيم الوصف إلى كلمات

  const navigate = useNavigate();

  const words = item.description?.split(" ") || [];
  const fullText = words.slice(0, 30).join(" ");
  const previewText = words.slice(0, 20).join(" ");
  const user = useSelector((state) => state.auth.user);
  const [showQuickView, setShowQuickView] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // مجموع الكمية المتاحة من جميع المتغيرات
  const totalQty = item.variants.reduce((sum, v) => sum + v.quantity, 0);

  // هل المنتج لديه خيارات ألوان أو أحجام؟
  const hasOptions = item.variants.some(
    (v) => v.color_id !== null || v.size_id !== null
  );

  // الدالة لتحديد اللون
  const handleColorSelect = (id) => {
    setSelectedColor(id);
    setSelectedSize(null); // إعادة تعيين الحجم عند تغيير اللون
  };

  // الأحجام المتاحة حسب اللون المختار
  const availableColors =
    selectedSize && item.variants
      ? item.variants
          .filter((v) => v.size_id === selectedSize && v.color !== null)
          .map((v) => v.color)
          .filter((v, i, arr) => arr.findIndex((c) => c.id === v.id) === i) // إزالة التكرارات
      : [];

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
  // const sizeClass = {
  const scaleClass = {
  xl: "scale-90 min-h-[60vh] h-[51vh]  w-[50vh]  ",
  lg: "scale-100 h-[75vh]   w-[60vh] " ,
  md: "scale-[1.05] min-h-[95vh] h-[60vh] w-[80vh] gap-x-4 gap-y-[10rem] ",
  sm: "scale-[1.1] h-[90vh] w-full",
}[viewMode] || "scale-100 h-[70vh] w-[400px]";
 
  return (
    <>
    
    {
      viewMode ==="sm" ? <>
            <div className="flex flex-row items-start w-full gap-4 p-4 bg-white rounded shadow-md">
    {/* صورة المنتج */}
    <div className="w-[150px] min-w-[150px] h-[150px] bg-gray-100 flex items-center justify-center overflow-hidden">
      <img
        src={`http://127.0.0.1:8000/storage/${item.images[0]?.image}`}
        alt={item.name}
        className="object-contain w-full h-full"
      />
    </div>

    {/* تفاصيل المنتج */}
    <div className="flex-1">
      {/* التصنيف */}
      {item.categories.slice(0, 1).map((category) => (
        <p key={category.id} className="text-sm text-gray-400">
          {category.name}
        </p>
      ))}
      {/* الاسم */}
      <h3 className="text-base font-semibold text-gray-900">
        {item.name}
      </h3>

      {/* السعر */}
      <p className="text-lg font-bold text-green-500">{item.price} $</p>

      {/* الوصف */}
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        {item.description}
      </p>
    </div>
  </div>
      </>:<div

className={`relative hover:shadow-2xl hover:z-50 transform transition-transform duration-500 ease-in-out ${scaleClass}`}  
onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => {
    setHovered(false);
    setExpanded(false);
  }}
>
      <div className="w-[100%]  h-full bg-white text-black relative p-2">
        {/* صور المنتج */}
     <Link to={`/product/${item.slug}`}>
        <div className="relative border  w-full h-[100%] overflow-hidden">
          {item.images.slice(0, 2).map((imgObj, idx) => (
            <img
              key={idx}
              src={`http://localhost:8000/storage/${imgObj.image}`}
              alt={`Product Image ${idx + 1}`}
              className={`w-full h-full absolute top-0 left-0 object-cover transition-all duration-700 ease-in-out ${
                idx === 0
                  ? hovered
                    ? "opacity-0 scale-105"
                    : "opacity-100 scale-100"
                  : hovered
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
          ))}
        </div></Link>
        {/*  */}
        {showOptions && (
          <div className="absolute h-[80%] w-[100%] p-0 bg-[rgba(255,255,255,0.96)] inset-0 flex flex-col justify-center items-center text-black gap-4 z-20">
            {/* زر الإغلاق */}
            <div className="flex justify-end w-full">
              <button
                onClick={() => setShowOptions(false)}
                className="px-4 py-2 mt-4 text-gray-500 rounded"
              >
                X
              </button>
            </div>

            {/* اختيار المقاس أولاً */}
            <div className="mb-4 text-center">
              <h3 className="mb-2 text-lg font-medium">Size</h3>
              <div className="flex justify-center gap-2">
                {item.variants
                  .filter((v) => v.size !== null)
                  .map((v) => v.size)
                  .filter(
                    (v, i, arr) => arr.findIndex((s) => s.id === v.id) === i
                  )
                  .map((size, index) => (
                    <button
                      key={`${size.id}-${index}`}
                      onClick={() => {
                        setSelectedSize(size.id);
                        setSelectedColor(null); // تصفير اللون عند تغيير المقاس
                      }}
                      className={`px-3 py-1 text-sm border rounded hover:bg-gray-100 ${
                        selectedSize === size.id
                          ? "bg-green-100 border-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
              </div>
            </div>

            {/* الألوان المتاحة حسب المقاس */}
            <div className="mb-6 text-center">
              {selectedSize ? (
                <div className="flex justify-center gap-4">
                  {availableColors.map((color, index) => (
                    <button
                      key={`color-${color.id}-${index}`}
                      onClick={() => setSelectedColor(color.id)}
                      className={`w-6 h-6 border rounded-full ${
                        selectedColor === color.id
                          ? "ring-2 ring-green-500"
                          : ""
                      }`}
                      style={{ backgroundColor: color.name2 }}
                      title={color.name}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">اختر المقاس أولًا</p>
              )}
            </div>

            {/* اختيار الكمية */}
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
              className="w-full px-4 py-2 mt-0 text-white bg-green-600 rounded hover:bg-green-500"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        )}

        {/*  */}
        {/* وصف يظهر أسفل الكارت عند Hover */}
        <div
          className={`flex justify-around   bg-white w-[96%] px-4 py-3 absolute font-thin text-sm  left-[1vh] top-[70%] transition-opacity duration-500 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <button className="px-3 py-1 text-[18px] text-black hover:text-red-500 transition-all">
            {/* <FaHeart /> */}
            <PiEyeLight />
          </button>

          {totalQty === 0 ? (
            <button
              className="cursor-not-allowed btn bg-customTeal w-[100%] rounded-none"
              disabled
            >
              Out of Stock
            </button>
          ) : (
            <button
              onClick={hasOptions ? handleActionClick : handleAddToCart}
              className="text-white bg-customTeal hover:bg-black btn w-[100%] rounded-none"
            >
              {hasOptions ? "Select Option" : "Add to Cart"}
            </button>
          )}

          <button className="px-3 py-1 text-[18px] text-gray-500 hover:text-blue-500 transition-all">
            <IoIosGitCompare />
          </button>
        </div>
        {/* تفاصيل المنتج
            display: 
;
    -direction: column;
    gap: 10px;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

        */}
        <div className="h-[15vh] p-2 block ">
          <h4 className="text-xs text-center text-gray-300">
            {item.categories.slice(0, 1).map((cat) => cat.name)}
          </h4>
          <h4 className="text-sm font-semibold text-center">{item.name}</h4>
          <h4 className="text-sm font-bold text-center ">      {item.rating && <StarRating rating={item.rating} />}</h4>

          <h4 className="text-sm font-bold text-center ">
            ${item.price}
          </h4>
        </div>

        <div
          className={`absolute left-[0%]   top-[100%] w-[100%] bg-white text-black transition-all duration-300   rounded-b-md z-20 overflow-hidden ${
            hovered
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <div className="p-4 text-xs leading-relaxed text-center ">
            <p>{expanded ? fullText : previewText}...</p>

            {words.length > 40 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-xs text-blue-600 hover:underline"
              >
                {expanded ? "Show Less" : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default CardArea;
