import { CaseReducer, createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { QueryParams, ResponseState } from "../shared";

interface Auth {
  // device_id: number;
  newUser: boolean;
  token: string;
  accessToken: string;
  sessionToken: string;
  isVerified: boolean;
  emailVerified: boolean;
  isAuthenticated: boolean;
  expires_at: string;
  created_at: Date;
  // user: {}
}

export interface AuthState {
  auth: ResponseState<Auth>;
}

export const initialState: AuthState = {
  auth: {
    fetching: false,
    data: [],
    // isAuthenticated: boolean
  },
};

const getAuthRequest: CaseReducer<AuthState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.auth.error;
  state.auth.fetching = true;
};

const getAuthSuccess: CaseReducer<
  AuthState,
  PayloadAction<ResponseState<Auth>>
> = (state, { payload }) => {
  state.auth.data = payload.data;
  state.auth.fetching = false;
  state.auth.meta = payload.meta;
};

const getAuthFailed: CaseReducer<AuthState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.auth.fetching = false;
  state.auth.error = payload;
};



const setAuthRequest: CaseReducer<AuthState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.auth.error;
  state.auth.fetching = true;
};


// type CaseReducer
//<S = any, A extends Action<any> = AnyAction> = (state: Draft<S>, action: A) 
//=> S | void | Draft<S>

// (alias) type PayloadAction
//<P = void, T extends string = string, M = never, E = never> = {
//   payload: P;
//   type: T;
// } & ([M] extends [never] ? {} : {
//   meta: M;
// }) & ([E] extends [never] ? {} : {
//   error: E;
// })

const _setAuthRequest: CaseReducer<AuthState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.auth.error;
  state.auth.fetching = true;
};

const setAuthSuccess: CaseReducer<
  AuthState,
  PayloadAction<ResponseState<Auth>>
> = (state, { payload }) => {
  state.auth.data = payload.data;
  state.auth.fetching = false;
  state.auth.meta = payload.meta;
};

const setAuthFailed: CaseReducer<AuthState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.auth.fetching = false;
  state.auth.error = payload;
};

const verifyAuthRequest: CaseReducer<AuthState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.auth.error;
  state.auth.fetching = true;
};

const verifyAuthSuccess: CaseReducer<
  AuthState,
  PayloadAction<ResponseState<Auth>>
> = (state, { payload }) => {
  state.auth.data = payload.data;
  state.auth.fetching = false;
  state.auth.meta = payload.meta;
};

const verifyAuthFailed: CaseReducer<AuthState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.auth.fetching = false;
  state.auth.error = payload;
};

const signOutRequest: CaseReducer<AuthState, PayloadAction<QueryParams>> = (
  state
)=>{
  delete state.auth.error 
  state.auth.fetching = true;
}

const signOutSuccess: CaseReducer<AuthState, PayloadAction<ResponseState<AuthState>>> =(
  state,
)=>{
state.auth.data = [];
state.auth.fetching = false
// state.auth.meta = payload.meta
}

const signOutFailed: CaseReducer<AuthState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.auth.fetching = false;
  state.auth.error = payload;
};

const testAction = createAction<AuthState>('testAction')

// export const setAuth = createAction<typeof setAuthRequest>("SET_AUTH")
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuthRequest,
    getAuthSuccess,
    getAuthFailed,
    setAuthRequest,
    setAuthSuccess,
    setAuthFailed,
    verifyAuthRequest,
    verifyAuthSuccess,
    verifyAuthFailed,
    signOutRequest,
    signOutSuccess,
    signOutFailed
  },
  extraReducers:(builder)=>{
    builder.addCase(testAction,(state, action)=>{
      (
        delete state.auth.error,
        state.auth.fetching = true
        )
      }
    )
    .addCase('',()=>{

    })
  }
});

// export const {setAuthRequest} = authSlice.actions


export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
