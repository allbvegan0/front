
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isBuffer } from "util";
import AccessDenied from "../components/organism/guard/access-denied";
import LABAccessDenied from "../components/organism/guard/lab-access-denied";
import { useSession, useUser } from "../hooks/nav";

import { AppState } from "../redux/store";



const withAuth = (WrappedComponent) => {
  return (props) => {
    const [user, setSession] = useState(null);
    var loading =false
    const session = getSession()
    // const authState = useSession()
    const authState = session




    const _authState = JSON.stringify(authState)
    useEffect(() => {
      let mount = true
      if(mount){
        loading = true
        const session = JSON.parse(_authState)
        // console.log('user for auth innn session', session.user)
        setSession(session.user)
      }
      return () => {
        mount = false
        loading = false
      }
    }, [_authState, setSession])


    if (loading) {
      return <h5>loading...</h5>;
    }
    if (user) {
      return <WrappedComponent {...props} />;
    } else {
      return <AccessDenied />;
    }
  };
};

export default withAuth;


export const withShopAuth = (WrappedComponent) => {
  return (props) => {
    const [user, setSession] = useState(null);
    const [uR, setR] = useState(null)
    var loading =false
    const authState = useSession()
    const useR = useUser()
    const _useR = JSON.stringify(useR)
    const _authState = JSON.stringify(authState)
    useEffect(() => {
      let mount = true
      if(mount){
        loading = true
        const session = JSON.parse(_authState)
        const useR = JSON.parse(_useR)
        // console.log('user for auth innn session', session.user)
        setSession(session.user)
        setR(useR)
      }
      return () => {
        mount = false
        loading = false
      }
    }, [_authState, setSession])


    if (loading) {
      return <h5>loading...</h5>;
    }
    // if(!user){
    //   return <AccessDenied />;
    // }
    if (user ) {
      return <WrappedComponent {...props} />;
    } else {
      return <LABAccessDenied />;
    }
  };
};


export const withDevice = (WrappedComponent) => {
  return (props) => {
    const [device, setDevice] = useState(null);
    var loading =false
    const router = useRouter()
    useEffect(() => {
      let mount = true
      if(mount){
        loading = true
        const _device = window.localStorage.getItem('device_id')
        if(_device){

          setDevice(_device)
        } else{
          router.push('/')
        }
      }
      return () => {
        mount = false
        loading = false
      }
    }, [setDevice])

    if (loading) {
      return <h5>loading...</h5>;
    }
    if (device) {
      return <WrappedComponent {...props} />;
    } else {
      return <AccessDenied />;
    }
  };
};





export const isAuthenticated = ()=>{
  // const [session, loading] = useSession()
  const session = useSession()
  const [to, doa]=React.useState(0)
  React.useEffect(()=>{
    let mount = true
    if(mount){

      if(session.user){
        
        return doa(1)
      } 
        return doa(0)
    }
      return () => {
        mount= false
      }
    },[session])
    return to

} 



