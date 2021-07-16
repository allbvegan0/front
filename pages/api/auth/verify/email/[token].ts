import { NextApiRequest, NextApiResponse } from "next";
import { verifyEmailUser } from "../../../../../helpers/jwt";
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { token } = req.query;
    console.log("from verification", token);
    const V = verifyEmailUser(token);

    console.log(V);

    const _token = await fetch("http://localhost:4000/auth/verify/email");

    if (_token) {
      console.log(_token);
    } else {
      res.status(401).json({
        ok: false,
        message: "This link may have been used or expired",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({ ok: false, message: error.toString() });
  }
}
