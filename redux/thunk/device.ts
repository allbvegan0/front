import { createDevice, getDeviceDetails } from "../../services/device";
import { QueryParams } from "../shared";
import { deviceActions } from "../slices/device";
import { Dispatch } from "redux";
import os from "os";
import { commonActions } from "../slices/common";

export const handleGetDevice =
  (param: QueryParams) => async (dispatch: Dispatch) => {
    try {
      const id = window.localStorage.getItem("_id");
      console.log(id);
if(id){

  dispatch(deviceActions.getDeviceRequest(param));
  const data = await getDeviceDetails(Number(id));
  console.log("recieved updateDevice from axios", data);
  dispatch(deviceActions.getDeviceSuccess({ data: data }));
  dispatch(commonActions.showToast({message:"Device info fetched Successfully", type:"success"}))

}
    } catch (error) {
      dispatch(deviceActions.getDeviceFailed(error.message));
      dispatch(commonActions.showToast({message:"Error fetching device info", type:"error"}))

    }
  };

export const handleCreateDevice =
  (param: QueryParams) => async (dispatch: Dispatch) => {
    try {
      const id = window.localStorage.getItem("device_id");

      // console.log(id);
      if(!!!id){

        dispatch(deviceActions.createDeviceRequest(param));
        const os_arch = os.arch();
        const os_type = os.type();
        const cpu_type = JSON.stringify(os.cpus());
        const hostname = os.hostname();
        const data = await createDevice(os_type, os_arch, cpu_type, hostname);
        console.log("recieved createDevice from axios", data);
        window.localStorage.setItem("_id", data.id);
        window.localStorage.setItem("device_id", data.device_id);
        
        dispatch(deviceActions.createDeviceSuccess({ data: data }));
        dispatch(commonActions.showToast({message:"Device created Successfully", type:"success"}))
      } else {
        dispatch(commonActions.showToast({message:"Device already exists", type:"warn"}))

      }
    } catch (error) {
      dispatch(deviceActions.createDeviceFailed(error.message));
      dispatch(commonActions.showToast({message:"Error creating device", type:"error"}))

    }
  };
