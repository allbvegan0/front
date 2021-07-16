import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../../shared";

interface Subscription {
  id: number;
  amount: number
  userId: number
  orderId: number 
  provider: string
  status: string
}

interface SubscriptionState {
  Subscription: ResponseState<Subscription>;
}

const initialState: SubscriptionState = {
  Subscription: {
    fetching: false,
    data: [],
  },
};

const createSubscriptionRequest: CaseReducer<
  SubscriptionState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.Subscription.error;
  state.Subscription.fetching = true;
};

const createSubscriptionSuccess: CaseReducer<
  SubscriptionState,
  PayloadAction<ResponseState<Subscription>>
> = (state, { payload }) => {
  state.Subscription.data = payload.data;
  state.Subscription.fetching = false;
  state.Subscription.meta = payload.meta;
};

const createSubscriptionFailed: CaseReducer<SubscriptionState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Subscription.fetching = false;
  state.Subscription.error = payload;
};

const getSubscriptionRequest: CaseReducer<SubscriptionState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.Subscription.error;
  state.Subscription.fetching = true;
};

const getSubscriptionSuccess: CaseReducer<
  SubscriptionState,
  PayloadAction<ResponseState<Subscription>>
> = (state, { payload }) => {
  state.Subscription.data = payload.data;
  state.Subscription.fetching = false;
  state.Subscription.meta = payload.meta;
};

const getSubscriptionFailed: CaseReducer<SubscriptionState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Subscription.fetching = false;
  state.Subscription.error = payload;
};


const updateSubscriptionRequest: CaseReducer<SubscriptionState, PayloadAction<QueryParams>> = (
  state
  ) => {
    delete state.Subscription.error;
    state.Subscription.fetching = true;
  };
  
  const updateSubscriptionSuccess: CaseReducer<
  SubscriptionState,
  PayloadAction<ResponseState<Subscription>>
  > = (state, { payload }) => {
    state.Subscription.data = payload.data;
    state.Subscription.fetching = false;
    state.Subscription.meta = payload.meta;
  };
  
  const updateSubscriptionFailed: CaseReducer<SubscriptionState, PayloadAction<string>> = (
    state,
    { payload }
  ) => {
    state.Subscription.fetching = false;
    state.Subscription.error = payload;
  };

const SubscriptionReset: CaseReducer<
SubscriptionState,
PayloadAction<ResponseState<Subscription>>
> = (state, { payload }) => {
state.Subscription.data = []
state.Subscription.fetching = false;
};

const SubscriptionSlice = createSlice({
  name: "Subscription",
  initialState,
  reducers: {
    getSubscriptionRequest,
    getSubscriptionSuccess,
    getSubscriptionFailed,
    createSubscriptionRequest,
    createSubscriptionSuccess,
    createSubscriptionFailed,
    updateSubscriptionRequest,
    updateSubscriptionSuccess,
    updateSubscriptionFailed,
    SubscriptionReset
  },
});

export const SubscriptionActions = SubscriptionSlice.actions;
export const SubscriptionReducer = SubscriptionSlice.reducer;
