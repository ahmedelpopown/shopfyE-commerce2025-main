import { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import img1 from "../../../assets/cardImage/Womens-Accessories-Vegan-Leather-Mini-Backpack01.jpg"
import { useCompare } from "@/context/CompareContext";
import { IoGitCompareOutline } from "react-icons/io5";
 const Icons = () => {
  const [ShowCart,setShowCart]=useState()
      const {
     
    compareItems,
    openCompare,
 
  } = useCompare();
  return (
    <>
    {ShowCart && (
  <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50">
    <div className="w-[400px] h-full bg-white shadow-lg flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-bold text-gray-800 uppercase">shopping cart</h2>
        <button
          onClick={() => setShowCart(false)}
          className="text-2xl text-gray-500 hover:text-red-500"
        >
          X
        </button>
      </div>

      {/* Products List */}
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        {[1, 2, 3].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 p-2 border rounded"
          >
            <img
              src={img1}
              alt="Product"
              className="object-cover w-16 h-16 rounded"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800">Product Name</h3>
              
              <p className="text-xs text-gray-500">$29.99</p>
            </div>
            <button className="text-sm text-red-500 hover:text-red-700">×</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="flex justify-between mb-3">
          <span className="font-medium text-gray-700">Total:</span>
          <span className="font-bold text-green-600">$89.97</span>
        </div>
        <button className="w-full bg-[#04d39f] text-white py-2 rounded hover:bg-[#03b388]">
          Checkout
        </button>
      </div>
    </div>
  </div>
)}

      <span className="text-[22px] w-35 h-35 landing-[35px]  text-center border-none text-[#323232]">
        <CiSearch className="transition-colors duration-300 cursor-pointer hover:text-customTeal" />
      </span>

      <span className="w-35 h-35 landing-[35px]  text-center border-none text-[#323232]">
     
      </span>

      <span className="text-[22px] w-35 h-35 landing-[35px]  text-center border-none text-[#323232]">
        <CiHeart />
      </span>
           <div className="relative cursor-pointer" onClick={openCompare}>
        <IoGitCompareOutline className="text-xl text-gray-600 hover:text-green-600" />
        {compareItems.length > 0 && (
          <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs font-bold text-white bg-green-600 rounded-full">
            {compareItems.length}
          </span>
        )}
      </div>
{/* <span
  onClick={() => setShowCart(true)}
  className="text-[22px] relative cursor-pointer"
>
  <HiOutlineShoppingBag />
  <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
    3
  </span>
</span> */}
<div className="relative group">
  <span className="text-2xl cursor-pointer text-[#323232]" onClick={() => setShowCart(true)}>
    <HiOutlineShoppingBag />
  </span>

  <span className="absolute top-[-6px] right-[-8px] text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
    3
  </span>

  {/* Hover Mini Cart */}
  <div className="absolute right-0 z-50 p-4 transition-all duration-300 scale-95 bg-white rounded-lg shadow-lg opacity-0 pointer-events-none top-10 w-72 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
    <h3 className="pb-2 mb-2 text-sm font-semibold text-gray-700 border-b">Your Cart</h3>
    <div className="space-y-2 overflow-auto max-h-48">
      {[1, 2, 3].map((item, i) => (
        <div key={i} className="flex items-center p-2 space-x-2 border rounded">
          <img src={img1} className="object-cover w-12 h-12 rounded" />
          <div className="flex-1">
            <p className="text-sm font-medium">Product {i + 1}</p>
            <p className="text-xs text-gray-500">$29.99</p>
          </div>
        </div>
      ))}
    </div>
    <div className="pt-3 mt-3 text-sm border-t">
      <div className="flex justify-between mb-2 font-medium">
        <span>Total:</span>
        <span className="text-green-600">$89.97</span>
      </div>
      <button className="w-full bg-[#04d39f] text-white py-2 rounded hover:bg-[#03b388]">Go to Checkout</button>
    </div>
  </div>
</div>


    </>
  );
};

export default Icons;
