import React, { useState } from "react";
import CompareModal from "./CompareModal";

export default function ProductList() {
  const [showCompare, setShowCompare] = useState(false);

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {/* مثال لكارد منتج */}
        <div className="p-4 border rounded shadow">
          <img src="https://via.placeholder.com/150x200" alt="Product" />
          <h3 className="mt-2 text-lg font-bold">Product Title</h3>
          <p className="font-semibold text-green-600">$29.99</p>
          <button
            className="px-3 py-1 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => setShowCompare(true)}
          >
            Compare
          </button>
        </div>
      </div>

      {/* المودال */}
      {showCompare && <CompareModal onClose={() => setShowCompare(false)} />}
    </div>
  );
}
