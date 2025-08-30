 import { Route, Routes } from "react-router-dom";
 import 'ionicons';
 
import Home from "./pages/home/Home";
import HomeCategory from "./pages/home/HomeCategory";
import HomeMega from "./pages/home/HomeMega";
 
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'swiper/css/effect-flip';
import HomeDefaultOld from "./pages/home/HomeDefaultOld";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import CheckoutForm from "./pages/checkout/CheckoutForm";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import FilterProvider from "./providers/FilterProvider";
import CartSidebar from "./components/CartSidebar";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useCompare } from "@/context/CompareContext";
import CompareModal from "@/components/CompareModal";
import { CardLayoutProvider } from "./context/CardLayoutContext";
import layouts from "./components/shop/layouts/Layouts";
const App = () => {
    const {
    compareItems,
    showCompare,
    closeCompare,
    removeFromCompare,
  } = useCompare();
  return (
    <>
  {showCompare && (
        <CompareModal
          items={compareItems}
          onClose={closeCompare}
          onRemove={removeFromCompare}
        />
      )}
<Routes>
   
  <Route path="/" element={ <Home/>} />
  <Route path="/register" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  <Route path="homecategory" element={ <HomeCategory/>} />
  <Route path="homeMega" element={ <HomeMega/>} />
  <Route path="HomeDefaultOld" element={ <HomeDefaultOld/>} />
  <Route path="/product/:id" element={<ProductPage />} />
  <Route path="Shop" element={
<FilterProvider>
  
     <Shop/>  
 
      <CartSidebar />
    
 
</FilterProvider>
} />


<Route path="products/:productId" element={<SingleProduct />} />
<Route path="my-chopping-cart" element={<Cart />} />


<Route path="checkout-form" element={
  <CardLayoutProvider defaultLayout={layouts}>
  <CheckoutForm/>
  </CardLayoutProvider>
  } />


</Routes>
 
 
    </>
  );
};

export default App;
 