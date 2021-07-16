import { Reducer } from "redux";

import {
  CREATE_SHOP_SUBSCRIPTION,
  CREATE_SHOP_SUBSCRIPTION_GST,
  CREATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS,
  CREATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION,
  CREATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME,
  CREATE_SHOP_SUBSCRIPTION_OWNER_INDIVIDUAL_NAME,
  CREATE_SHOP_SUBSCRIPTION_OWNER_TYPE,
  CREATE_SHOP_SUBSCRIPTION_PAN,
  SUBSCRIPTION_NEXT_STEP,
  SUBSCRIPTION_PREVIOUS_STEP,
  ShopActionTypes,
  ShopState,
  SUBSCRIPTION_RESET_FORM,
  CREATE_SHOP_SUBSCRIPTION_TYPE,
  UPDATE_SHOP_SUBSCRIPTION_TYPE,
  SEND_SHOP_SUBSCRIPTION_ORDER_ID_PAYMENT,
  SET_SHOP,
  SET_SUBSCRIPTION_TYPE_NONE,
} from "./shop.types";

const INITIAL_STATE = {
  shop_id: 0,
  shop_type: "",
  allowed_item: 0,
  stored_draft_items: 0,
  consumed_resources: 0,
  released_items: 0,
  item_stats: 0,
  item_promotion_content: "",
  contact_list: [],
  active_feeds: [],
  shop_subscription: {
    activeSubscriptionStep: 0,
    recieved_subscription_response_from_server: "",
    // subscriptionId: 0,
    subscription_type: "",
    owner_type: "",
    company_name: "",
    individual_name: "",
    GST: "",
    PAN: "",
    inventory: {
      address: "",
      x: 0,
      y: 0,
      waves: {
        sin: 0,
        cos: 0,
        tan: 1,
        º: "",
      },
    },
  },
};

const shopReducer: Reducer<ShopState, ShopActionTypes> = (
  state = INITIAL_STATE,
  action: ShopActionTypes
) => {
  switch (action.type) {
    case CREATE_SHOP_SUBSCRIPTION:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          activeSubscriptionStep: 0,
          subscription_type: action.payload.subscription_type,

          owner_type: action.payload.owner_type,
          company_name: action.payload.company_name,
          individual_name: action.payload.individual_name,
          GST: action.payload.GST,
          PAN: action.payload.PAN,
          inventory: {
            x: action.payload.inventory.x,
            y: action.payload.inventory.y,
            address: action.payload.inventory.address,
            waves: {
              sin: action.payload.inventory.waves.sin,
              cos: action.payload.inventory.waves.cos,
              tan: action.payload.inventory.waves.tan,
              º: action.payload.inventory.waves.º,
            },
          },
        },
      };

    case CREATE_SHOP_SUBSCRIPTION_TYPE:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          subscription_type: action.payload,
        },
      };
    case UPDATE_SHOP_SUBSCRIPTION_TYPE:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          subscription_type: action.payload,
        },
      };

    case SET_SHOP:
      return {
        ...state,
        shop_type: action.payload.shop_type,
        allowed_item: action.payload.allowed_items,
      };

    case SET_SUBSCRIPTION_TYPE_NONE:
      return {
        ...state,
        shop_type: "NOE",
      };

    case CREATE_SHOP_SUBSCRIPTION_OWNER_TYPE:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          owner_type: action.payload,
        },
      };
    case CREATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          company_name: action.payload,
        },
      };
    case CREATE_SHOP_SUBSCRIPTION_OWNER_INDIVIDUAL_NAME:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          individual_name: action.payload,
        },
      };
    case CREATE_SHOP_SUBSCRIPTION_GST:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          GST: action.payload,
        },
      };
    case CREATE_SHOP_SUBSCRIPTION_PAN:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          PAN: action.payload,
        },
      };
    case CREATE_SHOP_SUBSCRIPTION_INVENTORY_LOCATION:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          inventory: {
            x: action.payload.x,
            y: action.payload.y,
            waves: {
              sin: action.payload.waves.sin,
              cos: action.payload.waves.cos,
              tan: action.payload.waves.tan,
              º: action.payload.waves.º,
            },
            address: action.payload.address,
          },
        },
      };

    case CREATE_SHOP_SUBSCRIPTION_INVENTORY_ADDRESS:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          inventory: {
            ...state.shop_subscription.inventory,
            address: action.payload,
          },
        },
      };

    // case "SEND_SHOP_SUBSCRIPTION_ORDER":

    case SEND_SHOP_SUBSCRIPTION_ORDER_ID_PAYMENT:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,
          recieved_subscription_response_from_server: action.payload,
          inventory: {
            ...state.shop_subscription.inventory,
            recieved_subscription_response_from_server: action.payload,
          },
        },
      };

    case SUBSCRIPTION_RESET_FORM:
      return {
        ...state,
      };
    case SUBSCRIPTION_NEXT_STEP:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,

          activeSubscriptionStep:
            state.shop_subscription.activeSubscriptionStep + 1,
        },
      };
    case SUBSCRIPTION_PREVIOUS_STEP:
      return {
        ...state,
        shop_subscription: {
          ...state.shop_subscription,

          activeSubscriptionStep:
            state.shop_subscription.activeSubscriptionStep - 1,
        },
      };
    default:
      return state;
  }
};

export default shopReducer;
