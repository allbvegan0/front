import axios from "axios";
import { baseUrl, setHeader } from "../setHeader";


export async function createUserShop(
  subscription_type: string,
  payment_receipt_id: string,
  order_id: string,
  owner_type: string,
  gst: string,
  pan: string,
  x: string,
  y: string,
  inventory_location: string
) {
  return await axios
    .post(
      baseUrl,

      {
        query: `
    mutation(
      $subscription_type: String! 
      $payment_receipt_id: String! 
      $order_id: String!
      $owner_type: String!
      $gst: String!
      $pan: String!
      $x: Float!
      $y: Float!
      $inventory_location: String!
      ){
      create_shop_recieved_payment(
        subscription_type: $subscription_type 
        payment_receipt_id: $payment_receipt_id 
        order_id: $order_id
        owner_type: $owner_type
        gst: $gst
        pan: $pan
        x: $x
        y: $y
        inventory_location: $inventory_location
        ){
          id,
          owner_type,
          GST_NUMBER,
          PAN_NUMBER,
          inventoryId,
          allowed_items,
          subscription_type
      }
    }`,
        variables: {
          subscription_type: subscription_type,
          payment_receipt_id: payment_receipt_id,
          order_id: order_id,
          owner_type: owner_type,
          gst: gst,
          pan: pan,
          x: x,
          y: y,
          inventory_location: inventory_location,
        },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log("---===---->subscription order", data);
      const sub_c = data.data.data;
      return sub_c;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function getUserShop(email: string) {
  console.log('email for shop', email)
  return await axios
    .post(
      baseUrl,

      {
        query: `
    query getAddress($email: String!){
      get_user_shop(email: $email){
          id
          allowed_items
          subscription_type
          amount_paid_for_subscription
          subscribed_on
          subscribed_till

      }
    }`,
    variables:{email: email}
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log("---===---->get shop user", data);
      const sub_c = data.data;
      return sub_c;
    })
    .catch((e) => {
      console.log(e);
    });
}
