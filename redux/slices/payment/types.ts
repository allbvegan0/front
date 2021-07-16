import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../../shared";

interface Payment {
  id: number;
  amount: number
  userId: number
  orderId: number 
  provider: string
  status: string
}

interface PaymentState {
  Payment: ResponseState<Payment>;
}

const initialState: PaymentState = {
  Payment: {
    fetching: false,
    data: [],
  },
};

const createPaymentRequest: CaseReducer<
  PaymentState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.Payment.error;
  state.Payment.fetching = true;
};

const createPaymentSuccess: CaseReducer<
  PaymentState,
  PayloadAction<ResponseState<Payment>>
> = (state, { payload }) => {
  state.Payment.data = payload.data;
  state.Payment.fetching = false;
  state.Payment.meta = payload.meta;
};

const createPaymentFailed: CaseReducer<PaymentState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Payment.fetching = false;
  state.Payment.error = payload;
};

const getPaymentRequest: CaseReducer<PaymentState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.Payment.error;
  state.Payment.fetching = true;
};

const getPaymentSuccess: CaseReducer<
  PaymentState,
  PayloadAction<ResponseState<Payment>>
> = (state, { payload }) => {
  state.Payment.data = payload.data;
  state.Payment.fetching = false;
  state.Payment.meta = payload.meta;
};

const getPaymentFailed: CaseReducer<PaymentState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Payment.fetching = false;
  state.Payment.error = payload;
};

const PaymentReset: CaseReducer<
PaymentState,
PayloadAction<ResponseState<Payment>>
> = (state, { payload }) => {
state.Payment.data = []
state.Payment.fetching = false;
};

const PaymentSlice = createSlice({
  name: "Payment",
  initialState,
  reducers: {
    getPaymentRequest,
    getPaymentSuccess,
    getPaymentFailed,
    createPaymentRequest,
    createPaymentSuccess,
    createPaymentFailed,
    PaymentReset
    // checkPayment,
    // checkPaymentSucess,
    // checkPaymentFailed,
  },
});

export const PaymentActions = PaymentSlice.actions;
export const PaymentReducer = PaymentSlice.reducer;
