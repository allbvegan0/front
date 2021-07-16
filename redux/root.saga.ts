import { all, call } from "redux-saga/effects";
import shopSaga from "./slices/shop/shop.saga";
// import authSaga from "./saga/auth.saga";
// import cartSaga from "./cart/cart.saga";
// import fileSaga from "./file/file.saga";
// import itemStepperSaga from "./item-stepper/form.saga";
// import itemSaga from "./item/item.saga";
// import orderSaga from "./order/order.saga";
// import profileSaga from "./profile/profile.saga";
// import shopSaga from "./shop/shop.saga";
// import systemSaga from "./system/system.saga";

// import userSaga from "./user/user.saga";

export default function* rootSaga() {
  return yield all([
    // call(authSaga),
    // call(fileSaga),
    // call(profileSaga),
    // call(itemSaga),
    // call(itemStepperSaga),
    // call(cartSaga),
    // call(orderSaga),
    call(shopSaga),
  ]);
}