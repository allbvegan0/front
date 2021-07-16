
import { Dispatch } from "@reduxjs/toolkit";
import { getUserShop } from "../../services/shop";
import { QueryParams } from "../shared";
import { commonActions } from "../slices/common";
import { ShopActions } from "../slices/shop";
import { SubscriptionActions } from "../slices/subscription";

  export interface GetShopParams extends QueryParams {
    email: string
  }
  
  export const handleGetShop =
    (param: GetShopParams) => async (dispatch: Dispatch) => {
      try {
        console.log('----9?>', param)
  
        const data = await getUserShop(param.email)
        console.log("recieved updateSubcription from axios", data.data.get_user_shop);
        // dispatch(SubscriptionActions.updateSubscriptionSuccess({ data: data }));
        dispatch(ShopActions.getShopSuccess({data: data.data.get_user_shop}))
        dispatch(commonActions.showToast({message:"shop created succesfully", type:"success"}))
      } catch (error) {
        dispatch(ShopActions.getShopFailed(error.message));
        dispatch(commonActions.showToast({message:"shop creat un-succesfully", type:"error"}))

      }
    };