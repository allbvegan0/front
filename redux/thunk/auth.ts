import { createDirectSession, login, register, verify } from "../../services/auth";
import { QueryParams } from "../shared";
import { authActions } from "../slices/auth";
import { commonActions } from "../slices/common";
import { Dispatch } from "redux";
import { deviceActions } from "../slices/device";
import { userActions } from "../slices/user/user";
import { postActions } from "../slices/post";
import { profileActions } from "../slices/profile";
import router from "next/router";
import { AddressActions } from "../slices/user/address";
import { SubscriptionActions } from "../slices/subscription";
import { ShopActions } from "../slices/shop";



export interface GetAuthLoginParams extends QueryParams {
  email: string;

  password: string;
}
export const handleGetAuthLogin =
  (param: GetAuthLoginParams) => async (dispatch: Dispatch) => {
    try {
      console.log("Am i being called");
      const data = await login({
        email: param.email,
        password: param.password,
      });
      console.log("recieved updateDevice from axios", data);
      if(data===null){
      dispatch(commonActions.showToast({message:"User Not Foundd. Try creating account firrst", type:"warn"}))
        
      }

      if (data.sessionToken) {
        // data.accessToken =
        window.localStorage.setItem("session", data.sessionToken);
        dispatch(authActions.getAuthSuccess({ data: data }));
        dispatch(
          commonActions.showToast({
            message: "Successfully Loggged In",
            type: "success",
          })
        );
      } else {
        console.log("session data missing on thunk");
      }
    } catch (error) {
      dispatch(authActions.getAuthFailed(error.message));
      dispatch(commonActions.showToast({message:"Login Failed. check username password", type:"error"}))
    }
  };

export interface GetAuthRegisterParams extends QueryParams {
  email: string;
  name: string;
  phone: string;
  password: string;
}

export const handleSetAuthRegister =
  (param: GetAuthRegisterParams) => async (dispatch: Dispatch) => {
    try {

      console.log("start register");
      const device_i = window.localStorage.getItem("device_id");



      const data = await register({
        email: param.email,
        name: param.name,
        phone: param.phone,
        password: param.password,
        deviceId: device_i,
      });
      if (data) {
        console.log("recieved getAuth from axios", data);
        window.localStorage.setItem("token", data.token);
        // set coockie
        //
        dispatch(authActions.setAuthSuccess({ data: data }));

      } else {
        dispatch(
          authActions.setAuthFailed(
            "Check Registration Credentials"
          )
        );
        dispatch(
          commonActions.showToast({ message: "Registeration Error", type: "error" })
        );
      }
    } catch (error) {
      dispatch(authActions.setAuthFailed(error.message));
      dispatch(
        commonActions.showToast({ message: error.message, type: "error" })
      );
    }
  };

export interface verifyAuthParams extends QueryParams {
  token: string;
  device_id: string;
}

export const handleVerifyAuth =
  (param: verifyAuthParams) => async (dispatch: Dispatch) => {
    // try {
      console.log("start verifying");
      const device_i = window.localStorage.getItem("device_id");

      const data = await verify({
        token: param.token,
        device_id: device_i,
      }).then(data=>{
        return data
      }).catch(e=>{
        const _e =  JSON.stringify(e)
        dispatch( authActions.verifyAuthFailed(
            _e
          )
        );
        return e.message});
      if (data) {
        console.log("recieved getAuth from axios", data);
        window.localStorage.setItem('accessToken', data.accessToken)
        dispatch(authActions.verifyAuthSuccess({ data: data }));
        dispatch(deviceActions.getDeviceRequest(device_i))
        
      // } 
  }

};

  export interface signOutParams extends QueryParams {
    // device_id: string;
  }
  
  export const handleSignOut =
    (param: signOutParams) => async (dispatch: Dispatch) => {
      try {
          window.localStorage.removeItem("accessToken")
          window.localStorage.removeItem("token")
          window.localStorage.removeItem("session")
          dispatch(authActions.signOutSuccess());
          dispatch(userActions.userReset())
          dispatch(postActions.postReset())
          dispatch(profileActions.profileReset())
          dispatch(AddressActions.AddressReset())
          dispatch(SubscriptionActions.SubscriptionReset())
          dispatch(ShopActions.ShopReset())
          // dispatch()
        
          dispatch(
            commonActions.showToast({
              message: "SuccessFul SignOut",
              type: "info",
            })
          );
        
      } catch (error) {
        dispatch(authActions.signOutFailed(error.message));
      }
    };


    export interface GetEmailSessionParams extends QueryParams {
      email: string;
    }
    export const handleGetEmailSession =
      (param: GetEmailSessionParams) => async (dispatch: Dispatch) => {
        try {
          console.log("Passwordless login being called");
          const data = await createDirectSession({
            email: param.email,
          });
          console.log("recieved updateDevice from axios", data);
          if(data===null){
          dispatch(commonActions.showToast({message:"Email not sent pending verification Found.", type:"warn"}))
            
          }
    
          if (data.sessionToken) {
            // data.accessToken =
            window.localStorage.setItem("session", data.sessionToken);
            dispatch(authActions.getAuthSuccess({ data: data }));
            dispatch(
              commonActions.showToast({
                message: "Successfully Loggged In",
                type: "success",
              })
            );
          } else {
            console.log("session data missing on thunk");
          }
        } catch (error) {
          dispatch(authActions.getAuthFailed(error.message));
          dispatch(commonActions.showToast({message:"Session Failed. check email address", type:"error"}))
        }
      };

      export interface GetResetPasswordParams extends QueryParams {
        email: string;
      }
      export const handleResetPassword =
        (param: GetResetPasswordParams) => async (dispatch: Dispatch) => {
          try {
            console.log("Am i being called");
            const data = await createDirectSession({
              email: param.email,
            });
            console.log("recieved updateDevice from axios", data);
            if(data===null){
            dispatch(commonActions.showToast({message:"Email not sent pendinng verification Found.", type:"warn"}))
            }
      
            if (data.sessionToken) {
              // data.accessToken =
              window.localStorage.setItem("session", data.sessionToken);
              dispatch(authActions.getAuthSuccess({ data: data }));
              dispatch(
                commonActions.showToast({
                  message: "Successfully Loggged In",
                  type: "success",
                })

              );
              router.push('/screens/resetPassword')
            } else {
              console.log("password reset data missing on thunk");
            }
          } catch (error) {
            dispatch(authActions.getAuthFailed(error.message));
            dispatch(commonActions.showToast({message:"Password Reset Failed. check email address", type:"error"}))
          }
        };

