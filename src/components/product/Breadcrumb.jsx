import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductBreadcrumb = () => {
  const { product } = useSelector((state) => state.productDetails);

  if (!product || !product.categories) return null;

  return (
    <div className="mb-4 space-x-1 text-sm text-gray-500">
      <Link to="/" className="text-gray-600 hover:underline">Home</Link>
      <span>/</span>
      <Link to="/products" className="text-gray-600 hover:underline">Products</Link>
      <span>/</span>

      {product.categories.map((cat, index) => (
        <span key={cat.id}>
          <Link to={`/category/${cat.slug}`} className="text-gray-600 hover:underline">
            {cat.name}
          </Link>
          {index < product.categories.length - 1 && <span>/</span>}
        </span>
      ))}

      <span>/</span>
      <span className="font-semibold text-gray-800">{product.name}</span>
    </div>
  );
};

export default ProductBreadcrumb;
