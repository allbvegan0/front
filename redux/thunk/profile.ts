import { createProfile, getProfileDetails  } from "../../services/profile";
import { QueryParams } from "../shared";
import { profileActions } from "../slices/profile";
import { Dispatch } from "redux";
import { commonActions } from "../slices/common";




export interface GetProfileParams extends QueryParams {
  email: string
}

export const handleGetProfile =
  (param: GetProfileParams) => async (dispatch: Dispatch) => {
    try {

      const data = await getProfileDetails(param.email)
      console.log("recieved updateProfile from axios", data);
      dispatch(profileActions.getProfileSuccess({ data: data }));
    } catch (error) {
      dispatch(profileActions.getProfileFailed(error.message));
    }
  };



export interface CreateProfileRequestParams extends QueryParams {
  image: string
}

export const handleCreateProfile =
  (param: CreateProfileRequestParams) => async (dispatch: Dispatch) => {
    try {
      const data = await createProfile(param.image);
      console.log("recieved createProfile from axios", data);
      if(data){
        dispatch(profileActions.createProfileSuccess({ data: data }));
        dispatch(commonActions.showToast({message:"profile created successfully", type:"success"}))

      } else{
        dispatch(commonActions.showToast({message:"profile not created check axios", type:"warn"}))

      }

    } catch (error) {
      dispatch(profileActions.createProfileFailed(error.message));
      dispatch(commonActions.showToast({message:"profile not created check thunk", type:"error"}))

    }
  };

  export interface UpdateProfileRequestParams extends QueryParams {
    image: string
    bio: string
  }
  
  export const handleUpdateProfile =
    (param: UpdateProfileRequestParams) => async (dispatch: Dispatch) => {
      try {

        const data = param
        if(data){
          dispatch(profileActions.updateProfileSuccess());
          dispatch(commonActions.showToast({message:"profile updated successfully", type:"success"}))
  
        } else{
          dispatch(commonActions.showToast({message:"profile not updated check axios", type:"warn"}))
  
        }
  
      } catch (error) {
        dispatch(profileActions.createProfileFailed(error.message));
        dispatch(commonActions.showToast({message:"profile not updated check thunk", type:"error"}))
  
      }
    };