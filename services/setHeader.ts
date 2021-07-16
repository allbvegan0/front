import { setContext } from "redux-saga/effects";

export const setHeader = async () => {
  var token;
  var accessToken
  var deviceId
  var sessionToken
  if (typeof window !== "undefined") {
    deviceId = window.localStorage.getItem("device_id");
    token = await window.localStorage.getItem("token");
    accessToken = await window.localStorage.getItem("accessToken");
    sessionToken = await window.localStorage.getItem("session")
  }
  const T0 = sessionToken?sessionToken:accessToken
  var T = sessionToken?sessionToken:accessToken

  // console.log('--=----->token at setHeader', T)
  const _T = token?token:deviceId
  if(sessionToken){
    T = sessionToken
  }
  return {
    "Content-Type": "application/json",
    Authorization: T ? `Bearer ${T}` : `T_T ${_T}`,
    x_allb_header: `"cookie-check-deliver"-${sessionToken}`
  };
};


  // setContext()=> store cache front back code 
  // createContext=> product cart sale transaction
  // lab formula benifits ingredients certifications tests testimonials submit for_approval
  //  register allb-id title 
  //  register allbVegan™-title
  //  description
  //  images[0,1,2,3]
  //  setContext useConttext 
  export const setDataHeader = async () => {
    var token;
    var accessToken
    var deviceId
    var sessionToken
    if (typeof window !== "undefined") {
      deviceId = window.localStorage.getItem("device_id");
      token = await window.localStorage.getItem("token");
      accessToken = await window.localStorage.getItem("accessToken");
      sessionToken = await window.localStorage.getItem("session")
    }
    const T0 = sessionToken?sessionToken:accessToken
    var T = sessionToken?sessionToken:accessToken
  
    // console.log('--=----->token at setHeader', T)
    const _T = token?token:deviceId
    if(sessionToken){
      T = sessionToken
    }
    return {
      // "Content-Type": "form/data",
    // "Content-Type": 'multipart/form-data',
    // "Content-Type": "application/json",
    //  

      Authorization: T ? `Bearer ${T}` : `T_T ${_T}`,
      x_allb_header: `"cookie-check-deliver"-${sessionToken}`

    };
  };
  
  


export const baseUrl = "http://localhost:4000/graphql";

// export const setUploadHeader = async () => {
//   var token;
//   if (typeof window !== "undefined") {
//     token = window.localStorage.getItem("token");
//   }
//   return {
//     'X-Requested-With': 'XMLHttpRequest',
//     "Content-Type": 'multipart/form-data',

//     Authorization: token ? `Bearer ${token}` : "",
//   };
// };