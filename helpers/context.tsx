// import  prisma  from "../lib/prisma";
// import { PrismaClient } from "../prisma/generated/client";
import { verify } from "jsonwebtoken";
import { tokens } from "./jwt";
// import { tokens, APP_SECRET } from "./helpers/constants";

export interface Context {
  // db: PrismaClient;
  ctx: any;
  userId: number;
  devices: [];
  // storage: Storage;
}

interface Token {
  userId: number;
  type: String;
  timestamp: number;
}

export const createContext = (ctx: any): Context => {
  let userId: number;
  try {
    let Authorization = "";
    try {
      Authorization = ctx.req.get("Authorization");
    } catch (e) {
      Authorization = ctx?.connection?.context?.Authorization;
    }
    const token = Authorization.replace("Bearer ", "");
    // console.log("token found from headers----->", token);

    const verifiedToken = verify(token, process.env.APP_SECRET) as Token;
    // console.log("--------->verification", verifiedToken);
    if (!verifiedToken.userId && verifiedToken.type !== tokens.access.name)
      userId = -1;
    else {
      userId = verifiedToken.userId;
      console.log("verified user from Authorization context ---->", userId);
    }
  } catch (e) {
    userId = -1;
  }

  try {
    let devices = [];
  } catch (error) {
    console.log("error getting devices", error);
  }

  return {
    ...ctx,
    // prisma,
    userId,
    // storeUpload
  };
};
