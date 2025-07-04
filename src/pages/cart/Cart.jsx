import Layout from "../../components/Layout/Layout";
 import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
 import { increaseQuantity } from "@/store/cartSlice";
import { decreaseQuantity } from "@/store/cartSlice";
import { useNavigate } from "react-router-dom";

import { removeFromCart } from "@/store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
const cartItems = useSelector((state) => state.cart.items);
  
const handleIncrease = (id) => {
  dispatch(increaseQuantity(id));
};

const handleDecrease = (id) => {
  dispatch(decreaseQuantity(id));
};

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
const cartPayload = cartItems.map(item => ({
  product_id: item.id,
  variant_id: item.variantId,
  price: item.price,
  quantity: item.quantity,
  subtotal: item.price * item.quantity,
}));

const total = subtotal;

  console.log(cartItems)
  return (
    <Layout>
      <div className="flex flex-row flex-wrap items-center justify-between px-[9%] py-4 bg-[#fbfbfb] shadow-sm">
        <div className="">
          <h1 className="text-3xl font-semibold">My Shopping Cart</h1>
        </div>
        <div className="">
          <h1>Home / My Shopping Cart</h1>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center p-2 col-12">
        <div className="flex flex-row flex-wrap items-center justify-between col-10">
          <section className="border col-7">
            <div className="flex flex-row flex-wrap items-start justify-center  p-[1rem]">
              <h1 className="text-center col-5">product</h1>

              <div className="flex flex-row flex-wrap items-end justify-end gap-4 col-6">
                <h1 className="col-3">Price</h1>
                <h1 className="col-3">Quantity</h1>
                <h1 className="col-3">Subtotal</h1>
              </div>
            </div>
            {/* <div className="flex flex-row flex-wrap items-center justify-between border col-12 ">
              <div className="flex flex-row flex-wrap items-center justify-start gap-[4rem] p-4 col-6 ">
                <Trash2 className="w-5 h-5" />
                <img src={img} className="col-3" alt="" />
                <h1 className="text-sm col-3">Womens-Accessories-Vegan</h1>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center gap-[3rem] col-6">
                <h1 className="col-2">$50</h1>
                <div className="flex items-center gap-2 px-2 py-1 border rounded-md col-4 w-fit">
                  <button
                    onClick={decrease}
                    className="px-2 text-xl font-bold text-gray-600 hover:text-red-500"
                  >
                    −
                  </button>

                  <span className="w-6 text-center">{quantity}</span>

                  <button
                    onClick={increase}
                    className="px-2 text-xl font-bold text-gray-600 hover:text-green-500"
                  >
                    +
                  </button>
                </div>
                <h1 className=" col-2">50</h1>
              </div>
            </div> */}

       {cartItems.map((item, index) => (
  <div key={item.id || index} className="flex flex-row flex-wrap items-center justify-between border col-12 ">
    <div className="flex flex-row flex-wrap items-center justify-start gap-[4rem] p-4 col-6 ">
      <Trash2 className="w-5 h-5 cursor-pointer"    onClick={() => handleRemove(item.variantId)} />
      <img src={item.image} className="col-3" alt={item.name} />
      <h1 className="text-sm col-3">{item.name}</h1>
    </div>
    <div className="flex flex-row flex-wrap items-center justify-center gap-[3rem] col-6">
      <h1 className="col-2">${item.price}</h1>
      <div className="flex items-center gap-2 px-2 py-1 border rounded-md col-4 w-fit">
        <button
          onClick={() => handleDecrease(item.id)}
          className="px-2 text-xl font-bold text-gray-600 hover:text-red-500"
        >
          −
        </button>
        <span className="w-6 text-center">{item.quantity}</span>
        <button
          onClick={() => handleIncrease(item.id)}
          className="px-2 text-xl font-bold text-gray-600 hover:text-green-500"
        >
          +
        </button>
      </div>
      <h1 className="col-2">${(item.price * item.quantity).toFixed(2)}</h1>
    </div>
  </div>
))}


       
          </section>

          <section className="border col-4 lg:mt-12">
            <div className="flex flex-row flex-wrap items-start justify-center p-4">
              <div className="flex flex-wrap gap-4 p-4 col-12">
                <div className="p-2 text-2xl font-semibold border-b col-12">
                  <h1>Cart Totals</h1>
                </div>
                <div className="flex flex-row flex-wrap justify-between p-2 text-xl font-semibold col-12 ">
        <h1>subtotal </h1> <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center p-2 border-t border-b col-12">
                       <div className="justify-center col-2">
                    <h1>shipping</h1>
                  </div>
                  <div className="flex flex-col flex-wrap items-end col-10">
                    <span className="flex flex-row flex-wrap items-center gap-2">
                      <input type="radio" /> <h2>Flout rate</h2>
                    </span>
                    <span className="flex flex-row flex-wrap items-center gap-2">
                      <input type="radio" />
                      <h2>local pickup</h2>
                    </span>
                    <p className="flex text-[12px] text-end">
                      Shipping to 14 White Oak Avenue, Placeat error offic,
                      Dolor veniam est ut, 75956, Ethiopia.
                    </p>
                    <h2 className="text-customTeal hover:text-black">change address</h2>
                  </div>
                  
             
                </div>

                <div className="flex flex-row flex-wrap justify-between text-xl font-semibold col-12">
                  <h1>Total</h1>
             <h1 className="text-2xl text-customTeal">${subtotal.toFixed(2)}</h1>
                </div>
                <button 
                  onClick={() => navigate("/checkoutform", {
    state: {
      cart: cartPayload,
      total: total,
    },
  })}
                className="p-2 border-none rounded-none btn btn-success bg-customTeal col-12">
                    Proceed to checkout
                 </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
