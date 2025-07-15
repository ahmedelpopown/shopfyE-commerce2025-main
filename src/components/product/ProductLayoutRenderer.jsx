/* eslint-disable react/prop-types */
import Related from "@/components/shop/Related";
import CustomTap from "./CustomTap";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductSidebar from "./ProductSidebar";

import { useSelector } from "react-redux";

const ProductLayoutRenderer = ({ config }) => {
  const { product } = useSelector((state) => state.productDetails);
  const { galleryPosition, infoPosition, sidebar } = config;
  const hasSidebar = sidebar !== null;

  if (!product) return null; // product لسه محملش

  return (
    <div className="flex flex-row flex-wrap items-start justify-center">
      {hasSidebar && sidebar === "left" && (
        <div className="col-span-3">
          <ProductSidebar />
        </div>
      )}

      <div className={hasSidebar ? "col-6" : "col-12"}>
        {/* ✅ عرض الصور والمعلومات جنب بعض لو بدون سايدبار */}
        {galleryPosition === "top" && infoPosition === "below" && !hasSidebar && (
          <div className="flex flex-wrap items-start w-full gap-8">
            <div className="col-6">
              <ProductGallery images={product.images} />
            </div>
            <div className="col-5">
              <ProductInfo />
           

            </div>
            <div className="col-12">
               <CustomTap/>
            </div>
            <div className="col-12">
               <Related/>
            </div>
          </div>
        )}

        {/* في باقي الحالات العادية */}
        {galleryPosition === "top" && hasSidebar && (
          <ProductGallery images={product.images} />
        )}
        {galleryPosition === "sticky" && (
          <div className="sticky top-4">
            <ProductGallery images={product.images} />
          </div>
        )}
        {galleryPosition === "wide" && (
          <div className="w-full">
            <ProductGallery images={product.images} />
          </div>
        )}

        {/* ✅ info في الحالات العادية */}
        {infoPosition === "below" && hasSidebar && <ProductInfo />}
        {infoPosition === "next" && (
          <div className="col-6">
            <ProductInfo />
          </div>
        )}
      </div>

      {hasSidebar && sidebar === "right" && (
        <div className="col-5">
          <ProductSidebar />
        </div>
      )}
    </div>
  );
};

export default ProductLayoutRenderer;
