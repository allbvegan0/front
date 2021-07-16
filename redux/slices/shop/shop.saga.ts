import { takeLatest, put, all, call } from "redux-saga/effects";
import * as ShopActionTypes from "./shop.types";
import * as actions from "./shop.actions";
import {
  createUserShop,
  getUserShop,
} from "../../../services/shop";
import {
  getSubscriptionOrderReciept
} from "../../../services/shop/subscription";
import { recieveSubscriptionOrederId } from "./shop.actions";

function* nextSS(action: any) {
  try {
    yield put(actions.success());
  } catch (error) {
    yield put(actions.failure(error));
  }
}

export function* nextStepSubscription() {
  yield takeLatest(ShopActionTypes.SUBSCRIPTION_NEXT_STEP, nextSS);
}

function* sendSO(action: any) {
  try {
    const subscription = action.payload;
    console.log("saga--->s", subscription);
    const { subscription_type } = subscription;

    const subscription_order_receipt = yield call(
      getSubscriptionOrderReciept,
      subscription_type
      // amount
    );

    if (subscription_order_receipt) {
      console.log("--==--==>", subscription_order_receipt);
      const { create_subscription_order } = subscription_order_receipt;
      yield put(recieveSubscriptionOrederId(create_subscription_order));
      yield put(actions.success());
    }
  } catch (error) {
    yield put(actions.failure(error));
  }
}

export function* sendShopSubscriptionOrderToBack() {
  yield takeLatest(ShopActionTypes.SEND_SHOP_SUBSCRIPTION_ORDER, sendSO);
}

function* create_S(action: any) {
  try {
    const confirmation = action.payload;
    console.log("™--->", confirmation);
    const {
      subscription_type,
      payment_receipt_id,
      order_id,
      owner_type,
      gst,
      pan,
      x,
      y,
      inventory_location,
    } = confirmation;
    const shop = yield call(
      createUserShop,
      subscription_type,
      payment_receipt_id,
      order_id,
      owner_type,
      gst,
      pan,
      x,
      y,
      inventory_location
    );

    if (shop) {
      const { create_shop_recieved_payment: _shop } = shop;
      yield put(actions.setShop(_shop));
      yield put(actions.success());
    }
  } catch (error) {
    yield put(actions.failure(error));
  }
}

export function* createShopAtBack() {
  yield takeLatest(
    ShopActionTypes.SEND_SHOP_SUBSCRIPTION_ORDER_CONFIRMATION,
    create_S
  );
}

function* getS(action: any) {
  try {
    const shop = yield call(getUserShop, action.payload.email);

    console.log("track shop---->", shop);
    if (shop !== null) {
      console.log("shop found=====>");
      const { subscription_type: shop_type, allowed_items } = shop;
      // const {
      //   get_user_shop: { subscription_type: shop_type, allowed_items },
      // } = shop;
      // console.log("user Shop", _shop);
      yield put(actions.setShop({ shop_type, allowed_items }));
      yield put(actions.success());
    } else {
      yield put(actions.setShopSubscriptionTypeNone());
      // yield put(actions.failure({ error: "User not Shokeeper" }));
    }
  } catch (error) {
    yield put(actions.failure(error));
  }
}
export function* getShop() {
  yield takeLatest(ShopActionTypes.GET_SHOP, getS);
}

export default function* shopSaga() {
  yield all([
    call(nextStepSubscription),
    call(sendShopSubscriptionOrderToBack),
    call(createShopAtBack),
    call(getShop),
  ]);
}
