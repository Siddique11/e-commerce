import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import direrctoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whilelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: direrctoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
