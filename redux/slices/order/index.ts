import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../../shared";

interface Order {
  id: number;
  pubished: boolean;
  text: string;
  content: string;
  authorId: number;
  updatedAt: Date;
  createdAt: Date;
}

interface OrderState {
  Order: ResponseState<Order>;
}

const initialState: OrderState = {
  Order: {
    fetching: false,
    data: [],
  },
};

const createOrderRequest: CaseReducer<
  OrderState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.Order.error;
  state.Order.fetching = true;
};

const createOrderSuccess: CaseReducer<
  OrderState,
  PayloadAction<ResponseState<Order>>
> = (state, { payload }) => {
  state.Order.data = payload.data;
  state.Order.fetching = false;
  state.Order.meta = payload.meta;
};

const createOrderFailed: CaseReducer<OrderState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Order.fetching = false;
  state.Order.error = payload;
};

const getOrderRequest: CaseReducer<OrderState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.Order.error;
  state.Order.fetching = true;
};

const getOrderSuccess: CaseReducer<
  OrderState,
  PayloadAction<ResponseState<Order>>
> = (state, { payload }) => {
  state.Order.data = payload.data;
  state.Order.fetching = false;
  state.Order.meta = payload.meta;
};

const getOrderFailed: CaseReducer<OrderState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Order.fetching = false;
  state.Order.error = payload;
};

const OrderReset: CaseReducer<
OrderState,
PayloadAction<ResponseState<Order>>
> = (state, { payload }) => {
state.Order.data = []
state.Order.fetching = false;
};

const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    getOrderRequest,
    getOrderSuccess,
    getOrderFailed,
    createOrderRequest,
    createOrderSuccess,
    createOrderFailed,
    OrderReset
    // checkOrder,
    // checkOrderSucess,
    // checkOrderFailed,
  },
});

export const OrderActions = OrderSlice.actions;
export const OrderReducer = OrderSlice.reducer;
