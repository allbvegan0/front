import { getSession } from "next-auth/client";
// import prisma from "../../../lib/prisma";
import { verify } from "argon2";
import { generateAccessToken } from "../../../helpers/jwt";
import { login } from "../../../services/auth";

export default async function handle(req, res) {
  const { email: _em, password } = req.body;

  const session = await getSession({ req });

  if (!!!session) {
    // const _user = await prisma.user
    //   .findUnique({
    //     where: {
    //       email: _em,
    //     },
    //     select: {
    //       id: true,
    //       email: true,
    //       password: true,
    //       emailVerified: true,
    //       name: true,
    //       image: true,
    //     },
    //   })
    //   .then((data) => {
    //     return data;
    //   });
    const _user = await login({_em, password})

    var accessToken;
    var user;

    if (_user && _user.id && _user.password) {
      const {
        password: _password,
        id,
        name,
        email,
        emailVerified,
        image,
      } = _user;
      const passwordValid = await verify(_password, password);

      if (!passwordValid) {
        const r = {
          message: "un",
        };
        return res.json(r);
      }
      accessToken = generateAccessToken(id);
      user = {
        id,
        name,
        email,
        emailVerified,
        image,
      };
    }

    const result = user;
    console.log(result);
    res.json(result);
  }
}
