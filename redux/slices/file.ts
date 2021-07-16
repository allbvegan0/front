import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../shared";

interface File {
  id: number;
  name: string;
  size: number;
  mimeType: string
  description: string
}

interface FileState {
  file: ResponseState<File>;
}

const initialState: FileState = {
  file: {
    fetching: false,
    data: [],
  },
};

const createFileRequest: CaseReducer<
  FileState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.file.error;
  state.file.fetching = true;
};

const createFileSuccess: CaseReducer<
  FileState,
  PayloadAction<ResponseState<File>>
> = (state, { payload }) => {
  state.file.data = payload.data;
  state.file.fetching = false;
  state.file.meta = payload.meta;
};

const createFileFailed: CaseReducer<FileState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.file.fetching = false;
  state.file.error = payload;
};

const getFileRequest: CaseReducer<FileState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.file.error;
  state.file.fetching = true;
};

const getFileSuccess: CaseReducer<
  FileState,
  PayloadAction<ResponseState<File>>
> = (state, { payload }) => {
  state.file.data = payload.data;
  state.file.fetching = false;
  state.file.meta = payload.meta;
};

const getFileFailed: CaseReducer<FileState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.file.fetching = false;
  state.file.error = payload;
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    getFileRequest,
    getFileSuccess,
    getFileFailed,
    createFileRequest,
    createFileSuccess,
    createFileFailed,
    // checkFile,
    // checkFileSucess,
    // checkFileFailed,
  },
});

export const fileActions = fileSlice.actions;
export const fileReducer = fileSlice.reducer;
