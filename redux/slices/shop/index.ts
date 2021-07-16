import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../../shared";

interface Shop {
  subscription_type: string;
  activeSubscriptionStep: number;
  owner_type: string;
  company_name: string;
  individual_name: string;
  GST: string;
  PAN: string;
  // recieved_;
  recieved_subscription_response_from_server: string;

}

interface ShopState {
  Shop: ResponseState<Shop>;
}

const initialState: ShopState = {
  Shop: {
    fetching: false,
    data: [],
  },
};

const createShopRequest: CaseReducer<
  ShopState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.Shop.error;
  state.Shop.fetching = true;
};

const createShopSuccess: CaseReducer<
  ShopState,
  PayloadAction<ResponseState<Shop>>
> = (state, { payload }) => {
  state.Shop.data = payload.data;
  state.Shop.fetching = false;
  state.Shop.meta = payload.meta;
};

const createShopFailed: CaseReducer<ShopState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Shop.fetching = false;
  state.Shop.error = payload;
};

const getShopRequest: CaseReducer<ShopState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.Shop.error;
  state.Shop.fetching = true;
};

const getShopSuccess: CaseReducer<
  ShopState,
  PayloadAction<ResponseState<Shop>>
> = (state, { payload }) => {
  state.Shop.data = payload.data;
  state.Shop.fetching = false;
  state.Shop.meta = payload.meta;
};

const getShopFailed: CaseReducer<ShopState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Shop.fetching = false;
  state.Shop.error = payload;
};


const updateShopRequest: CaseReducer<ShopState, PayloadAction<QueryParams>> = (
  state
  ) => {
    delete state.Shop.error;
    state.Shop.fetching = true;
  };
  
  const updateShopSuccess: CaseReducer<
  ShopState,
  PayloadAction<ResponseState<Shop>>
  > = (state, { payload }) => {
    state.Shop.data = payload.data;
    state.Shop.fetching = false;
    state.Shop.meta = payload.meta;
  };
  
  const updateShopFailed: CaseReducer<ShopState, PayloadAction<string>> = (
    state,
    { payload }
  ) => {
    state.Shop.fetching = false;
    state.Shop.error = payload;
  };

const ShopReset: CaseReducer<
ShopState,
PayloadAction<ResponseState<Shop>>
> = (state, { payload }) => {
state.Shop.data = []
state.Shop.fetching = false;
};

const ShopSlice = createSlice({
  name: "Shop",
  initialState,
  reducers: {
    getShopRequest,
    getShopSuccess,
    getShopFailed,
    createShopRequest,
    createShopSuccess,
    createShopFailed,
    updateShopRequest,
    updateShopSuccess,
    updateShopFailed,
    ShopReset
  },
});

export const ShopActions = ShopSlice.actions;
export const ShopReducer = ShopSlice.reducer;
