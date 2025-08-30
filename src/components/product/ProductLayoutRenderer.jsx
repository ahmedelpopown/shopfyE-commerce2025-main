/* eslint-disable react/prop-types */
import Related from "@/components/shop/Related";
import CustomTap from "./CustomTap";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductSidebar from "./ProductSidebar";

import { useSelector } from "react-redux";
import { CardLayoutProvider } from "@/context/CardLayoutContext";
import layouts from "@/components/shop/layouts/Layouts";
// import layouts from "@/components/shop/layouts/Layouts";

const ProductLayoutRenderer = ({ config }) => {
  const { product } = useSelector((state) => state.productDetails);
  const { galleryPosition, infoPosition, sidebar } = config;
  const hasSidebar = sidebar !== null;
 
  if (!product) return null; // product لسه محملش

  return (
    <div className="flex flex-row flex-wrap items-start justify-between">
      {hasSidebar && sidebar === "left" && (
        <div className="col-3">
          <ProductSidebar />
        </div>
      )}

      <div className={hasSidebar ? "w-[75%]" : "col-12"}>
        {/* ✅ عرض الصور والمعلومات جنب بعض لو بدون سايدبار */}

        {/* center without sidebar */}
        {galleryPosition === "top" &&
          infoPosition === "below" &&
          !hasSidebar && (
            <div className="flex flex-wrap items-start w-full gap-8">
              <div className="col-6 ">
                <CardLayoutProvider defaultLayout={layouts}>
                <ProductGallery images={product.images} />
                </CardLayoutProvider>
              </div>
              <div className="col-5">
                <ProductInfo />
              </div>
              <div className="col-12">
                <CustomTap />
              </div>
              <div className="col-12">
                <CardLayoutProvider defaultLayout="ProductInfoPage">
                  <Related />
                </CardLayoutProvider>
              </div>
            </div>
          )}

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* left Sidebar */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {galleryPosition === "top" &&
          infoPosition === "below" &&
          hasSidebar &&
          sidebar === "left" && (
            <div className="flex flex-wrap items-start w-full">
              <div className="flex flex-row flex-wrap w-full">
                <div className="h-[60vh] w-[50%]">
                  <CardLayoutProvider defaultLayout={layouts}>
                  <ProductGallery images={product.images} />
                    
                  </CardLayoutProvider>

                </div>
                <div className="w-[50%]">
                  <ProductInfo />
                </div>
                <div className="w-full">
                  <CustomTap />
                </div>

                <div className="w-full">
                  <CardLayoutProvider defaultLayout="ProductInfoPageLeftSidebar">
                    <Related />
                  </CardLayoutProvider>
                </div>
              </div>
            </div>
          )}

        {/* left Sidebar  gallery static center */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {galleryPosition === "wide" &&
          infoPosition === "next" &&
          sidebar === "left" && (
         
              <div className="flex flex-row flex-wrap items-start w-full">
                {/* Sidebar on the left */}

                
                  {/* Gallery & info */}

                <div className="flex flex-row flex-wrap items-start w-full">
                  <div className="w-[50%] sticky top-0 left-0  h-[60vh]">
                    <CardLayoutProvider defaultLayout={layouts}>
                    <ProductGallery images={product.images} />
                    </CardLayoutProvider>
                  </div>
 
                  {/* Product Info on the right */}
                  <div className="w-[50%]">
                    <ProductInfo />
                        {/* CustomTap & Related section  */}
                <div className="flex flex-row flex-wrap items-start w-full">
                  <div className="w-full pl-4 mt-6">
                    <CustomTap />
                  </div>

              
          
                </div>
                
                  </div>
               
                  
                </div>

           <div className="w-full mt-6">
                    <CardLayoutProvider defaultLayout="ProductInfoPageLeftSidebar">
                      <Related />
                    </CardLayoutProvider>
                  </div>
                
              


                
               
            </div>
          )}
      </div>
      {/* right Sidebar */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {galleryPosition === "top" &&
        infoPosition === "below" &&
        hasSidebar &&
        sidebar === "right" && (
          <div className="flex flex-wrap w-full">
            {/* Main Content */}
            <div className="flex flex-row flex-wrap w-[70%]">
              <div className="h-[60vh] w-[50%]">
                <CardLayoutProvider defaultLayout={layouts}>
                <ProductGallery images={product.images} />
                </CardLayoutProvider>
              </div>
              <div className="w-[50%]">
                <ProductInfo />
              </div>
              <div className="w-full">
                <CustomTap />
              </div>
              <div className="w-full">
                <CardLayoutProvider defaultLayout="ProductInfoPageLeftSidebar">
                  <Related />
                </CardLayoutProvider>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-[30%]">
              <ProductSidebar />
            </div>
          </div>
        )}

      {/*     gallery static no Sidebar  */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {galleryPosition === "sticky" &&
        infoPosition === "next" &&
        sidebar === null && (
          <>
            <div className="flex flex-wrap items-start w-full gap-8">
              <div className="col-6 min-h-[80vh]  sticky top-0 left-0 h-[80vh]">
<CardLayoutProvider defaultLayout={layouts}>
                <ProductGallery images={product.images} />
                </CardLayoutProvider>
              </div>
              <div className="col-5">
                <ProductInfo />
                <CustomTap />
              </div>
            </div>

            <div className="col-12">
              <CardLayoutProvider defaultLayout="stickyGalleryNoSidebar">
                <Related />
              </CardLayoutProvider>
            </div>
          </>
        )}
      {/*     gallery static right Sidebar  */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {galleryPosition === "sticky" &&
        infoPosition === "next" &&
        sidebar === null && (
          <>
            <div className="flex flex-wrap items-start w-full gap-8">
              <div className="col-6 min-h-[80vh]  sticky top-0 left-0 h-[80vh]">
                <CardLayoutProvider defaultLayout={layouts}>
                <ProductGallery images={product.images} />
                </CardLayoutProvider>
              </div>
              <div className="col-5">
                <ProductInfo />
                <CustomTap />
              </div>
            </div>

            <div className="col-12">
              <CardLayoutProvider defaultLayout="stickyGalleryNoSidebar">
                <Related />
              </CardLayoutProvider>
            </div>
          </>
        )}
    </div>
  );
};

export default ProductLayoutRenderer;
