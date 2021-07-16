import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../shared";

interface Profile {
  id: number;
  userId: string;
  bio: string;
  image: string
  status: string;
  updated_at: Date;
}

interface Address {
  line_1: string
  line_2: string
  state: string
  city: string
  country: string
  zipcode: string
  category: string
}

interface ProfileState {
  profile: ResponseState<Profile>;
}

const initialState: ProfileState = {
  profile: {
    fetching: false,
    data: [],
  },
};

const createProfileRequest: CaseReducer<
  ProfileState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.profile.error;
  state.profile.fetching = true;
};

const createProfileSuccess: CaseReducer<
  ProfileState,
  PayloadAction<ResponseState<Profile>>
> = (state, { payload }) => {
  state.profile.data = payload.data;
  state.profile.fetching = false;
  state.profile.meta = payload.meta;
};

const createProfileFailed: CaseReducer<ProfileState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.profile.fetching = false;
  state.profile.error = payload;
};

const getProfileRequest: CaseReducer<ProfileState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.profile.error;
  state.profile.fetching = true;
};

const getProfileSuccess: CaseReducer<
  ProfileState,
  PayloadAction<ResponseState<Profile>>
> = (state, { payload }) => {
  state.profile.data = payload.data;
  state.profile.fetching = false;
  state.profile.meta = payload.meta;
};

const getProfileFailed: CaseReducer<ProfileState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.profile.fetching = false;
  state.profile.error = payload;
};

const updateProfileRequest: CaseReducer<ProfileState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.profile.error;
  state.profile.fetching = true;
};

const updateProfileSuccess: CaseReducer<
  ProfileState,
  PayloadAction<ResponseState<Profile>>
> = (state, { payload }) => {
  state.profile.data = payload.data;
  state.profile.fetching = false;
  state.profile.meta = payload.meta;
};

const updateProfileFailed: CaseReducer<ProfileState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.profile.fetching = false;
  state.profile.error = payload;
};

const profileReset: CaseReducer<
ProfileState,
PayloadAction<ResponseState<Profile>>
> = (state, { payload }) => {
state.profile.data = []
state.profile.fetching = false;
};



const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfileRequest,
    getProfileSuccess,
    getProfileFailed,
    createProfileRequest,
    createProfileSuccess,
    createProfileFailed,

    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFailed,
    profileReset
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
