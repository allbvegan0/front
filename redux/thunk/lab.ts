import { Dispatch } from "@reduxjs/toolkit";
import { QueryParams } from "../shared";
import { commonActions } from "../slices/common";
import { AddLabActions } from "../slices/lab";

export const hanndleAddCategory = ()=>{

}

export interface AddCategoryRequestParams extends QueryParams {
  category?: string
  subCategories?: string[]
  draftProduct?:{
    title: string
    description: string
  }
}



export const handleAddUserAddLab =
(param: AddCategoryRequestParams) => async (dispatch: Dispatch) => {
  try {
// const data = await addAddLabForEmail({category: param})
// console.log("recieved AddLab from axios", data);
// if(data && !data.error){

  dispatch(AddLabActions.updateAddLabSuccess({ data:[{category: param.category, subcategories: param.subCategories, draft_product: param.draftProduct }]  }));
  dispatch(commonActions.showToast({message:"User info fetched Successfully", type:"success"}))


  } catch (error) {
    dispatch(AddLabActions.updateAddLabFailed(error.message));
    dispatch(commonActions.showToast({message:"Error fetching user info", type:"error"}))

  }
};