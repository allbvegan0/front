import {Avatar} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useProfile, useSession, useUser } from '../../hooks/nav'
import session from '../../lib/session'
import { handleGetUser } from '../../redux/thunk/user'
import { MediaUR } from '../../services/constants'

export const _Avatar = ()=>{
  const profile = useProfile()
  const user = useUser()

  const image  = ""
  const name = ""
  // subscribe to user
  // page: initial_state->{name, email, image, emailVerified, role} 

  // subscribe to profile
  // {adress_}
  
  
  // subscribe to change in session
  // open panel options
  // admin 
  // reach lab
  // submit one
  // release one
  // addtocart
  // pay_for_cart
  // generate_order
  // create payment_reciept
  // payment_status 
  // order_status


  
  if (user) {

    var p = profile?profile.updateProfile.image:user.image
    var src =''
    if(user.image){
      src=`${MediaUR}${user.image ? user.image : 'allb'}`
    }}


  return <Avatar
  size={"xl"}
  name={user.name ? user.name : 'allb'}
  src={p?`${MediaUR}${p}`:src}
  alt={"Avatar Alt"}
  mb={4}
  pos={"relative"}
  _after={{
    content: '""',
    w: 4,
    h: 4,
    bg: "green.300",
    border: "2px solid white",
    rounded: "full",
    pos: "absolute",
    bottom: 0,
    right: 3,
  }}
/>
}

export const __Avatar = (sessionUser)=>{
  const [_user, setUser] = useState({})

  const dispatch = useDispatch()
  useEffect(()=>{
    let mount = true
    if(mount){

      if(sessionUser.user.emailVerified){
        dispatch(handleGetUser({email: sessionUser.user.email}))
        setUser(sessionUser.user)
      } 
    }
    return ()=>{
      mount=false
    }
  },[setUser])
  
  const user = useUser()
  const profile = useProfile()

  // console.log('------->where is gopal', user)


  
  if (user) {
    var p = profile?profile.updateProfile.image:user.image
    var src =''
    if(user.image){
      src=`${MediaUR}${user.image ? user.image : 'allb'}`
    }}


  return <Avatar
  size={"sm"}
  name={user&&user.name ? user.name : 'bllb'}
  src={p?`${MediaUR}${p}`:src}
  alt={"Avatar Alt"}
  mb={4}
  pos={"relative"}
  _after={{
    content: '""',
    w: 4,
    h: 4,
    bg: "green.300",
    border: "2px solid white",
    rounded: "full",
    pos: "absolute",
    bottom: -2,
    right: 3,
  }}
/>
}