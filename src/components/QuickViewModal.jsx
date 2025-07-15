/* eslint-disable react/prop-types */
// components/QuickViewModal.jsx
 

const QuickViewModal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl gap-6 bg-white rounded-lg md:flex">
        <button
          className="absolute text-2xl text-gray-500 top-2 right-2 hover:text-red-500"
          onClick={onClose}
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
          <p className="text-xl font-bold text-green-600">{item.price || "$33.02"}</p>

          <p className="text-sm text-gray-700">
            {item.description?.length > 100
              ? item.description.slice(0, 100) + "..."
              : item.description}
          </p>

          <div>
            <span className="mr-2 font-medium">Size:</span>
            <div className="inline-flex gap-2">
              {(item.sizes || []).map((size) => (
                <button
                  key={size.name || size}
                  className="px-3 py-1 border hover:bg-gray-100"
                >
                  {size.name || size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Control */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center border">
              <button className="px-3" onClick={() => console.log("decrease")}>-</button>
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-12 text-center border-x"
              />
              <button className="px-3" onClick={() => console.log("increase")}>+</button>
            </div>

            <button
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              onClick={() => console.log("Add to Cart")}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
