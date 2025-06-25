/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
 
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  // تحقق مما إذا كان المنتج لديه خيارات Size أو Colors
  const hasOptions = item.sizes?.length > 0 || item.colors?.length > 0;
  const [showQuickView, setShowQuickView] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  return (
    <>
      {/*start QuickView  */}

      {showQuickView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-4xl gap-6 bg-white rounded-lg md:flex">
            <button
              className="absolute text-2xl text-gray-500 top-2 right-2 hover:text-red-500"
              onClick={() => setShowQuickView(false)}
            >
              ×
            </button>

            <div className="flex items-center justify-center w-full md:w-1/2">
              {item.images.slice(0, 1).map((imgObj, idx) => (
                <img
                  key={idx}
                  src={`http://127.0.0.1:8000/storage/${imgObj.image}`}
                  alt={`product-${idx}`}
                  className="object-cover border rounded"
                />
              ))}
            </div>

            <div className="flex flex-col w-full gap-3 p-6 md:w-1/2">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-xl font-bold text-green-600">
                {item.price || "$33.02"}
              </p>

              <p className="text-sm text-gray-700">{item.description}</p>

              <div>
                <span className="mr-2 font-medium">Size:</span>
                <div className="inline-flex gap-2">
                  {(item.sizes || ["M", "S"]).map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 border hover:bg-gray-100"
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center border">
                  <button className="px-3">-</button>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="w-12 text-center border-x"
                  />
                  <button className="px-3">+</button>
                </div>
                <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                  ADD TO CART
                </button>
              </div>

              <div className="mt-4 text-sm">
                <p className="text-green-500 cursor-pointer hover:underline">
                  Add to Wishlist
                </p>
                <p>
                  <span className="font-medium">SKU:</span>
                  {item.sku}
                </p>
                <p>
                  <span className="font-medium">Categories:</span>
                  {item.categories.map((category) => (
                    <span key={category.id} className="mr-2">
                      {category.name}
                    </span>
                  ))}
                </p>
                <p>
                  <span className="font-medium">Tags:</span>{" "}
                  {item.tags.map((tag) => (
                    <span key={tag.id} className="mr-2">
                      {tag.name}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <span className="font-medium">Share:</span>
                <a href="#">
                  <i className="text-green-600 fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="text-green-600 fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="text-green-600 fab fa-pinterest" />
                </a>
                <a href="#">
                  <i className="text-green-600 fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*end QuickView  */}

      {/* start compare modal */}
      {showCompare && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[95%] h-[90%] bg-white rounded-lg overflow-hidden flex flex-col">
            <div className="relative py-4 border-b text-center font-bold text-[#04d39f] text-2xl uppercase">
              Compare
              <button
                className="absolute text-3xl text-gray-500 top-2 right-4 hover:text-red-500"
                onClick={() => setShowCompare(false)}
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-auto">
              <div className="flex min-w-max">
                <div className="flex flex-col bg-gray-50 border-r w-[300px] max-w-[300px] text-sm font-semibold uppercase text-gray-600">
                  <p className="h-[50px]   border"> </p>
                  <div className="p-4 border-b border-gray-200  h-[150px] flex items-center justify-end">
                    <h1>image</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>title</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>price</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>Add to cart</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[150px] flex items-center justify-end">
                    <h1>description</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>sku</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>Availability</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>categories</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>weight</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>dimensions</h1>
                  </div>
                  <div className="p-4 border-b border-gray-300 h-[50px] flex items-center justify-end">
                    <h1>rating</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>color justify-center</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>dress type</h1>
                  </div>
                  <div className="p-4 border-b border-gray-200 h-[50px] flex items-center justify-end">
                    <h1>size</h1>
                  </div>
                </div>

      
 
                 
                  <div
                    key={item.id }
                    className="flex text-black flex-col border-r min-w-[150px] text-sm"
                  >
                 
                    <div className="p-2 border-b h-[50px] flex justify-center">
                      <button className="font-bold text-red-500">X</button>
                    </div>
                    <div className="p-4 border-b h-[150px] flex items-center justify-center">
                      {item.images.slice(0, 1).map((imgObj, idx) => (
                       <img
                       key={idx}
                        src={`http://127.0.0.1:8000/storage/${imgObj.image}`}
                        className="w-[100px] h-[125px] object-cover"
                      />
                      ))}
                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                      {item.name}
                    </div>
                    <div className="p-4 border-b h-[50px] flex items-center justify-center text-green-600 font-bold">
                      {item.price}
                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                      <button className="bg-[#04d39f] text-white py-1 px-3 rounded hover:bg-opacity-80">
                        {item.options ? "Select Options" : "Add to Cart"}
                      </button>
                    </div>
                    <div className="p-4 border-b h-[150px] text-gray-600 overflow-y-auto">
                      {item.description || "No description."}
                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                      {item.sku || "N/A"}
                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                      {item.availability || "In Stock"}
                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                   {item.categories?.map(c => c.name).join(", ") || "N/A"}

                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                      {item.categories?.map(c => c.name).join(", ") || "N/A"}

                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                                            {item.dimensions?.map(c => c.name).join(", ") || "N/A"}

                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                                 {item.rating?.map(c => c.name).join(", ") || "N/A"}

                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                                  {item.colors?.map(c => c.name).join(", ") || "N/A"}

                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                         {item.dress?.map(c => c.name).join(", ") || "N/A"}
                    </div>
                    <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                       {item.sizes?.map(c => c.name).join(", ") || "N/A"}
                    </div>
                  </div>
            
              </div>
            </div>
          </div>
        </div>
      )}

      {/* end compare modal */}

      <div
        className="max-w-[21rem] max-h-[31rem] relative group transition-all bg-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* حاوية الصور */}
        <div className="relative overflow-hidden bg-gray-200 w-[100%] h-[400px]">
          {/* زر العين في أعلى اليسار */}
          <button
            className="absolute z-10 p-2 transition rounded-full opacity-1 top-2 left-2 hover:bg-gray-100 group-hover:opacity-100"
            onClick={() => setShowQuickView(true)}
          >
            <FaEye className="text-gray-700 text-[18px]" />
          </button>

          <Link to={`/products/${item.id}`}>
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

        {/* زر Select Option أو Add to Cart */}

        {/* نافذة الخيارات */}
        {isOptionsOpen && hasOptions && (
          <div className="absolute h-[81%] w-[101%] p-0 bg-[rgba(255,255,255,0.96)] inset-0  bg-opacity-90 flex flex-col justify-center items-center text-black  gap-4 z-20">
            <div className="w-[100%] flex justify-end">
              <button
                onClick={() => setIsOptionsOpen(false)}
                className="px-4 py-2 mt-4 text-gray-500 rounded "
              >
                X
              </button>
            </div>
            {/* اختيار الـ Size */}
            {item.sizes?.length > 0 && (
              <div>
                <h3 className="mb-2 text-lg font-light text-center"> Size</h3>
                <div className="flex gap-2">
                  {item.sizes.map((size) => (
                    <button key={size} className="px-1 py-1 text-sm border ">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* اختيار اللون */}
            {item.colors?.length > 0 && (
              <div>
                <h3 className="mb-2 text-lg font-light text-center"> Color</h3>
                <div className="flex gap-2">
                  {item.colors.map((color) => (
                    <button
                      key={color}
                      className="w-6 h-6 border-2 border-white rounded-full"
                      style={{ backgroundColor: color }}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            {/* اختيار الكمية */}
            <div className="w-[100%] justify-end flex">
              <div className="flex">
                <h3 className="mb-2 mr-1 text-lg font-semibold">Qty</h3>
                <div className="flex">
                  <span className="w-8 py-1 text-center border"> - </span>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-10 px-1 py-1 text-center text-black border border-gray-400"
                  />
                  <span className="w-8 py-1 text-center border"> + </span>
                </div>
              </div>
            </div>

            {/* زر الإغلاق */}

            <button
              onClick={() => setIsOptionsOpen(false)}
              className="w-full px-4 py-2 mt-0 bg-green-600 hover:bg-green-500"
            >
              Add To Cart
            </button>
          </div>
        )}

        {/* تفاصيل المنتج */}
        <div className="p-4">
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

        {/* أزرار التفاعل */}
        <div
          className={`flex justify-around p-[0.5rem] bg-[#323232] w-[90%] absolute top-[19rem] left-[1rem] transition-opacity duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <button className="px-3 py-1 text-[18px] text-gray-500 hover:text-red-500 transition-all">
            <FaHeart />
          </button>
          {hasOptions ? (
            <button
              onClick={() => setIsOptionsOpen(true)}
              className="px-3 py-1 text-[18px] text-gray-500 border-gray-500 border-x-[1px] hover:text-green-500 transition-all"
            >
              Select Option
            </button>
          ) : (
            <button className="px-3 py-1 text-[18px] text-gray-500 border-gray-500 border-x-[1px] hover:text-green-500 transition-all">
              Add to Cart
            </button>
          )}
          {/*  */}
          <button
            onClick={() => setShowCompare(true)}
            className="px-3 py-1 text-[18px] text-gray-500 hover:text-blue-500 transition-all"
          >
            <IoGitCompareOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
