import { useRouter } from "next/router"
import React from "react"
import { useSelector } from "react-redux"
import user from "../pages/user"
import { AppState } from "../redux/store"

export const useAllb = (state)=>{
  

  const router = useRouter()
  const authState  = useSelector((state:AppState )=> state.auth.auth) 
  // const userState  = useSelector((state:AppState )=> state.auth.auth) 



  React.useEffect(()=>{
    let mount=true
    if(mount){
      const token = JSON.stringify(state)
      // console.log(JSON.parse(token))
      const parsedT = JSON.parse(token)
      // console.log(parsedT.token)
      if(parsedT && parsedT.token){
        router.push('/screens/registration')
      }
      if(parsedT && parsedT.token && !!!parsedT.accessToken){
        router.push('/screens/login')
      }
      if(parsedT && parsedT.token && !!!parsedT.user.profiled ){
        router.push('/user/profile')
      }
      
    }
    return ()=>{mount=false}
  },[state])
  return{}
}

// परेषक	m.	pareSaka	consignor [Com.]	
// एकार	m.	ekAra	lambda [greek letter]	
// उपान्त्यसंस्करण	n.	upAntyasaMskaraNa	beta version [computer]	
// वामप्रह्व	n.	vAmaprahva	backslash - symbol '\' [computer]	
// उपसाध्य	n.	upasAdhya	corollary [Math.]