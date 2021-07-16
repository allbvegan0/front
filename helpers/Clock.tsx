import { useEffect, useState } from "react";

export const Clock =()=>{
  const [currentCount, setCount] = useState(100)
  const [currentTime, setCTime] = useState(new Date())
  const timer =()=> setCount(currentCount-1)

  useEffect(()=>{
    if(currentCount<=0){
      return;
    }
    const id=setInterval(timer, 1000)
    return ()=>clearInterval(id)
  },[currentCount])

  useEffect(()=>{
    if(currentCount){
      return;
    }
    const id=setInterval(timer, 1000)
    return ()=>clearInterval(id)
  },[currentTime])

  return <div>{currentCount},{ JSON.stringify(currentTime)}</div>
}