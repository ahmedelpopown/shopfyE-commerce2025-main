 import { useState } from "react";
import {  useSelector } from "react-redux";
import ProductRating from "./ProductRating";

const CustomTap = () => {
  const [activeTab, setActiveTab] = useState("description");
   const { product } = useSelector((state) => state.productDetails);
 
  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-full">
      <div className="relative flex justify-center w-full mb-4 space-x-2 px-[2%]">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2   border-x border-t border-b  relative z-20  font-semibold transition duration-500 ${
            activeTab === "description"
              ? "border-b  border-t-4 border-t-customTeal  border-b-white rounded-[1px] text-customTeal"
              : "bg-white text-black"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2  relative z-20   border-x border-t border-b  font-semibold transition duration-500 ${
            activeTab === "reviews"
              ? "border-b  border-t-4 border-t-customTeal  border-b-white rounded-[1px] text-customTeal"
              : "bg-white text-black"
          }`}
        >
          Reviews
        </button>
        <button
          onClick={() => setActiveTab("additional")}
          className={`px-4 py-2   border-x border-t border-b relative z-20  font-semibold transition duration-500 ${
            activeTab === "additional"
              ? " border-t-4 border-t-customTeal border-b border-b-white rounded-[1px]  text-customTeal  "
              : "bg-white text-black"
          }`}
        >
          Additional Info
        </button>
        {<div className="absolute bottom-0 w-full border-b "> </div>}
      </div>

      {/* المحتوى حسب التاب */}
      <div className="w-[100%] ">
        {activeTab === "description" && (
          <div className="flex flex-col flex-wrap items-start w-full gap-2">
         <p className="text-sm whitespace-pre-line text-textColor text-start">
  {product.description
    .split('.')
    .filter(Boolean)
    .map((line) => line.trim() + '.')
    .reduce((acc, curr, i) => {
      acc += curr;
      if ((i + 1) % 2 === 0) acc += '\n\n'; // فاصل بعد كل 5 جمل
      return acc;
    }, '')}
</p>
            <ol className="list-disc">
              <li className="text-gray-500"><span className="font-semibold"> categories:</span> {product.categories.map((cat) => cat.name).join(", ")}</li>
              <li className="text-gray-500"><span className="font-semibold"> sku:</span> {product.sku}</li>
              <li className="text-gray-500"><span className="font-semibold"> brands:</span> {product.brands?.map((cat) => cat.name).join(", ")}</li>
              <li className="text-gray-500"><span className="font-semibold"> tags:</span> {product.tags?.map((cat) => cat.name).join(", ")}</li>
            </ol>
          </div>
        )}
        {activeTab === "reviews" && (
       <ProductRating/>
        )}
        {activeTab === "additional" && (
            <div className="flex flex-row flex-wrap items-center h-10 col-12">
            <label className="w-40 h-full p-2 text-center bg-gray-200 border">Size</label>
                <h4 className="h-full p-2 bg-gray-100 border opacity-50 col-10">{product.sizes.map((size) => size.name).join(", ")}</h4>
        </div>
        )}
      </div>
    </div>
  );
};

export default CustomTap;
