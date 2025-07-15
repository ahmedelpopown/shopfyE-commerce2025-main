import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout"; // ✅ تأكد انه component
import layouts from "@/components/shop/layouts/layouts";  // ✅ object فيه مكونات
import Breadcrumbs from "@/components/Breadcrumbs";
 

const Shop = () => {
  const location = useLocation();
  const [LayoutComponent, setLayoutComponent] = useState(() => layouts.default);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const layoutParam = params.get("layout") || "default";
    const SelectedLayout = layouts[layoutParam] || layouts.default;
    setLayoutComponent(() => SelectedLayout);
  }, [location]);

  return (
    <Layout>
     <Breadcrumbs />
      <LayoutComponent />
    </Layout>
  );
};

export default Shop;
