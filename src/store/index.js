import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authSlice";
import productReducer from "./productSlice";
import categoriesReducer from "./categoriesSlice";
import cartReducer from "./cartSlice";
import productDetailsReducer from "./productDetailsSlice";
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items", "isVisible"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
  products: productReducer,
  productDetails: productDetailsReducer,
  categories: categoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
