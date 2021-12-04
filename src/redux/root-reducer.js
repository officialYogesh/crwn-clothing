import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
