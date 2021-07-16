import React from "react";
import { connect, ConnectedProps } from "react-redux";
import ThreeTierPricing from "../../components/forms/shop/shop-subscription";
import { withShopAuth } from "../../helpers/withAuth";
import { AppState } from "../../redux/store";
import { handleGetShop } from "../../redux/thunk/shop";
import ShopDashboard from "./shopDashboard";

const Shop = (props:Props)=>{
  // const {subscriptionOrder} = props
  // if(props.subscriptionOrder){
    const {currentUser, shop, getUserShop} = props
    React.useEffect(()=>{
      let mount = true
      if(mount){
        console.log('--->shop get', shop)
        getUserShop(currentUser.email)

      }
      return ()=>{
        mount=false
      }

    },[getUserShop])

    return <>
  {
    !shop?.id?<ThreeTierPricing/>:<ShopDashboard/>
  }
  
  </>
  // }
  // else {
  //   return <h1>Loding...</h1>
  // }
}

const mapDispatch = {
  // captureFromRazorPay: (data: any) => captureFromRazorpay(data),
  getUserShop:(data: string) => handleGetShop({email: data})
};

const mapState = (state: AppState) => ({
  currentUser: state.user.user.data,
  shop: state.shop.Shop.data,

  subscriptionOrder: state.subscription.Subscription.data,
});

const connector = connect(mapState, mapDispatch);
type PropFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropFromRedux {
 
  captureFromRazorpay(data: any): any;
  createShopForUser(data: any): any;
  getUserShop(data: string): any;

 
  subscriptionAmount: {price: number}
  currentUser: any;

  subscriptionOrder: any;
}

export default connector(withShopAuth(Shop))