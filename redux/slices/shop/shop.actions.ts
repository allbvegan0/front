import {
  CREATE_SHOP_SUBSCRIPTION_GST,
  CREATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS,
  CREATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION,
  CREATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME,
  CREATE_SHOP_SUBSCRIPTION_OWNER_TYPE,
  CREATE_SHOP_SUBSCRIPTION_PAN,
  SEND_SHOP_SUBSCRIPTION_ORDER,
  FAILURE,
  In_v_en_t_o_ry,
  SUBSCRIPTION_NEXT_STEP,
  SUBSCRIPTION_PREVIOUS_STEP,
  ShopActionTypes,
  SUCCESS,
  SUBSCRIPTION_RESET_FORM,
  S_S,
  CREATE_SHOP_SUBSCRIPTION,
  CREATE_SHOP_SUBSCRIPTION_TYPE,
  UPDATE_SHOP_SUBSCRIPTION_TYPE,
  SEND_SHOP_SUBSCRIPTION_ORDER_ID_PAYMENT,
  SET_SHOP,
  GET_SHOP,
  // ShopState,
  SEND_SHOP_SUBSCRIPTION_ORDER_CONFIRMATION,
  SET_SUBSCRIPTION_TYPE_NONE,
} from "./shop.types";

export const getShop = () => ({
  type: GET_SHOP,
});

export const setShop = (shop: any) => ({
  type: SET_SHOP,
  payload: shop,
});

export const createS_S = (subscription: S_S) => ({
  type: CREATE_SHOP_SUBSCRIPTION,
  payload: subscription,
});

export const setShopSubscriptionTypeNone = () => ({
  type: SET_SUBSCRIPTION_TYPE_NONE,
});

export const createShopSubcriptionType = (subscription_type: string) => ({
  type: CREATE_SHOP_SUBSCRIPTION_TYPE,
  payload: subscription_type,
});

export const updateShopSubcriptionType = (subscription_type: string) => ({
  type: UPDATE_SHOP_SUBSCRIPTION_TYPE,
  payload: subscription_type,
});

export const setShopSubscriptionOwnerType = (
  type: string
): ShopActionTypes => ({
  type: CREATE_SHOP_SUBSCRIPTION_OWNER_TYPE,
  payload: type,
});

export const setShopSubscriptionCompanyName = (
  name: string
): ShopActionTypes => ({
  type: CREATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME,
  payload: name,
});

export const setShopSubscriptionIndividualName = (
  name: string
): ShopActionTypes => ({
  type: CREATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME,
  payload: name,
});

export const setShopSubscriptionGST = (GST: string): ShopActionTypes => ({
  type: CREATE_SHOP_SUBSCRIPTION_GST,
  payload: GST,
});

export const setShopSubscriptionPAN = (PAN: string): ShopActionTypes => ({
  type: CREATE_SHOP_SUBSCRIPTION_PAN,
  payload: PAN,
});

export const setShopSubscriptionInventoryLocation = (
  Inventory: In_v_en_t_o_ry
): ShopActionTypes => ({
  type: CREATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION,
  payload: Inventory,
});

export const setShopSubscriptionInventoryAddress = (
  InventoryAddress: string
): ShopActionTypes => ({
  type: CREATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS,
  payload: InventoryAddress,
});

export const sendSubscriptionOrderToBack = (Shop_Subscription: S_S) => ({
  // => borrorw
  type: SEND_SHOP_SUBSCRIPTION_ORDER,
  payload: Shop_Subscription,
});

export const sendSubscriptionOrderConfirmation = (data: any) => ({
  // => borrorw
  type: SEND_SHOP_SUBSCRIPTION_ORDER_CONFIRMATION,
  payload: data,
});

export const recieveSubscriptionOrederId = (data: any) => ({
  type: SEND_SHOP_SUBSCRIPTION_ORDER_ID_PAYMENT,
  payload: data,
});

export const nextSubscriptionStep = (activeStep: number): ShopActionTypes => ({
  type: SUBSCRIPTION_NEXT_STEP,
  payload: activeStep,
});

export const previousSubscriptionStep = (
  activeStep: number
): ShopActionTypes => ({
  type: SUBSCRIPTION_PREVIOUS_STEP,
  payload: activeStep,
});

export const resetSubscriptionForm = () => ({
  type: SUBSCRIPTION_RESET_FORM,
});

export const success = (): ShopActionTypes => ({
  type: SUCCESS,
});

export const failure = (error: string): ShopActionTypes => ({
  type: FAILURE,
  error: error,
});
