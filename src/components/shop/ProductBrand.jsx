import { useEffect, useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import axios from "@/hooks/axiosClient";

const ProductBrand = () => {
  const [brands, setBrands] = useState([]);
  const { updateFilter } = useFilter();

  useEffect(() => {
    axios.get("/brands-web")
      .then((res) => setBrands(res.data.data))
      .catch((err) => console.error("فشل تحميل البراندات:", err));
  }, []);

  const handleClick = (brandId) => {
    updateFilter("brand", brandId);
  };
 
  return (
    <div className="flex flex-col flex-wrap items-start justify-center w-[100%] gap-2 lg:w-64">
      <h1 className="text-xl font-bold uppercase">Product Brand</h1>
      <div className="flex flex-row flex-wrap items-center w-full gap-2">
        {brands.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="flex flex-row flex-wrap items-center justify-between w-full p-3 border cursor-pointer hover:bg-gray-100"
          >
            <img
               src={`http://127.0.0.1:8000/storage/brand/${item.image}`}
              className="w-[4rem]"
              alt={item.name}
            />
            <h3>({item.products_count})</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBrand;
