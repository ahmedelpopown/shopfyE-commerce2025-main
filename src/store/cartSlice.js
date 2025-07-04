// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.variantId === action.payload.variantId
      );

      if (existing) {
        const newQuantity = existing.quantity + action.payload.quantity;
        if (
          action.payload.maxQuantity &&
          newQuantity > action.payload.maxQuantity
        ) {
          alert(
            `لا يمكن إضافة أكثر من ${action.payload.maxQuantity} من هذا المنتج`
          );
          return;
        }
        existing.quantity = newQuantity;
      } else {
        state.items.push(action.payload);
      }

      state.isVisible = true;
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.variantId !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.variantId === id);
      if (item && quantity >= 1) {
        item.quantity = quantity;
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.maxQuantity && item.quantity >= item.maxQuantity) {
          alert(`لا يمكن تجاوز الكمية المتاحة (${item.maxQuantity})`);
          return;
        }
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    setCartVisible: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  setCartVisible,
} = cartSlice.actions;

export default cartSlice.reducer;
