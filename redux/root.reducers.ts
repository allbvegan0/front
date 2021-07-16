import { AnyAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authActions, authReducer } from "./slices/auth";
import { commonReducer } from "./slices/common";
import { deviceReducer } from "./slices/device";
import { deviceListReducer } from "./slices/devices";
import { fileReducer } from "./slices/file";
import { AddLabReducer } from "./slices/lab";
import { OrderReducer } from "./slices/order";
import { PaymentReducer } from "./slices/payment/types";
import { postReducer } from "./slices/post";
import { ProductReducer } from "./slices/products";
import { profileReducer } from "./slices/profile";
import { ShopReducer } from "./slices/shop";

import { SubscriptionReducer } from "./slices/subscription";
import { AddressReducer } from "./slices/user/address";
import { userReducer } from "./slices/user/user";

const rootReducer = combineReducers({
  common: commonReducer,
  device_list: deviceListReducer,
  device: deviceReducer,
  auth: authReducer,
  post: postReducer,
  file: fileReducer,
  profile: profileReducer,
  user: userReducer,
  product: ProductReducer,
  address: AddressReducer,
  shop: ShopReducer,
  order: OrderReducer,
  payment: PaymentReducer,
  subscription: SubscriptionReducer,
  lab: AddLabReducer
});
// const rootReducer = (
//   state: ReturnType<typeof appReducer>,
//   action: AnyAction
// ) => {
// /* if you are using RTK, you can import your action and 
// use it's type property instead of the literal definition of the action  */
//   if (authActions.signOutRequest) {
//     return appReducer(undefined, { type: undefined });
//   }

//   return appReducer(state, action);
// };

export type RootState = ReturnType<typeof rootReducer>;


export default rootReducer;
