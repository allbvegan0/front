import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../../shared";





export type AddLabProduct = {
  title: string
  description: string
  // benefits:string[]
  // ingredients:string[]

}
export type AddLab = {
  subcategories?:string[]
  category:string
  draft_product?:AddLabProduct
}

interface AddLabState {
  AddLabes: ResponseState<AddLab>;
}

const initialState: AddLabState = {
  AddLabes: {
    fetching: false,
    data: [],

  },
};

const updateAddLabRequest: CaseReducer<
  AddLabState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.AddLabes.error;
  state.AddLabes.fetching = true;
};

const updateAddLabSuccess: CaseReducer<
  AddLabState,
  PayloadAction<ResponseState<AddLab>>
> = (state, { payload }) => {
  state.AddLabes.data = payload.data;
  state.AddLabes.fetching = false;
  state.AddLabes.meta = payload.meta;
};

const updateAddLabFailed: CaseReducer<AddLabState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.AddLabes.fetching = false;
  state.AddLabes.error = payload;
};

const getAddLabRequest: CaseReducer<AddLabState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.AddLabes.error;
  state.AddLabes.fetching = true;
};

const getAddLabSuccess: CaseReducer<
  AddLabState,
  PayloadAction<ResponseState<AddLab>>
> = (state, { payload }) => {
  console.log('AddLab',payload)
  state.AddLabes.data = payload.data;
  state.AddLabes.fetching = false;
  state.AddLabes.meta = payload.meta;
};

const getAddLabFailed: CaseReducer<AddLabState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.AddLabes.fetching = false;
  state.AddLabes.error = payload;
};

const addAddLabRequest: CaseReducer<AddLabState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.AddLabes.error;
  state.AddLabes.fetching = true;
};

const addAddLabSuccess: CaseReducer<
  AddLabState,
  PayloadAction<ResponseState<AddLab>>
> = (state, { payload }) => {
  console.log('AddLab to delete==>reducer',payload)
  const _state = state.AddLabes.data
  console.log('AddLabes in local', _state)
  // const{id} = payload.data
  const new_state = _state.concat( payload.data)
  console.log('new AddLabes in local', new_state)

  state.AddLabes.data = [...new_state];
  state.AddLabes.fetching = false;
  state.AddLabes.meta = payload.meta;
};

const addAddLabFailed: CaseReducer<AddLabState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.AddLabes.fetching = false;
  state.AddLabes.error = payload;
};


const deleteAddLabRequest: CaseReducer<AddLabState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.AddLabes.error;
  state.AddLabes.fetching = true;
};

const deleteAddLabSuccess: CaseReducer<
  AddLabState,
  PayloadAction<ResponseState<String>>
> = (state, { payload }) => {
  console.log('AddLab to delete==>reducer',payload)
  const _state = state.AddLabes.data
  console.log('AddLabes in local', _state)
  // const{id} = payload.data
  const new_state = _state.filter( AddLab => AddLab.category !== payload.data[0])
  console.log('new AddLabes in local', new_state.map((ad, index)=>{
    console.log(ad, index)
  }))

  state.AddLabes.data = [...new_state];
  state.AddLabes.fetching = false;
  state.AddLabes.meta = payload.meta;
};

const deleteAddLabFailed: CaseReducer<AddLabState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.AddLabes.fetching = false;
  state.AddLabes.error = payload;
};

const AddLabReset: CaseReducer<
AddLabState,
PayloadAction<ResponseState<AddLab>>
> = (state, { payload }) => {
state.AddLabes.data = []
state.AddLabes.fetching = false;
};

const AddLabSlice = createSlice({
  name: "AddLab",
  initialState,
  reducers: {
    getAddLabRequest,
    getAddLabSuccess,
    getAddLabFailed,
    updateAddLabRequest,
    updateAddLabSuccess,
    updateAddLabFailed,
    AddLabReset,
    addAddLabRequest,
    addAddLabSuccess,
    addAddLabFailed,
    deleteAddLabRequest,
    deleteAddLabSuccess,
    deleteAddLabFailed,
  },
});

export const AddLabActions = AddLabSlice.actions;
export const AddLabReducer = AddLabSlice.reducer;
