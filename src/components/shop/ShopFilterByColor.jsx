import React from "react";
import "./scrollStyle.css"; // هنعمل ملف css فيه شوية ستايلات خاصة بالscroll
 const allProducts = [
  { id: 1, color: 'Red' },
  { id: 2, color: 'Blue' },
  { id: 3, color: 'Red' },
  { id: 4, color: 'Green' },
  { id: 5, color: 'Green' },
  { id: 6, color: 'Yellow' },
  { id: 7, color: 'Black' },
  { id: 8, color: 'White' },
  { id: 9, color: 'Purple' },
  { id: 10, color: 'Gray' },
];
const ShopFilterByColor = ({ products, onFilter }) => {
    
  const colorCounts = products.reduce((acc, product) => {
    acc[product.color] = (acc[product.color] || 0) + 1;
    return acc;
  }, {});

  const uniqueColors = Object.keys(colorCounts);

  const handleColorClick = (color) => {
    const filtered = products.filter((product) => product.color === color);
    onFilter(filtered);
  };

  return (
    <div className="overflow-hidden w-60 max-h-64">
      <div className="p-2 bg-white rounded shadow scroll-container">
        {uniqueColors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorClick(color)}
            className="flex items-center justify-between p-2 mb-1 rounded cursor-pointer hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 border rounded-full"
                style={{ backgroundColor: color.toLowerCase() }}
              ></div>
              <span className="text-sm">{color}</span>
            </div>
            <span className="text-sm text-gray-600">{colorCounts[color]} قطع</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopFilterByColor;
