/* eslint-disable react/prop-types */
const CompareModal = ({ items, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 z-[1000]">
      {/* الخلفية السوداء الشفافة */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* محتوى المودال */}
      <div className="absolute top-1/2 left-1/2 z-[1001] transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-white rounded-lg overflow-hidden flex flex-col shadow-xl">
        <div className="relative py-4 border-b text-center font-bold text-[#04d39f] text-2xl uppercase">
          Compare
          <button
            className="absolute text-3xl text-gray-500 top-2 right-4 hover:text-red-500"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="flex min-w-max">
            {/* العمود الثابت */}
            <div className="flex flex-col bg-gray-50 border-r w-[300px] max-w-[300px] text-sm font-semibold uppercase text-gray-600">
              <div className="h-[50px] border"></div>
              {[
                "image",
                "title",
                "price",
                "Add to cart",
                "description",
                "sku",
                "Availability",
                "categories",
                "weight",
                "dimensions",
                "rating",
                "color",
                "dress type",
                "size",
              ].map((label, i) => (
                <div
                  key={i}
                  className={`p-4 border-b border-gray-200 h-[50px] flex items-center justify-end ${
                    i === 4 ? "h-[150px]" : ""
                  }`}
                >
                  <h1>{label}</h1>
                </div>
              ))}
            </div>

            {/* بيانات المنتجات */}
            {items.map((item) => (
              <div
                key={item.id}
                className="flex text-black flex-col border-r min-w-[150px] text-sm"
              >
                <div className="p-2 border-b h-[50px] flex justify-center">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="font-bold text-red-500"
                  >
                    X
                  </button>
                </div>

                <div className="p-4 border-b h-[150px] flex items-center justify-center">
                  {item.images?.[0] && (
                    <img
                      src={`http://localhost:8000/storage/${item.images[0].image}`}
                      className="w-[100px] h-[125px] object-cover"
                    />
                  )}
                </div>

                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.name}
                </div>
                <div className="p-4 border-b h-[50px] text-green-600 font-bold flex items-center justify-center">
                  {item.price}
                </div>
                <div className="p-4 border-b h-[50px] flex items-center justify-center">
                  <button className="bg-[#04d39f] text-white py-1 px-3 rounded hover:bg-opacity-80">
                    {item.options ? "Select Options" : "Add to Cart"}
                  </button>
                </div>
                <div className="p-4 border-b h-[150px] text-gray-600 overflow-y-auto max-w-[300px]">
                  {item.description || "No description."}
                </div>
                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.sku || "N/A"}
                </div>
                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.availability || "In Stock"}
                </div>
                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.categories?.map((c) => c.name).join(", ") || "N/A"}
                </div>
                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.weight || "N/A"}
                </div>
                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.dimensions || "N/A"}
                </div>
                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.rating || "N/A"}
                </div>
                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.colors?.map((c) => c.name).join(", ") || "N/A"}
                </div>
                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.dress?.map((c) => c.name).join(", ") || "N/A"}
                </div>
                <div className="p-4 border-b h-[50px] text-gray-600 flex items-center justify-center">
                  {item.sizes?.map((c) => c.name).join(", ") || "N/A"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
