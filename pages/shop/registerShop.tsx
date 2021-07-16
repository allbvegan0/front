import router from "next/router";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import ThreeTierPricing from "../../components/forms/shop/shop-subscription";
import withAuth from "../../helpers/withAuth";
import { AppState } from "../../redux/store";


function RegisterShop(props) {
  const {shop} = props
  // React.useEffect(() => {
  //   let mount=true
  //   if(mount){
  //     if(shop.id){

  //       router.push('/shop')
  //     }
  //   }
  //   return () => {
  //     mount = false
  //   }
  // }, [shop.id])
  return (
    <>
      <ThreeTierPricing {...props}/>
    </>
  );
}

const mapDispatch = {

};

const mapState = (state: AppState) => ({

  me: state.auth.auth.data,
  cuurrentUser: state.user.user.data,
  addresses: state.address.Addresses.data,
  subscription: state.subscription.Subscription.data,
  shop: state.shop.Shop.data

});

const connector = connect(mapState, mapDispatch);
type PropFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropFromRedux {
  shopStatus: string
  shopOwnerType: string
  subscriptionType: string
  subscription: any 
  cuurrentUser: any
  shop: any

}

export default connector(withAuth(RegisterShop));
