import { CircularProgress } from "@chakra-ui/react";
import { GetServerSideProps } from "next"
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCheckAuth } from "../../../../hooks/nav";
import { handleVerifyAuth } from "../../../../redux/thunk/auth";



const VerifyEmailSession = (props)=>{

  const token = props.token
  const dispatch = useDispatch()
  const router = useRouter()
  const { token: T } = router.query
  useCheckAuth()



  useEffect(()=>{
    let mount = true
    if(mount){
      if(T){
        const ST = `Bearer ${T}`
        const device_id = window.localStorage.getItem("device_id")
        dispatch(handleVerifyAuth({token: ST, device_id: device_id}))
      }
    }
    return ()=>{
      mount = false
    }
  },[handleVerifyAuth, T])

  return <CircularProgress/>

}

export default VerifyEmailSession