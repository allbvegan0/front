import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../../shared";

interface User {
  id: number;
  email: string;
  image: string;
  name: string;
  role: string
}

interface UserState {
  user: ResponseState<User>;
}

export const initialState: UserState = {
  user: {
    fetching: false,
    data: [],
  },
};

const updateUserRequest: CaseReducer<
  UserState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.user.error;
  state.user.fetching = true;
};

const updateUserSuccess: CaseReducer<
  UserState,
  PayloadAction<ResponseState<User>>
> = (state, { payload }) => {
  state.user.data = payload.data;
  state.user.fetching = false;
  state.user.meta = payload.meta;
};

const updateUserFailed: CaseReducer<UserState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.user.fetching = false;
  state.user.error = payload;
};

const getUserRequest: CaseReducer<UserState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.user.error;
  state.user.fetching = true;
};

const getUserSuccess: CaseReducer<
  UserState,
  PayloadAction<ResponseState<User>>
> = (state, { payload }) => {
  state.user.data = payload.data;
  state.user.fetching = false;
  state.user.meta = payload.meta;
};

const getUserFailed: CaseReducer<UserState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.user.fetching = false;
  state.user.error = payload;
};

const userReset: CaseReducer<
UserState,
PayloadAction<ResponseState<User>>
> = (state, { payload }) => {
state.user.data = []
state.user.fetching = false;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserRequest,
    getUserSuccess,
    getUserFailed,
    updateUserRequest,
    updateUserSuccess,
    updateUserFailed,
    userReset
    // checkUser,
    // checkUserSucess,
    // checkUserFailed,
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
