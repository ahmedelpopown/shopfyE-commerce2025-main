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
const App = () => {
  return (
    <>
 
<Routes>
  <Route path="/register" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  <Route path="/" element={ <Home/>} />
  <Route path="homecategory" element={ <HomeCategory/>} />
  <Route path="homeMega" element={ <HomeMega/>} />
  <Route path="HomeDefaultOld" element={ <HomeDefaultOld/>} />
  <Route path="Shop" element={
<FilterProvider>
  
     <Shop/>  
 
      <CartSidebar />
    
 
</FilterProvider>
} />


<Route path="products/:productId" element={<SingleProduct />} />
<Route path="cart" element={<Cart />} />
<Route path="checkoutform" element={<CheckoutForm/>} />
</Routes>
 
 
    </>
  );
};

export default App;
 