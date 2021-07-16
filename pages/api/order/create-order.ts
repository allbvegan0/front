// // ec4a2bdd4dde
export{}
// import prisma from "../../../lib/prisma";


// export interface Customer {
//   id?: number;
//   name?: string;
//   email: string;
//   address?: string;
// }


// export interface OrderInput {
//   customer: Customer;
//   productId: number;
//   quantity: number;
// }

// export async function createOrder(input: OrderInput){
//   const { productId, customer, quantity}= input;
//   const { name, email,address}=customer;


//   const product = await prisma.product.findUnique({
//     where: {
//       id: productId,
//     },
//   });
//   if (!product) return new Error('Out of stock');

//   await prisma.order.create({
//     data: {
//       customer: {
//         connectOrCreate: {
//           create: {
//             name,
//             email,
//             address,
//           },
//           where: {
//             email,
//           },
//         },
//       },
//       orderDetails: {
//         create: {
//           total: product.price,
//           quantity,
//           products: {
//             connect: {
//               id: product.id,
//             },
//           },
//         },
//       },
//     },
//   });
// }