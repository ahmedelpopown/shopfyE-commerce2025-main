// components/CartSidebar.jsx
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartVisible, removeFromCart, updateQuantity } from "@/store/cartSlice";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.cart.isVisible);
  const cartItems = useSelector((state) => state.cart.items);
  const sidebarRef = useRef(null);

  // ✅ إغلاق السلة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        dispatch(setCartVisible(false));
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, dispatch]);

  // ✅ subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
   

  if (!isVisible) return null;

  return (
    <div className="fixed z-40 flex justify-end bg-black bg-opacity-50">
      {/* ✅ خارج السلة */}
      <div className="w-full h-full" />

      {/* ✅ داخل السلة */}
      <div
        ref={sidebarRef}
        className="relative z-50 h-full p-4 overflow-y-auto bg-white shadow-lg w-96"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">عربة التسوق</h2>
          <button
            onClick={() => dispatch(setCartVisible(false))}
            className="text-2xl text-gray-600 hover:text-red-500"
          >
            ×
          </button>
        </div>

        {/* ✅ محتوى السلة */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">السلة فارغة</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.variantId}
                className="flex items-center justify-between pb-2 border-b"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
               <p className="text-sm text-gray-500">
  {item.size?.name ? `المقاس: ${item.size.name}` : ""}
  {item.color?.name ? `، اللون: ${item.color.name}` : ""}
</p>

                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.variantId, quantity: item.quantity - 1 }))
                      }
                      disabled={item.quantity === 1}
                      className="px-2 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.variantId, quantity: item.quantity + 1 }))
                      }
                      className="px-2 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">{item.price} ج.م</p>
                  <p className="text-sm text-gray-500">
                    الإجمالي: {item.quantity * item.price} ج.م
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.variantId))}
                    className="mt-1 text-sm text-red-500 hover:underline"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}

            {/* ✅ الإجمالي النهائي */}
            <div className="pt-4 mt-6 text-right border-t">
              <p className="text-lg font-bold">
                الإجمالي الكلي: {subtotal} ج.م
              </p>
              <div className="flex gap-2 mt-4">
                <button className="w-full py-2 text-center bg-gray-100 rounded hover:bg-gray-200">
                  عرض السلة
                </button>
                <button className="w-full py-2 text-center text-white bg-green-600 rounded hover:bg-green-500">
                  إتمام الشراء
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
