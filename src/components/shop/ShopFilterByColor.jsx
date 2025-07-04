import   { useEffect, useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import axios from "@/hooks/axiosClient";
import "./scrollStyle.css";

const ShopFilterByColor = () => {
  const { updateFilter } = useFilter();
  const [colors, setColors] = useState([]);

useEffect(() => {
  axios.get("/colors-web")
    .then((res) => {
      const colorList = res.data?.data ?? []; // ✅ تأمين
      setColors(colorList);
    })
    .catch((err) => {
      console.error("فشل تحميل الألوان:", err);
      setColors([]); // fallback
    });
}, []);

  const handleColorClick = (colorId) => {
      console.log("🟢 Selected colorId:", colorId);

    updateFilter("color", colorId); // 👈 colorId مش الاسم
  };
  return (
    <div className="w-full max-w-[230px]">
      <h3 className="mb-2 text-lg font-semibold text-gray-800">لون المنتج</h3>
      <div className="max-h-[220px] overflow-y-auto pr-2 scroll-container space-y-2">
        {colors.map((color) => (

          <div
            key={color.id}
            onClick={() => handleColorClick(color.id)}
            className="flex items-center justify-between p-2 transition bg-white rounded-md cursor-pointer hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 border border-gray-300 rounded-full"
                style={{ backgroundColor: color.name}}
              />
              <span className="text-sm text-gray-700 capitalize">{color.name}</span>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopFilterByColor;
