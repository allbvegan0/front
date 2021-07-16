import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState, ResponseStateDetail } from "../shared";

interface DeviceItem {
  id: number;
  device_id: string;
  status: string;
  updated_at: Date;
}

interface DevicesState {
  list: ResponseState<DeviceItem>;
}


const initialState: DevicesState = {
  list: {
    fetching: false,
    data: [],
  },
};

const getDevicesListRequest: CaseReducer<
  DevicesState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.list.error;
  state.list.fetching = true;
};

const getDevicesListSuccess: CaseReducer<
  DevicesState,
  PayloadAction<ResponseState<DeviceItem>>
> = (state, { payload }) => {
  state.list.data = payload.data;
  state.list.fetching = false;
  state.list.meta = payload.meta;
};

const getDevicesListFailed: CaseReducer<DevicesState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.list.fetching = false;
  state.list.error = payload;
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    getDevicesListRequest,
    getDevicesListSuccess,
    getDevicesListFailed,
  },
});

export const deviceListActions = devicesSlice.actions;
export const deviceListReducer = devicesSlice.reducer;
