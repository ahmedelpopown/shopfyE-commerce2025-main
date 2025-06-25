import Layout from "../../components/Layout/Layout";
import img from "../../assets/cardImage/Womens-Accessories-Vegan-Leather-Mini-Backpac04-768x978.jpg";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  const [coupon, setCoupon] = useState("");

  const handleApply = () => {
    if (coupon.trim() === "") {
      alert("من فضلك أدخل كود الخصم");
    } else {
      // هنا ممكن تبعت الكود للسيرفر أو API
      alert(`تم تطبيق الكود: ${coupon}`);
    }
  };
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
            <div className="flex flex-row flex-wrap items-center justify-between border col-12 ">
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
            </div>
            <div className="flex flex-row flex-wrap items-center justify-between border col-12 ">
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
            </div>

            <div className="flex flex-row flex-wrap items-center justify-between">
              <div className="flex w-full max-w-md p-4 ">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 py-2 bg-gray-100 border-none"
                />
                <button
                  onClick={handleApply}
                  className="py-2 text-white border-none rounded-none bg-customTeal btn btn-success hover:bg-black"
                >
                  Apply Coupon
                </button>
              </div>
              <div>
                <button className="mr-4 border-none rounded-none opacity-50 cursor-not-allowed btn btn-success bg-customTeal">
                  Update cart
                </button>
              </div>
            </div>
          </section>

          <section className="border col-4 lg:mt-12">
            <div className="flex flex-row flex-wrap items-start justify-center p-4">
              <div className="flex flex-wrap gap-4 p-4 col-12">
                <div className="p-2 text-2xl font-semibold border-b col-12">
                  <h1>Cart Totals</h1>
                </div>
                <div className="flex flex-row flex-wrap justify-between p-2 text-xl font-semibold col-12 ">
                  <h1>subtotal </h1> <span>$99.05</span>
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
                  <h1 className="text-2xl text-customTeal">$ 99.05</h1>
                </div>
                <button className="p-2 border-none rounded-none btn btn-success bg-customTeal col-12">
                <Link to="/checkoutform">  Proceed to checkout</Link>
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
