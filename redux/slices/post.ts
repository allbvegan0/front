import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../shared";

interface Post {
  id: number;
  pubished: boolean;
  text: string;
  content: string;
  authorId: number;
  updatedAt: Date;
  createdAt: Date;
}

interface PostState {
  post: ResponseState<Post>;
}

const initialState: PostState = {
  post: {
    fetching: false,
    data: [],
  },
};

const createPostRequest: CaseReducer<
  PostState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.post.error;
  state.post.fetching = true;
};

const createPostSuccess: CaseReducer<
  PostState,
  PayloadAction<ResponseState<Post>>
> = (state, { payload }) => {
  state.post.data = payload.data;
  state.post.fetching = false;
  state.post.meta = payload.meta;
};

const createPostFailed: CaseReducer<PostState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.post.fetching = false;
  state.post.error = payload;
};

const getPostRequest: CaseReducer<PostState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.post.error;
  state.post.fetching = true;
};

const getPostSuccess: CaseReducer<
  PostState,
  PayloadAction<ResponseState<Post>>
> = (state, { payload }) => {
  state.post.data = payload.data;
  state.post.fetching = false;
  state.post.meta = payload.meta;
};

const getPostFailed: CaseReducer<PostState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.post.fetching = false;
  state.post.error = payload;
};

const postReset: CaseReducer<
PostState,
PayloadAction<ResponseState<Post>>
> = (state, { payload }) => {
state.post.data = []
state.post.fetching = false;
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostRequest,
    getPostSuccess,
    getPostFailed,
    createPostRequest,
    createPostSuccess,
    createPostFailed,
    postReset
    // checkPost,
    // checkPostSucess,
    // checkPostFailed,
  },
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
