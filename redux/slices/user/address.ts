import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../../shared";

export type Address = {
  street_address: string
  line2_address: string
  city: string
  state: string
  country: string
  zipcode: string
}

interface AddressState {
  Addresses: ResponseState<Address>;
}

const initialState: AddressState = {
  Addresses: {
    fetching: false,
    data: [],
  },
};

const updateAddressRequest: CaseReducer<
  AddressState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.Addresses.error;
  state.Addresses.fetching = true;
};

const updateAddressSuccess: CaseReducer<
  AddressState,
  PayloadAction<ResponseState<Address>>
> = (state, { payload }) => {
  state.Addresses.data = payload.data;
  state.Addresses.fetching = false;
  state.Addresses.meta = payload.meta;
};

const updateAddressFailed: CaseReducer<AddressState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Addresses.fetching = false;
  state.Addresses.error = payload;
};

const getAddressRequest: CaseReducer<AddressState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.Addresses.error;
  state.Addresses.fetching = true;
};

const getAddressSuccess: CaseReducer<
  AddressState,
  PayloadAction<ResponseState<Address>>
> = (state, { payload }) => {
  console.log('address',payload)
  state.Addresses.data = payload.data;
  state.Addresses.fetching = false;
  state.Addresses.meta = payload.meta;
};

const getAddressFailed: CaseReducer<AddressState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Addresses.fetching = false;
  state.Addresses.error = payload;
};

const addAddressRequest: CaseReducer<AddressState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.Addresses.error;
  state.Addresses.fetching = true;
};

const addAddressSuccess: CaseReducer<
  AddressState,
  PayloadAction<ResponseState<Address>>
> = (state, { payload }) => {
  console.log('address to delete==>reducer',payload)
  const _state = state.Addresses.data
  console.log('addresses in local', _state)
  // const{id} = payload.data
  const new_state = _state.concat( payload.data)
  console.log('new addresses in local', new_state)

  state.Addresses.data = [...new_state];
  state.Addresses.fetching = false;
  state.Addresses.meta = payload.meta;
};

const addAddressFailed: CaseReducer<AddressState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Addresses.fetching = false;
  state.Addresses.error = payload;
};


const deleteAddressRequest: CaseReducer<AddressState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.Addresses.error;
  state.Addresses.fetching = true;
};

const deleteAddressSuccess: CaseReducer<
  AddressState,
  PayloadAction<ResponseState<String>>
> = (state, { payload }) => {
  console.log('address to delete==>reducer',payload)
  const _state = state.Addresses.data
  console.log('addresses in local', _state)
  // const{id} = payload.data
  const new_state = _state.filter( address => address.street_address !== payload.data[0])
  console.log('new addresses in local', new_state.map((ad, index)=>{
    console.log(ad, index)
  }))

  state.Addresses.data = [...new_state];
  state.Addresses.fetching = false;
  state.Addresses.meta = payload.meta;
};

const deleteAddressFailed: CaseReducer<AddressState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Addresses.fetching = false;
  state.Addresses.error = payload;
};

const AddressReset: CaseReducer<
AddressState,
PayloadAction<ResponseState<Address>>
> = (state, { payload }) => {
state.Addresses.data = []
state.Addresses.fetching = false;
};

const AddressSlice = createSlice({
  name: "Address",
  initialState,
  reducers: {
    getAddressRequest,
    getAddressSuccess,
    getAddressFailed,
    updateAddressRequest,
    updateAddressSuccess,
    updateAddressFailed,
    AddressReset,
    addAddressRequest,
    addAddressSuccess,
    addAddressFailed,
    deleteAddressRequest,
    deleteAddressSuccess,
    deleteAddressFailed,
  },
});

export const AddressActions = AddressSlice.actions;
export const AddressReducer = AddressSlice.reducer;
