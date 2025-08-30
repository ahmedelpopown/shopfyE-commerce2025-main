/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { useNavigate } from "react-router-dom";
import { IoGitCompareOutline } from "react-icons/io5";
import { useCompare } from "@/context/CompareContext";
import {
  FaFacebookF,
  FaHeart,
  FaLinkedin,
  FaPinterest,
  
  FaTwitter,
} from "react-icons/fa";
 import ProductRatingDisplay from "./ProductRatingDisplay";
import Breadcrumbs from "@/components/product/Breadcrumb";
 
const ProductInfo = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToCompare } = useCompare();

  const { product } = useSelector((state) => state.productDetails);
  const user = useSelector((state) => state.auth.user);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const variants = product?.variants || [];

  const allColors = variants
    .filter((v) => v.color !== null)
    .map((v) => v.color)
    .filter((v, i, arr) => arr.findIndex((s) => s?.id === v?.id) === i);

  const allSizes = variants
    .filter((v) => v.size !== null)
    .map((v) => v.size)
    .filter((v, i, arr) => arr.findIndex((s) => s?.id === v?.id) === i);

  useEffect(() => {
    if (allColors.length === 1) setSelectedColor(allColors[0].id);
    if (allSizes.length === 1) setSelectedSize(allSizes[0].id);
  }, [product]);

  const handleAddToCart = () => {
    if (!user) {
      alert("يجب تسجيل الدخول أولاً");
      return navigate("/login");
    }

    const selectedVariant = variants.find(
      (v) =>
        (selectedColor ? v.color_id === selectedColor : true) &&
        (selectedSize ? v.size_id === selectedSize : true)
    );

    if (!selectedVariant) {
      alert("يجب اختيار المقاس واللون أولاً");
      return;
    }

    if (quantity > selectedVariant.quantity) {
      alert(`الكمية المتاحة فقط ${selectedVariant.quantity}`);
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: `http://127.0.0.1:8000/storage/${product.images[0]?.image}`,
        quantity,
        variantId: selectedVariant.id,
        maxQuantity: selectedVariant.quantity,
        color: selectedVariant.color,
        size: selectedVariant.size,
      })
    );

    alert("✅ تمت إضافة المنتج إلى السلة");
  };

  const isDisabled =
    (allColors.length > 0 && !selectedColor) ||
    (allSizes.length > 0 && !selectedSize);

  return (
    <div className="p-4 space-y-5">
      <Breadcrumbs/>
      <h2 className="text-2xl font-semibold">{product?.name}</h2>
      
      {/* <ProductRating/> */}
<ProductRatingDisplay />
      <p className="text-2xl font-semibold text-customTeal">${product?.price}  </p>
      
      <p className="text-sm text-gray-600">{product?.description.slice(0, 200)}</p>

      {allColors.length > 0 && (
        <div>
          <h4 className="mb-1 font-medium">colors:</h4>
          <div className="flex gap-2">
            {allColors.map((color) => (
              <button
                key={color.id}
                title={color.name}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color.id ? "ring-2 ring-green-600" : ""
                }`}
                style={{ backgroundColor: color.name2 }}
                onClick={() => setSelectedColor(color.id)}
              />
            ))}
          </div>
        </div>
      )}

      {allSizes.length > 0 && (
        <div>
          <h4 className="mb-1 text-xl font-semibold">sizes</h4>
          <div className="flex gap-2">
            
            {allSizes.map((size) => {
              const available =
                !selectedColor ||
                variants.some(
                  (v) => v.size_id === size.id && v.color_id === selectedColor
                );

              return (
                <button
                  key={size.id}
                  disabled={!available}
                  className={`px-3 py-1 border rounded text-sm ${
                    selectedSize === size.id
                      ? "bg-green-100 border-green-500"
                      : "border-gray-300"
                  } ${!available ? "opacity-30 cursor-not-allowed" : ""}`}
                  onClick={() => available && setSelectedSize(size.id)}
                >
                  {size.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ✅ Quantity Counter */}
      <div className="flex flex-row flex-wrap items-center justify-start gap-3 mt-4 ">
        <div className="flex items-center justify-center gap-2 text-center text-gray-500 border ">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-6 h-6 text-lg "
          >
            -
          </button>
    
          <input
            type="number"
            min="1"
            className="w-12 text-center bg-gray-200 border-gray-300 border-x border-y-0"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{
              appearance: "textfield",
              MozAppearance: "textfield",
              WebkitAppearance: "none",
              margin: 0,
            }}
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-6 h-6 text-lg "
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isDisabled}
          className={` px-4  py-2  uppercase text-white  hover:bg-black rounded duration-300 transition-all ${
            isDisabled
              ? "opacity-50 bg-customTeal cursor-not-allowed"
              : "bg-customTeal hover:bg-black"
          }`}
        >
          add to cart
        </button>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-start gap2 col-12">
        <span className="flex flex-row flex-wrap items-center ">
          <button
            onClick={() => addToCompare(product)}
            className="px-2 py-1 text-gray-500 transition-all text-md"
          >
            <IoGitCompareOutline className=" text-customTeal" />
          </button>
          <p className="transition-all duration-200 hover:text-customTeal ">
            {" "}
            compare
          </p>
        </span>

        <span className="flex flex-row flex-wrap items-center ">
          <button
            onClick={() => addToCompare(product)}
            className="px-2 py-1 text-gray-500 transition-all text-md "
          >
            <FaHeart className=" text-customTeal" />
          </button>
          <p className="transition-all duration-200 hover:text-customTeal ">
            {" "}
            add to wish list
          </p>
        </span>
      </div>
      <hr />
      <div className="flex flex-col flex-wrap items-start justify-start gap-2 col-12">
        <span className="flex flex-row flex-wrap justify-start gap-2">
          <p className="text-black">Categories:</p>
          <h4 className="text-gray-500">
            {product.categories.map((cat) => cat.name).join(", ")}
          </h4>
        </span>
        <span className="flex flex-row flex-wrap justify-start gap-2">
          <p className="text-black">SKU:</p>
          <h4 className="text-gray-500">{product?.sku}</h4>
        </span>
        <span className="flex flex-row flex-wrap justify-start gap-2">
          <p className="text-black">brands:</p>
          <h4 className="text-gray-500">
            {product.brands?.map((b) => b.name).join(", ")}
          </h4>
        </span>
      </div>
      <hr />
      <div className="flex flex-row flex-wrap items-center justify-start gap-2">
        <h4>share:</h4>
        <span className="justify-center w-6 h-6 p-1 transition-all duration-200 rounded hover:bg-customTeal">
          <FaFacebookF className="w-full h-full transition-all duration-200 text-customTeal hover:text-white" />
        </span>
        <span className="justify-center w-6 h-6 p-1 transition-all duration-200 rounded hover:bg-customTeal">
          <FaTwitter className="w-full h-full transition-all duration-200 text-customTeal hover:text-white" />
        </span>
        <span className="justify-center w-6 h-6 p-1 transition-all duration-200 rounded hover:bg-customTeal">
          <FaLinkedin className="w-full h-full transition-all duration-200 text-customTeal hover:text-white" />
        </span>
        <span className="flex-wrap justify-center w-6 h-6 p-1 transition-all duration-200 rounded hover:bg-customTeal">
          <FaPinterest className="w-full h-full transition-all duration-200 text-customTeal hover:text-white" />
        </span>
      </div>


    
           
    </div>
  );
};

export default ProductInfo;
