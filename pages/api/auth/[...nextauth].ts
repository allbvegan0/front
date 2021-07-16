// import NextAuth from "next-auth";
// // import Adapters from "next-auth/adapters";

// import Providers from "next-auth/providers";

// import { NextApiHandler } from "next";

// import axios from "axios";
// import Adapters from "next-auth/adapters";
// // import * as Prisma  from "../../../prisma/generated/client"
// // import { PrismaAdapter } from "@next-auth/prisma-adapter"
// // import prisma from '../../../lib/prisma'
// // import * as Prisma from "@prisma/client"

// const baseUrl = "http://localhost:4000"
// // const prisma = allb
// // const prisma = new Prisma.PrismaClient()
// const options = {
//   providers: [
//     // OAuth authentication providers...
//     // Providers.Apple({
//     //   clientId: process.env.APPLE_ID,
//     //   clientSecret: process.env.APPLE_SECRET,
//     // }),
//     Providers.Facebook({
//       clientId: process.env.FACEBOOK_ID,
//       clientSecret: process.env.FACEBOOK_SECRET,
//     }),
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     Providers.GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // Passwordless / email sign in
//     // Providers.Email({
//     //   server: process.env.EMAIL_SERVER,
//     //   from: process.env.EMAIL_FROM,
//     // }),
//     // Provider INstagram
//     // Providers.Instagram({
//     //   clientId: process.env.INSTAGRAM_ID,
//     //   clientSecret: process.env.INSTAGRAM_SECRET,
//     // }),

//     Providers.Email({
//       name:"Email",
//       id:"Email",
//       // identifier:"allb",
//       server: process.env.EMAIL_SERVER,
//       from: process.env.EMAIL_FROM,
//       // sendVerificationRequest: ({
//       //   identifier: "email",
      
//       // })
//     }),

//     Providers.Credentials({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "Credentials",
//       id:"allbAuth",
//       // The credentials property is used to generate a suitable form on the sign in page.
//       credentials: {

//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "test@example.com",
//         },
//         password: { label: "Password", type: "password" },
//         role:{label:"Role", type:"CUSTOMER"}
//       },
//       async authorize(credentials, req) {
//         // Authentication Logic: local function, external API call, etc
//         //const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//         // const {email, username, } = credentials
//         try {
//           const user = await fetch(`${baseUrl}/api/user/login`,{
//             method:'POST',
//             mode:'cors',
//             cache: 'no-cache',
//             // credentials: 'same-origin',
//             headers: {
//               'Content-Type':'application/json'
//             },
//             body: JSON.stringify(credentials)
//           })
//           .then((data)=>{
//             console.log('from user', data)
//             return data})

//           if (user) {
//             console.log(user);
//             return {user};
//           } else {
//             return null;
//           }
//         } catch (e) {
//           console.log("credential trc--=>", e);
//         }
//       },
//     }),
//     Providers.Credentials({
//       id: 'domain-login',
//       name: "Domain Account",
//       async authorize(credentials, req) {
//         try {
          
//           const _user = await axios.post(`${baseUrl}/api/user/login`,{
//             method:'POST',
//             credentials: 'same-origin',
//             headers: {
//               'Content-Type':'application/json'
//             },
//             ...credentials
//           })

//           console.log('login data',_user.data)
//           const user = await {..._user.data}

//           if (user && user.email) {
//             console.log(user);
//             return user;
//           } else {
//             return null;
//           }
//         } catch (error) {
//           console.log(error)
          
//         }
//       },
//       credentials: {
//         domain: { label: "Domain", type: "text ", placeholder: "allb", value: "allb" },
//         username: { label: "Username", type: "text ", placeholder: "hkd" },
//         password: {  label: "Password", type: "password" }
//      }
//     }),
//     Providers.Credentials({
//       id: 'domain-reg',
//       name: "Domain Account",
//       async authorize(credentials, req) {
//         try {
          
//           const _user = await axios.post(`${baseUrl}/auth/register`,{
//             method:'POST',
//             credentials: 'same-origin',
//             data:{

//             },
//             headers: {
//               'Content-Type':'application/json'
//             },
//             ...credentials
//           })

//           console.log(_user.status)
//           const user = await _user.data

//           if (user) {

//             return user;
//           } else {
//             return null;
//           }
//         } catch (error) {
//           console.log(error)
          
//         }
//       },
//       credentials: {
//         domain: { label: "Domain", type: "text ", placeholder: "allb", value: "allb" },
//         username: { label: "Username", type: "text ", placeholder: "hkd" },
//         password: {  label: "Password", type: "password" },
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "test@example.com",
//         },
//         phone: {
//           label: "Phone",
//           type: "phone",
//           placeholder: "9811*****0",
//         },
//      }
//     }),


//     Providers.Credentials({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "Credentials",
//       id:"allbr",
//       // The credentials property is used to generate a suitable form on the sign in page.
//       credentials: {
//         username: {
//           label: "Username",
//           type: "text",
//           placeholder: "test",
//         },
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "test@example.com",
//         },
//         phone: {
//           label: "Phone",
//           type: "phone",
//           placeholder: "9811*****0",
//         },
//         role: "CUSTOMER",
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         // Authentication Logic: local function, external API call, etc
//         //const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//         // const {email, username, } = credentials
//         try {
//           const user = await fetch(`${baseUrl}/api/user`,{
//             method:'POST',
//             mode:'cors',
//             cache: 'no-cache',
//             // credentials: 'same-origin',
//             headers: {
//               'Content-Type':'application/json'
//             },
//             body: JSON.stringify(credentials)
//           })
//           .then((data)=>{
//             console.log('from user==---->', data)
//             return {
//             user:{id:100, name: "z", email: "4@allbvegan.com"}
            
          
//           }})
//           if (user) {
//             console.log(user.user);
//             return user.user;
//           } else {
//             return null;
//           }
//         } catch (e) {
//           console.log("credential trc--=>", e);
//         }
//       },
//     }),
//   ],

//   callbacks: {
//     ///**
//     //  * @param  {object} user     User object
//     //  * @param  {object} account  Provider account
//     //  * @param  {object} profile  Provider profile
//     //  * @return {boolean|string}  Return `true` to allow sign in
//     //  *                           Return `false` to deny access
//     //  *                           Return `string` to redirect to (eg.: "/unauthorized")
//     //  */
//     signin: async (profile, account, metadata) => {
//       console.info('we are here to see the callback\nP\nP');
//       console.log(profile, 'is the profile');
//       console.log(account, 'is the account');
//       console.log(metadata, 'is the metadata');
//       const res = await fetch('https://api.github.com/user/emails', {
//           headers: {
//               'Authorization': `token ${account.accessToken}`
//           }
//       })
//       const emails = await res.json()
//       if (!emails || emails.length === 0) {
//           return
//       }
//       const sortedEmails = emails.sort((a, b) => b.primary - a.primary)
//       profile.email = sortedEmails[0].email
//   },

   
    

//     async verify(user){
//       var isVerified = true
//       if(user && !!!user.verifyEmail){
          
//         return isVerified = false

//       }
//       if(isVerified){
//         return true
//       } else {
//         return '/screen/registration'
//       }
//     },

//     async profiled(user, account, profile){
//       var isProfiled = true
//       if(user && !!!user.verifyEmail && !!!account.accessToken && !!!profile.id){
          
//         return isProfiled = false

//       }
//       if(isProfiled){
//         return true
//       } else {
//         return '/user/profile'
//       }
//     },

   

//     // /**
//     //  * @param  {string} url      URL provided as callback URL by the client
//     //  * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
//     //  * @return {string}          URL the client will be redirect to
//     //  */
//     async redirect(url, baseUrl) {
//       return url.startsWith(baseUrl) ? url : baseUrl;
//     },

//     // /**
//     //  * @param  {object}  token     Decrypted JSON Web Token
//     //  * @param  {object}  user      User object      (only available on sign in)
//     //  * @param  {object}  account   Provider account (only available on sign in)
//     //  * @param  {object}  profile   Provider profile (only available on sign in)
//     //  * @param  {boolean} isNewUser True if new user (only available on sign in)
//     //  * @return {object}            JSON Web Token that will be saved
//     //  */
//     async jwt(token, user, account, profile, isNewUser) {
//       // Add access_token to the token right after signin
//       if (isNewUser) {
//         token.verified = false
//       }
//       if(user){
//         token.user = user
//       }
//       if (user?.emailVerified){
//         token.verify = true
//         // token.accessToken = account.accessToken
//       }
//       if (user && account?.accessToken) {
//         token.user = user
//         token.accessToken = account.accessToken;
//       }
//       if(profile?.id){

//         token.profiles = true
//       }
//       return token;
//     },

//     // /**
//     //  * @param  {object} session      Session object
//     //  * @param  {object} token        User object    (if using database sessions)
//     //  *                               JSON Web Token (if not using database sessions)
//     //  * @return {object}              Session that will be returned to the client
//     //  */
//     async session(session, token) {
//       // Add property to session, like an access_token from a provider.
//       session.accessToken = token.accessToken;
//       session.uid = token.user.id
//       // session.uid = token.user.id;


//       return session;
//     },


//   },

//   pages: {
//     signIn: "/auth/login",
//     // signOut: "/auth/logout",
//     newUser: "/auth/register",
//   },
//   // register and registration
//   // register user 
//   //send verification 
//   //on verification create account 
//   //enable login 
//   //create session onLogin//  

//   // adapter: PrismaAdapter(prisma),
//   // adapter: Adapters.Prisma.Adapter({
//   //   prisma,
//   //   modelMapping:{
//   //     User: "user",
//   //     Account: "account",
//   //     Session:"session",
//   //     VerificationRequest:"verificationRequest",
//   //     // Profile:"profile"

//   //   }
//   // }),
//   // adapter: Adapters.Prisma.Adapter({ prisma }),
//   secret: process.env.SECRET,
//   debug: process.env.NODE_ENV === "development",

//   session: {
//     jwt: true,
//   },
//   jwt: {
//     // A secret to use for key generation - you should set this explicitly
//     // Defaults to NextAuth.js secret if not explicitly specified.
//     secret: process.env.SECRET,
//   },
//   database: process.env.DATABASE_URL_LOCAL,
// };


// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
// // create context ?next F>Auth
// //

// export default authHandler;




// // Argument of type 
// // 'import("/Users/workforfilms/help-india/help-india/
// //front/prisma/generated/client/index")
// //.PrismaClient<import("/Users/workforfilms/help-india/help-india/
// //front/prisma/generated/client/index").Prisma.PrismaClientOptions, never, 
// //import("/Users/workforfilms/help-india/help-india/front/prisma/generated/client/index").Prism...' is not assignable to parameter of type 'import("/Users/workforfilms/help-india/help-india/front/node_modules/.prisma/client/index").PrismaClient<import("/Users/workforfilms/help-india/help-india/front/node_modules/.prisma/client/index").Prisma.PrismaClientOptions, never, import("/Users/workforfilms/help-india/help-india/front/node_modules/.prisma/client/i...'.
// //   Property 'deviceStatus' is missing in type 'import("/Users/workforfilms/help-india/help-india/front/prisma/generated/client/index").PrismaClient<import("/Users/workforfilms/help-india/help-india/front/prisma/generated/client/index").Prisma.PrismaClientOptions, never, import("/Users/workforfilms/help-india/help-india/front/prisma/generated/client/index").Prism...' but required in type 'import("/Users/workforfilms/help-india/help-india/front/node_modules/.prisma/client/index").PrismaClient<import("/Users/workforfilms/help-india/help-india/front/node_modules/.prisma/client/index").Prisma.PrismaClientOptions, never, import("/Users/workforfilms/help-india/help-india/front/node_modules/.prisma/client/i...'.ts(2345)
// // index.d.ts(298, 7): 'deviceStatus' is declared here.
// // (alias) let allb: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>
// // import allb
export {}
