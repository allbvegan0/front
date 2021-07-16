
import { Box, Center, useColorModeValue,  } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { Login } from "../../components/organism/auth/login";
import { Clock } from "../../helpers/Clock";
import { useCheckAuth } from "../../hooks/nav";
import { handleVerifyAuth } from "../../redux/thunk/auth";


const todo = [
  {
    message: "Click me to activate",
    context:"activate",
    callback:"register_device"
  },
  {
    message:"Enter your email",
    context:"register",
    callback:"verify_device"
  }
]
const UserVerificationStatus = (props)=>{
  const [accessToken, setAccess] = useState(null)
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

  useEffect(()=>{
    let mount = true
    if(mount){
      var _accessToken = window.localStorage.getItem('accessToken')
      if(_accessToken){
        setAccess(_accessToken)
        window.localStorage.removeItem('token')
        router.push('/auth/login')
      }
    }
    return ()=>{
      mount = false
    }
  },[localStorage, setAccess])




  return <><Center><Box maxW={"420px"}
  w={"full"}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow={"2xl"}
  rounded={"lg"}
  p={2}
  textAlign={"center"}  >
  
    <div>
    
   { accessToken?<>{'Successfully verified continue with login'}<Login/></>
   
   : <><Clock/>{'Verification not successfull'}</>

    }
    
      </div>
     </Box></Center></>
}

export default UserVerificationStatus

