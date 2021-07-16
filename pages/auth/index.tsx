import router from "next/router"
import { useEffect, useState } from "react"
import Description from "../../components/molecules/decorative/description"
import { Login } from "../../components/organism/auth/login"
import { Register } from "../../components/organism/auth/register"
import RegistrationWelcomeScreen from "../screens/registration"

const AuthPage = ()=>{
  const [token, setToken] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [sessionToken, setSessionToken] = useState(null)

  var userState = ''
  useEffect(()=>{
    let mount = true
    if(mount){
      var _token = window.localStorage.getItem('token')
      if(_token){
        userState = _token
        setToken(_token)

      }
      var _accessToken = window.localStorage.getItem('accessToken')
      if(_token){
        userState = _accessToken
        setAccessToken(_accessToken)
      }
      var _sessionToken = window.localStorage.getItem('sessionToken')
      if(_token){
        userState = _sessionToken
        setSessionToken(_sessionToken)
      }
    }
    return ()=>{mount=false}

  },[])

  const screen = ()=> {switch(userState){
    
    
    case accessToken:
      return <RegistrationWelcomeScreen/>
      break;
    case token:
    return <Login/>
    break;
    case sessionToken:
    return router.push('/user')
    default:
      return <Register/> 

  }}
 
  return<><Description>
    switch for auth status
    </Description>
  <div>
    {screen()}
  </div>
  </>
}

export default AuthPage