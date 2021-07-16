import { gql, useQuery, useSubscription } from "@apollo/client";

import router, { useRouter } from "next/router";
import React, {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

export const R = (url: string) => {
  return router.push(url);
};

export const useCheckAuth=()=>{
  useCheckToken()
  const session = useSelector((state:AppState) => state.auth.auth.data);

  const router = useRouter();
  React.useEffect(() => {
    let mount = true;
    if (mount) {
      const ses = JSON.stringify(session)
      const _ses = JSON.parse(ses)
      if (_ses && _ses.user) {
        router.push("/user");
      }
    }
    return () => {
      mount = false;
    };
  }, [session]);

}

export const useCheckDevice=()=>{
  const session = useSelector((state:AppState) => state.device.device.data);
  
  const router = useRouter();
  React.useEffect(() => {
    let mount = true;
    if (mount) {
      const device_id = window.localStorage.getItem(
        'device_id'
      )
      if(!!!device_id){
        router.push("/");
      }
    }
    return () => {
      mount = false;
    };
  }, [session]);

}

export const useCheckToken=()=>{
  const session = useSelector((state:AppState) => state.auth.auth.data);
  useCheckDevice()

  const router = useRouter();
  React.useEffect(() => {
    let mount = true;
    if (mount) {
      const token = window.localStorage.getItem('token')
      const ses = JSON.stringify(session)
      const _ses = JSON.parse(ses)
      if(token && _ses && _ses.user){
        router.push('/screens/registration')
      }
    }
    return () => {
      mount = false;
    };
  }, [session]);

}

export const useSession = () => {
  const _session = useSelector((state: AppState) => state.auth.auth.data);
  if(_session){

    const ses = JSON.stringify(_session);
    var session = JSON.parse(ses);
  }

  // console.log('-------->1',session)

  return session;
};

export const useFlip = (_state) => {

  const _session = useSelector((state: AppState) => _state);
  
  if(_session){

    const ses = JSON.stringify(_session);
    var __state = JSON.parse(ses);
  }

  // console.log('-------->1',session)

  return __state;
};
export const useFlipS = () => {
  const _session = useSelector((state: AppState) => state.subscription.Subscription);
  useEffect(() => {
    let mount = true
    if(_session){

      const ses = JSON.stringify(_session);
      var __state = JSON.parse(ses);
    }
    return () => {
      mount = false
    }
  }, [_session])
  if(_session){

    const ses = JSON.stringify(_session);
    var __state = JSON.parse(ses);
  }

  // console.log('-------->1',session)

  return __state;
};

export const useDevice = () => {
  const _device = useSelector((state: AppState) => state.device.device.data);
  const devi = JSON.stringify(_device);
  var device = JSON.parse(devi);
  return device;
};

export const useUser = ()=>{
  const _device = useSelector((state: AppState) => state.user.user.data);
  if(_device){
    const devi = JSON.stringify(_device);
    var device = JSON.parse(devi);
  }
  return device;
}

export const useSubscriptionOrder = ()=>{
  const _device = useSelector((state: AppState) => state.subscription.Subscription.data);
  if(_device){
    const devi = JSON.stringify(_device);
    var device = JSON.parse(devi);
  }
  return device;
}

export const UPDATE_USER_PROFILE = gql`
  subscription {
    updateProfile {
      id
      image
      bio
    }
  }
`;
export const useProfile = () => {
  const [profile, setProfile] = useState(null)
  const { data } = useSubscription(UPDATE_USER_PROFILE);
  if (!data) {
    return null;
  }
  console.log("found change in profile", data);

  return data;
};

export const GET_USER = gql`
  subscription {
    user {
      name
      email
      image
    }
  }
`;
export const __useUser = () => {
  const { data } = useSubscription(GET_USER);
  if (!data) {
    return null;
  }
  console.log("found change in user", data);
  return data;
};

export const GET_USER_ = gql`
    query user(
    $email: String!

  ) {
    me(
      email: $email
    ) {
      name
      id
      email
      image
      emailVerified
    }
  }
`;
export const useUser_ = (email) => {
  const { data, loading, error } = useQuery(GET_USER_, {variables:{email: email}});
  if(loading){
    return loading
  }
  if(error){
    return<h2>Error..{error.message}</h2>
  }
  if (!data) {
    return null;
  }
  console.log("found user", data);
  return data;
};

export const useUserAddresses = () =>{
  const _device = useSelector((state: AppState) => state.address.Addresses.data);
  
  if(_device){
    const devi = JSON.stringify(_device);
    var device = JSON.parse(devi);
  }
  return device;

}

export const isToken = () =>{
  const _device = useSelector((state: AppState) => state.auth.auth.data);
  
  if(_device){
    const devi = JSON.stringify(_device);
    var device = JSON.parse(devi);
    const { isToken} = device
  }
  return isToken;

}

export const UPDATE_USER_ADDRESS = gql`
  subscription {
    updateAddress {
      id
     
    }
  }
`;
export const useUserAddress = () => {
  const [address, setAddress] = useState(null)
  const { data } = useSubscription(UPDATE_USER_ADDRESS);
  if (!data) {
    return null;
  }
  console.log("found change in profile", data);

  return data;
};