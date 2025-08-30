import FiltersArea from "../../../pages/shop/FiltersArea/FiltersArea";
import DefaultShop from "../../../pages/shop/DefaultShop/DefaultShop";
import HiddenSidebar from "../../../pages/shop/HiddenSidebar/HiddenSidebar";
import { SidebarProvider } from "@/context/SidebarToggleContext";
import NoPageHeader from "@/pages/shop/NoPageHeader/NoPageHeader";
import FilterStyleWidget from "@/pages/shop/FilterStyleWidget/FilterStyleWidget";
import { CardLayoutProvider } from "@/context/CardLayoutContext";
import SmallCategories from "@/pages/shop/SmallCategories/SmallCategories";
import Land from "@/pages/shop/Land";
import ProductListView from "@/pages/shop/ProductListView/ProductListView";
import ProductInfo from "@/components/product/ProductInfo";
import CheckoutForm from "@/pages/checkout/CheckoutForm";

// ✅ تعريف الدالة المولدة للـ layout
const renderProductInfoLayout = (layoutName) => {
  // eslint-disable-next-line react/display-name
  return () => (
    <CardLayoutProvider defaultLayout={layoutName}>
      <ProductInfo />
    </CardLayoutProvider>
  );
};

const layouts = {
  default: () => (
    <CardLayoutProvider defaultLayout="DefaultShop">
      <DefaultShop />
    </CardLayoutProvider>
  ),

  ProductInfoPage: renderProductInfoLayout("ProductInfoPage"),

  // ✅ نسخ إضافية بناءً على نفس مكون ProductInfo ولكن بتخطيط مختلف
  ProductInfoPageLeftSidebar: renderProductInfoLayout(
    "ProductInfoPageLeftSidebar"
  ),
  ProductInfoPageRightSidebar: renderProductInfoLayout(
    "ProductInfoPageRightSidebar"
  ),
  ProductInfoCompact: renderProductInfoLayout("ProductInfoCompact"),
  stickyGalleryNoSidebar: renderProductInfoLayout("stickyGalleryNoSidebar"),

  FiltersArea: () => (
    <CardLayoutProvider defaultLayout="FiltersArea">
      <FiltersArea />
    </CardLayoutProvider>
  ),

  HiddenSidebar: () => (
    <CardLayoutProvider defaultLayout="HiddenSidebar">
      <SidebarProvider>
        <HiddenSidebar />
      </SidebarProvider>
    </CardLayoutProvider>
  ),

  NoPageHeader: () => (
    <CardLayoutProvider defaultLayout="NoPageHeader">
      <NoPageHeader />
    </CardLayoutProvider>
  ),

  FilterStyleWidget: () => (
    <CardLayoutProvider defaultLayout="FilterStyleWidget">
      <FilterStyleWidget />
    </CardLayoutProvider>
  ),

  Land: () => (
    <CardLayoutProvider defaultLayout="Land">
      <Land />
    </CardLayoutProvider>
  ),

  SmallCategories: () => (
    <CardLayoutProvider defaultLayout="SmallCategories">
      <SmallCategories />
    </CardLayoutProvider>
  ),

  ProductListView: () => (
    <CardLayoutProvider defaultLayout="ProductListView">
      <ProductListView />
    </CardLayoutProvider>
  ),
  CheckoutLightSpiral: () => (
    <CardLayoutProvider defaultLayout="CheckoutLightSpiral">
      <CheckoutForm />
    </CardLayoutProvider>
  ),
};

export default layouts;
