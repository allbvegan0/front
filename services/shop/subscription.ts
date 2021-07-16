import axios from "axios";
import { baseUrl, setHeader } from "../setHeader";

export async function getSubscriptionOrderReciept(
  subscription_type: string
  // amount: number
) {
  return await axios
    .post(
      baseUrl,

      {
        query: `
    mutation($subscription_type: String! ){
      create_subscription_order(subscription_type: $subscription_type){
        id
        mediumId
        amount
        gateway_status
        sendAt

      }
    }`,
        variables: {
          subscription_type: subscription_type,
          // amount: amount,
          // status: status,
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

export async function updateSubscriptionOrderReciept(
  mediumId: string,
  payment_id: string
) {
  console.log('at axios subscription-->', mediumId, payment_id)
  return await axios
    .post(
      baseUrl,

      {
        query: `
    mutation($mediumId: String! $payment_id: String!){
      create_shop_recieved_payment(mediumId: $mediumId, payment_id: $payment_id ){
        id
        subscribed_on
        subscribed_till
        owner_type
        subscription_type
      }
    }`,
        variables: {
          mediumId: mediumId,
          payment_id: payment_id
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