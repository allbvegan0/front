
export const CREATE_SHOP_OWNER = "CREATE_SHOP_OWNER";
export const CREATE_FREE_SHOP_OWNER_TYPE = "CREATE_FREE_SHOP_OWNER_TYPE";
export const CREATE_PRO_SHOP_OWNER_TYPE = "CREATE_PRO_SHOP_OWNER_TYPE";
export const SHOW_PRODUCT_DRAFT_CREATOR = "SHOW_PRODUCT_DRAFT_CREATOR";

export const ALOT_SPACE_TO_SHOP_OWNER = "ALOT_SPACE_TO_SHOP_OWNER";
export const CREATE_ASSETS_FROM_SHOP_OWNER = "CREATE_ASSETS_FROM_SHOP_OWNER";


export const CREATE_ASSETS_FOR_SHOP_OWNER = "CREATE_ASSETS_FOR_SHOP_OWNER";

export const GET_SHOP = "GET_SHOP";
export const SET_SHOP = "SET_SHOP";
export const CREATE_SHOP_SUBSCRIPTION = "CREATE_SHOP_SUBSCRIPTION";
export const UPDATE_SHOP_SUBSCRIPTION = "CREATE_SHOP_SUBSCRIPTION";
export const DEACTIVATE_SHOP_SUBSCRIPTION = "DEACTIVATE_SHOP_SUBSCRIPTION";

export const CREATE_SHOP_SUBSCRIPTION_TYPE = "CREATE_SHOP_SUBSCRIPTION_TYPE";
export const UPDATE_SHOP_SUBSCRIPTION_TYPE = "UPDATE_SHOP_SUBSCRIPTION_TYPE";
export const DEACTIVATE_SHOP_SUBSCRIPTION_TYPE =
  "DEACTIVATE_SHOP_SUBSCRIPTION_OWNER_TYPE";

export const SET_SUBSCRIPTION_TYPE_NONE = "SET_SUBSCRIPTION_TYPE_NONE";

export const CREATE_SHOP_SUBSCRIPTION_OWNER_TYPE =
  "CREATE_SHOP_SUBSCRIPTION_OWNER_TYPE";
export const UPDATE_SHOP_SUBSCRIPTION_OWNER_TYPE =
  "UPDATE_SHOP_SUBSCRIPTION_OWNER_TYPE";
export const DEACTIVATE_SHOP_SUBSCRIPTION_OWNER_TYPE =
  "DEACTIVATE_SHOP_SUBSCRIPTION_OWNER_TYPE";

export const CREATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME =
  "CREATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME";
export const UPDATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME =
  "UPDATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME";

export const CREATE_SHOP_SUBSCRIPTION_OWNER_INDIVIDUAL_NAME =
  "CREATE_SHOP_SUBSCRIPTION_OWNER_INDIVIDUAL_NAME";
export const UPDATE_SHOP_SUBSCRIPTION_OWNER_INDIVIDUAL_NAME =
  "UPDATE_SHOP_SUBSCRIPTION_OWNER_INDIVIDUAL_NAME";

export const CREATE_SHOP_SUBSCRIPTION_GST = "CREATE_SHOP_SUBSCRIPTION_GST";
export const UPDATE_SHOP_SUBSCRIPTION_GST = "CREATE_SHOP_SUBSCRIPTION_GST";
export const DEACTIVATE_SHOP_SUBSCRIPTION_GST =
  "DEACTIVATE_SHOP_SUBSCRIPTION_GST";

export const CREATE_SHOP_SUBSCRIPTION_PAN = "CREATE_SHOP_SUBSCRIPTION_PAN";
export const UPDATE_SHOP_SUBSCRIPTION_PAN = "CREATE_SHOP_SUBSCRIPTION_PAN";
export const DEACTIVATE_SHOP_SUBSCRIPTION_PAN =
  "DEACTIVATE_SHOP_SUBSCRIPTION_PAN";

export const CREATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS =
  "CREATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS";
export const UPDATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS =
  "CREATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS";
export const DEACTIVATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS =
  "DEACTIVATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS";

export const CREATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION =
  "CREATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION";
export const UPDATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION =
  "CREATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION";
export const DEACTIVATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION =
  "DEACTIVATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION";

export const SEND_SHOP_SUBSCRIPTION_ORDER = "SEND_SHOP_SUBSCRIPTION_ORDER";
export const SEND_SHOP_SUBSCRIPTION_ORDER_ID_PAYMENT =
  "SEND_SHOP_SUBSCRIPTION_ORDER_ID_PAYMENT";
export const SEND_SHOP_SUBSCRIPTION_ORDER_CONFIRMATION =
  "SEND_SHOP_SUBSCRIPTION_ORDER_CONFIRMATION";

export const DETECT_OWNER_TYPE = "DETECT_OWNER_TYPE";

export const SHOW_OWNER_SALES = "SHOW_OWNER_SALES";

export const SUBSCRIPTION_STATUS = "SUBSCRIPTION_STATUS";

export const SUBSCRIPTION_NEXT_STEP = "SUBSCRIPTION_NEXT_STEP";
export const SUBSCRIPTION_PREVIOUS_STEP = "SUBSCRIPTION_PREVIOUS_STEP";
export const SUBSCRIPTION_RESET_FORM = "SUBSCRIPTION_RESET_FORM";

export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export interface ShopState {
  shop_id: number;
  shop_type: string;
  allowed_item: number;
  stored_draft_items: number;
  consumed_resources: number;
  released_items: number;
  item_stats: number;
  item_promotion_content: string;
  contact_list: number[];
  active_feeds: number[];
  shop_subscription: S_S;
}

export interface S_S {
  subscription_type: string;
  activeSubscriptionStep: number;
  owner_type: string;
  company_name: string;
  individual_name: string;
  GST: string;
  PAN: string;
  inventory: In_v_en_t_o_ry;
  // recieved_;
  recieved_subscription_response_from_server: string;
}

export interface In_v_en_t_o_ry {
  address: string;
  x: number;
  y: number;
  waves: waves;
}

export enum SHOP_TYPE {
  NONE,
  FREE,
  PRO,
  ENTERPRISE,
  AGENT,
  SUPERAGENT,
  ADMIN_SHOP,
}

export interface waves {
  sin: number;
  cos: number;
  tan: number;
  º: String;
  //waveform: Image//
  //sound_waveform: Sound//
}

export interface showProductDraftCreator {
  type: typeof SHOW_PRODUCT_DRAFT_CREATOR;
  payload: boolean;
}

export interface getShop {
  type: typeof GET_SHOP;
}

export interface setShop {
  type: typeof SET_SHOP;
  payload: any;
}

export interface createShopSubscriptionType {
  type: typeof CREATE_SHOP_SUBSCRIPTION_TYPE;
  payload: string;
}

export interface setShopSubscriptionTypeNone {
  type: typeof SET_SUBSCRIPTION_TYPE_NONE;
  payload: string;
}

export interface updateShopSubscriptionType {
  type: typeof UPDATE_SHOP_SUBSCRIPTION_TYPE;
  payload: string;
}

export interface createShopSubscriptionOwnerType {
  type: typeof CREATE_SHOP_SUBSCRIPTION_OWNER_TYPE;
  payload: string;
}

export interface createShopSubscriptionCompanyName {
  type: typeof CREATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME;
  payload: string;
}

export interface updateShopSubscriptionCompanyName {
  type: typeof UPDATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME;
  payload: string;
}

export interface createShopSubscriptionIndividualName {
  type: typeof CREATE_SHOP_SUBSCRIPTION_OWNER_INDIVIDUAL_NAME;
  payload: string;
}

export interface updateShopSubscriptionIndividualName {
  type: typeof UPDATE_SHOP_SUBSCRIPTION_OWNER_INDIVIDUAL_NAME;
  payload: string;
}

export interface createShopSubscriptionGST {
  type: typeof CREATE_SHOP_SUBSCRIPTION_GST;
  payload: string;
}

export interface updateShopSubscriptionGST {
  type: typeof UPDATE_SHOP_SUBSCRIPTION_GST;
  payload: string;
}

export interface createShopSubscriptionPAN {
  type: typeof CREATE_SHOP_SUBSCRIPTION_PAN;
  payload: string;
}

export interface updateShopSubscriptionPAN {
  type: typeof UPDATE_SHOP_SUBSCRIPTION_PAN;
  payload: string;
}

export interface createShopSubscriptionInventoryAddress {
  type: typeof CREATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS;
  payload: string;
}

export interface updateShopSubscriptionInventoryAddress {
  type: typeof UPDATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS;
  payload: string;
}

export interface createShopSubscriptionInventoryLocation {
  type: typeof CREATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION;
  payload: In_v_en_t_o_ry;
}

export interface updateShopSubscriptionInventoryLocation {
  type: typeof UPDATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION;
  payload: In_v_en_t_o_ry;
}

export interface sendShopSubscriptionOrder {
  type: typeof SEND_SHOP_SUBSCRIPTION_ORDER;
  payload: S_S;
}

export interface sendShopSubscriptionOrderPayment {
  type: typeof SEND_SHOP_SUBSCRIPTION_ORDER_ID_PAYMENT;
  payload: any;
}

export interface sendShopSubscriptionOrderConfirmation {
  type: typeof SEND_SHOP_SUBSCRIPTION_ORDER_CONFIRMATION;
  payload: {
    payment_id: string;
    order_id: string;
    shop_type: string;
  };
}

export interface create_S_S {
  type: typeof CREATE_SHOP_SUBSCRIPTION;
  payload: S_S;
}
export interface nextSubscriptionStep {
  type: typeof SUBSCRIPTION_NEXT_STEP;
  payload: number;
}

export interface previousSubscriptionStep {
  type: typeof SUBSCRIPTION_PREVIOUS_STEP;
  payload: number;
}

export interface resetSubscriptionForm {
  type: typeof SUBSCRIPTION_RESET_FORM;
  payload: S_S;
}
export interface success {
  type: typeof SUCCESS;
}
export interface failure {
  type: typeof FAILURE;
  error: string;
}

export type ShopActionTypes =
  | getShop
  | setShop
  | create_S_S
  | createShopSubscriptionType
  | updateShopSubscriptionType
  | setShopSubscriptionTypeNone
  | createShopSubscriptionOwnerType
  | createShopSubscriptionCompanyName
  | createShopSubscriptionIndividualName
  | createShopSubscriptionGST
  | updateShopSubscriptionGST
  | createShopSubscriptionPAN
  | updateShopSubscriptionPAN
  | createShopSubscriptionInventoryAddress
  | updateShopSubscriptionInventoryAddress
  | createShopSubscriptionInventoryLocation
  | updateShopSubscriptionInventoryLocation
  | sendShopSubscriptionOrder
  | sendShopSubscriptionOrderPayment
  | sendShopSubscriptionOrderConfirmation
  | nextSubscriptionStep
  | previousSubscriptionStep
  | resetSubscriptionForm
  | success
  | failure;
