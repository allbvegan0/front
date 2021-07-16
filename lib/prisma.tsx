// import { prisma } from "../prisma/generated/client";
// import { PrismaClient } from "../prisma/generated/client";

// declare global {
//   namespace NodeJS {
//     interface Global {
//       prisma: any;
//       allbvegan: string;
//     }

//     interface Network {
//       all_network: string;
//     }
//   }
// }

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }
// export default prisma;

export {}
