import { Dispatch } from "@reduxjs/toolkit";
import { addAddressesForEmail, deleteUserAddress, getAddressesFromEmail, getUserAddresses } from "../../services/addresses";
// import { getUserAddresses } from "../../services/addresses";
import { getMe } from "../../services/user";
import { QueryParams } from "../shared";
import { commonActions } from "../slices/common";
import { Address, AddressActions } from "../slices/user/address";
import { userActions } from "../slices/user/user";



export interface GetUserRequestParams extends QueryParams {
  email: string
}

export const handleGetUser =
(param: GetUserRequestParams) => async (dispatch: Dispatch) => {
  try {
    const data = await getMe(param.email);
    console.log("recieved updateUser from axios", data);
    dispatch(userActions.getUserSuccess({ data: data }));
    dispatch(commonActions.showToast({message:"User info fetched Successfully", type:"success"}))
    
  } catch (error) {
    dispatch(userActions.getUserFailed(error.message));
    dispatch(commonActions.showToast({message:"Error fetching user info", type:"error"}))
    
  }
};

export interface GetAddressRequestParams extends QueryParams {

  email: string
}



export const handleGetUserAddresses =
(param: GetAddressRequestParams) => async (dispatch: Dispatch) => {
  try {
const data = await getAddressesFromEmail({email: param.email})
console.log("recieved addresses from axios", data);
if(data && data.data.addresses){

  dispatch(AddressActions.getAddressSuccess({ data: data.data.addresses  }));
  dispatch(commonActions.showToast({message:"User info fetched Successfully", type:"success"}))
}

  } catch (error) {
    dispatch(AddressActions.getAddressFailed(error.message));
    dispatch(commonActions.showToast({message:"Error fetching user info", type:"error"}))

  }
};

export interface AddAddressRequestParams extends QueryParams {

  email: string
  address: Address
}



export const handleAddUserAddresses =
(param: AddAddressRequestParams) => async (dispatch: Dispatch) => {
  try {
const data = await addAddressesForEmail({email: param.email, address: param.address})
console.log("recieved addresses from axios", data);
if(data && !data.error){

  dispatch(AddressActions.addAddressSuccess({ data: data.data.addAddress  }));
  dispatch(commonActions.showToast({message:"User info fetched Successfully", type:"success"}))
}

  } catch (error) {
    dispatch(AddressActions.addAddressFailed(error.message));
    dispatch(commonActions.showToast({message:"Error fetching user info", type:"error"}))

  }
};

export interface deleteAddressRequestParams extends QueryParams {

  street_address: string
  zipcode: string
}

export const handleDeleteUserAddress =
(param: deleteAddressRequestParams) => async (dispatch: Dispatch) => {
  try {
    console.log('====->id @ thunk 4 service',param)
const data = await deleteUserAddress(param) 

console.log("recieved updateUser from axios", data);
if(!data.errror){

  dispatch(AddressActions.deleteAddressSuccess({ data:  [param.street_address] }));
  // dispatch(AddressActions.getAddressRequest({}));


  dispatch(commonActions.showToast({message:"User Address delete Successfully", type:"success"}))
}

  } catch (error) {
    dispatch(AddressActions.deleteAddressFailed(error.message));
    dispatch(commonActions.showToast({message:"Error User Address delete", type:"error"}))

  }
};
