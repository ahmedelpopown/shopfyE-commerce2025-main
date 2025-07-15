/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "@/store/productDetailsSlice";
import Layout from "@/components/Layout/layout";
import ProductLayoutRenderer from "@/components/product/ProductLayoutRenderer";
import { productLayouts } from "@/product/productLayouts";

const ProductPage = () => {
  const { id } = useParams();  
  const [searchParams] = useSearchParams();
  const layoutKey = searchParams.get("layout") || "classic-without-sidebar";
const layoutConfig =
  productLayouts[layoutKey] || productLayouts["classic-without-sidebar"];
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductById(id));  
  }, [id]);
 ;

  if (!layoutConfig) return <div>Layout غير مدعوم</div>;
  if (loading) return <div>جاري تحميل المنتج...</div>;
  if (error || !product) return <div>حدث خطأ: {error}</div>;

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <ProductLayoutRenderer config={layoutConfig} product={product} />
      </div>
    </Layout>
  );
};

export default ProductPage;
