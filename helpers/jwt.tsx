import jwt, { sign, verify } from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import  decode from "jwt-decode";
// import { Context } from "./context";
import  Context  from 'next'

interface Token {
  userId: String;
  type: String;
  timestamp: number;
}
export const tokens = {
  access: {
    name: "ACCESS_TOKEN",
    expiry: "14d",
  },
  verification: {
    name: "VERIFICATION_TOKEN",
    expiry: "1h",
  },
};

// export function getUserId(context: typeof Context) {
//   const Authorization = context.ctx.get("Authorization");
//   if (Authorization) {
//     JSON.stringify(Authorization);
//     const token = Authorization.replace("Bearer", "");
//     const verifiedToken = verify(token, process.env.SECRET) as Token;
//     return verifiedToken && verifiedToken.userId;
//   }
// }

export function verifyEmailUser(token: any){
  if(token){
    const verifiedToken = verify(token, process.env.SECRET, 
      function(err, decoded) {   console.log(decoded); }) as Token;
    console.log('dcd',jwt.decode(token))
    console.log(decode(JSON.stringify(token)))
    console.log('biaatch',jwt_decode(token))
    console.log('tkn',verifiedToken)
    return verifiedToken && verifiedToken.userId;
  }

}

export const generateAccessToken = (userId: number) => {
  const accessToken = sign(
    {
      userId: userId,
      type: tokens.access.name,
      timestamp: Date.now(),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: tokens.access.expiry,
    }
  );
  return accessToken;
};


export const generateVerificationToken = (userId: number) => {
  const payload = { 
    userId: JSON.stringify(userId),
    type: tokens.verification.name,
    timestamp: Date.now(),
    id: userId
  }
  const verificationToken = sign(
    payload,
    process.env.SECRET,
    {
      noTimestamp: true,
      expiresIn: tokens.verification.expiry,
    }
  );
  return verificationToken;
};

export const handleError = (error: any) => {
  throw error;
};
