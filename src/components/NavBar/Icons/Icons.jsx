import { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import img1 from "../../../assets/cardImage/Womens-Accessories-Vegan-Leather-Mini-Backpack01.jpg"
import { Link } from "react-router-dom";
const Icons = () => {
  const [ShowCart,setShowCart]=useState()
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
        <svg
          className="transition-colors duration-300 cursor-pointer hover:text-customTeal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
        >
          <path d="M18 17.8832V16L23 19L18 22V19.9095C14.9224 19.4698 12.2513 17.4584 11.0029 14.5453L11 14.5386L10.9971 14.5453C9.57893 17.8544 6.32508 20 2.72483 20H2V18H2.72483C5.52503 18 8.05579 16.3312 9.15885 13.7574L9.91203 12L9.15885 10.2426C8.05579 7.66878 5.52503 6 2.72483 6H2V4H2.72483C6.32508 4 9.57893 6.14557 10.9971 9.45473L11 9.46141L11.0029 9.45473C12.2513 6.5416 14.9224 4.53022 18 4.09051V2L23 5L18 8V6.11684C15.7266 6.53763 13.7737 8.0667 12.8412 10.2426L12.088 12L12.8412 13.7574C13.7737 15.9333 15.7266 17.4624 18 17.8832Z"></path>
        </svg>
      </span>

      <span className="text-[22px] w-35 h-35 landing-[35px]  text-center border-none text-[#323232]">
        <CiHeart />
      </span>
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
  {/* أيقونة السلة */}
  <span className="text-[22px] cursor-pointer text-[#323232]"  onClick={() => setShowCart(true)}>
    <Link to={"/cart"}>
    <HiOutlineShoppingBag />
    </Link>
  </span>

  {/* عدد المنتجات */}
  <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
    3
  </span>

  {/* Mini Cart على Hover */}
  <div className="absolute top-10 right-0 w-[300px] bg-white shadow-xl rounded-lg p-4 z-50 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
    <h3 className="pb-2 mb-2 font-semibold text-gray-700 border-b text-md">Your Cart</h3>

    {/* قائمة المنتجات */}
    <div className="space-y-3 max-h-[200px] overflow-auto">
      {[1, 2, 3].map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-2 border rounded">
          {/* <img
            src="https://via.placeholder.com/50"
            className="object-cover w-12 h-12 rounded"
            alt="product" */}
          {/* /> */}
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">Product {i + 1}</p>
            <p className="text-xs text-gray-500">$29.99</p>
          </div>
        </div>
      ))}
    </div>

    {/* الإجمالي وزر الشراء */}
    <div className="pt-3 mt-3 border-t">
      <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
        <span>Total:</span>
        <span className="text-green-600">$89.97</span>
      </div>
      <button className="w-full bg-[#04d39f] text-white py-2 rounded hover:bg-[#03b388] text-sm">
        Go to Checkout
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Icons;
