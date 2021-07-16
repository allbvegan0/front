import { Dispatch } from "redux";
import { getSubscriptionOrderReciept, updateSubscriptionOrderReciept } from "../../services/shop/subscription";
import { QueryParams } from "../shared";
import { commonActions } from "../slices/common";
import { ShopActions } from "../slices/shop";
import {SubscriptionActions} from '../slices/subscription'

export interface CreateSubcriptionParams extends QueryParams {
  subscriptionType: string
}

export const handlecreateSubcription =
  (param: CreateSubcriptionParams) => async (dispatch: Dispatch) => {
    try {

      const data = await getSubscriptionOrderReciept(param.subscriptionType)

      console.log("recieved updateSubcription from axios", data);
      if(!data.error){

        dispatch(SubscriptionActions.createSubscriptionSuccess({ data: data.create_subscription_order }));
      }
    } catch (error) {
      dispatch(SubscriptionActions.createSubscriptionFailed(error.message));
    }
  };

  export interface UpdateSubcriptionParams extends QueryParams {
    mediumId: string
    payment_id: string
  }
  
  export const handleUpdateSubcription =
    (param: UpdateSubcriptionParams) => async (dispatch: Dispatch) => {
      try {
        console.log('----9?>', param)
  
        const data = await updateSubscriptionOrderReciept(param.mediumId, param.payment_id)
        console.log("recieved updateSubcription from axios", data);
        // dispatch(SubscriptionActions.updateSubscriptionSuccess({ data: data }));
        dispatch(ShopActions.createShopSuccess({data: data}))
        dispatch(commonActions.showToast({message:"shop created succesfully", type:"success"}))
      } catch (error) {
        dispatch(SubscriptionActions.updateSubscriptionFailed(error.message));
        dispatch(commonActions.showToast({message:"shop creat un-succesfully", type:"error"}))

      }
    };
