import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../shared";

interface Device {
  id: number;
  device_id: string;
  status: string;
  updated_at: Date;
}

export interface DeviceState {
  device: ResponseState<Device>;
}

export const initialState: DeviceState = {
  device: {
    fetching: false,
    data: [],
  },
};

const createDeviceRequest: CaseReducer<
  DeviceState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.device.error;
  state.device.fetching = true;
};

const createDeviceSuccess: CaseReducer<
  DeviceState,
  PayloadAction<ResponseState<Device>>
> = (state, { payload }) => {
  state.device.data = payload.data;
  state.device.fetching = false;
  state.device.meta = payload.meta;
};

const createDeviceFailed: CaseReducer<DeviceState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.device.fetching = false;
  state.device.error = payload;
};

const getDeviceRequest: CaseReducer<DeviceState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.device.error;
  state.device.fetching = true;
};

const getDeviceSuccess: CaseReducer<
  DeviceState,
  PayloadAction<ResponseState<Device>>
> = (state, { payload }) => {
  state.device.data = payload.data;
  state.device.fetching = false;
  state.device.meta = payload.meta;
};

const getDeviceFailed: CaseReducer<DeviceState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.device.fetching = false;
  state.device.error = payload;
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    getDeviceRequest,
    getDeviceSuccess,
    getDeviceFailed,
    createDeviceRequest,
    createDeviceSuccess,
    createDeviceFailed,
    // checkDevice,
    // checkDeviceSucess,
    // checkDeviceFailed,
  },
});

export const deviceActions = deviceSlice.actions;
export const deviceReducer = deviceSlice.reducer;
