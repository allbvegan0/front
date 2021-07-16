import { useRouter } from "next/router"
import React from "react"

const Redirect = (uri)=>{
  const router = useRouter()
  React.useEffect(()=>{
    router.push(uri)
  },[router])
  return(<></>)
  
}

export default Redirect