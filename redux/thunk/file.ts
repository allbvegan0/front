import {  uploadToS3 } from "../../services/file";
import { QueryParams } from "../shared";
import { fileActions } from "../slices/file";
import { Dispatch } from "redux";

import { commonActions } from "../slices/common";
import { profileActions } from "../slices/profile";

import { createProfile } from "../../services/profile";



export interface fileUploadParams extends QueryParams {
  file: File;
signedRequest: string
url:string;

  
}

export const handleUploadFile =
  (param: fileUploadParams) => async (dispatch: Dispatch) => {
    try {
      if(param){
        console.log('file at thunk',param)
        const data = await uploadToS3(param).then(data=>{
          console.log(data)
        return data
        }).catch(e=>console.log(e));
        console.log("recieved uploadedS3File from axios", data);
        dispatch(fileActions.createFileSuccess({  data }));
        dispatch(commonActions.showToast({message:"File uploaded Successfully", type:"success"}))
        const profile = await createProfile(param.url).then(data=>{
          console.log(data)
        return data
        }).catch(e=>console.log(e))
        if(profile){
          dispatch(profileActions.createProfileSuccess(profile))
        dispatch(commonActions.showToast({message:"Profile created Successfully", type:"success"}))

        } else {
        dispatch(commonActions.showToast({message:"Profile creation error axios", type:"warn"}))

        }
      } else {
        dispatch(commonActions.showToast({message:"File upload error", type:"warn"}))

      }
    } catch (error) {
      dispatch(fileActions.createFileFailed(error.message));
      dispatch(commonActions.showToast({message:"Error uploading file", type:"error"}))

    }
  };
