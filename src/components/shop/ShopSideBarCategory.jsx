import ProductCard from "../../ProductCard";

const ShopSideBarCategory = () => {
  return (
    <div className="w-full ">
      <div className="p-1 font-medium">
        <h1>Product Category</h1>
      </div>
      <div className="gap-4 p-2">
        {ProductCard.Categories.map((cat) => (
 
            <div className="gap-4 p-2" key={cat.id}>
              <h4 className="text-gray-500">{cat.title}</h4>
            </div>
 
        ))}
      </div>
    </div>
  );
};

export default ShopSideBarCategory;
