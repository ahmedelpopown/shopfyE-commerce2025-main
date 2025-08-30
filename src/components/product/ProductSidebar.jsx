import { useSelector } from "react-redux";

const ProductSidebar = () => {
  const { product } = useSelector((state) => state.productDetails);
  
  return (
    <div className="p-4 min-h-[100vh] h-[90vh] rounded-xl">
      
        {product.brands.map((br) => (
          <div className="gap-4 border col-12 flex flex-col justify-center items-center h-[20%]" key={br.id} >
            <div className="flex flex-wrap justify-center w-full">
              <img src={`http://127.0.0.1:8000/storage/${br.image}`} className="object-cover"  alt="" />
            </div>
            <div className="w-4/5 bg-black">
              <button className="w-full px-4 py-2 text-sm text-white transition-colors duration-400 hover:bg-customTeal">
                
View All Products              
              </button>
            </div>
           
          </div>
        ))}
      
    </div>
  );
};

export default ProductSidebar;
