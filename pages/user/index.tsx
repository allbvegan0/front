import {

  Box,
  Center,

  useColorModeValue,
  Grid,

} from "@chakra-ui/react";
import React from "react";
import withAuth from "../../helpers/withAuth";
import Description from "../../components/molecules/decorative/description";
import { MediaUR } from "../../services/constants";
import { useProfile} from "../../hooks/nav";
import { _Avatar } from "../../components/atoms/avatar";
import  MeCard  from "./cards/me";
import  UserBuilderCard  from "./cards/builder";
import  UserAddresesCard  from "./cards/addresses";
import QuestionsBox from "./cards/questiions"
import { AppState } from "../../redux/store";
// import { connect } from "react-redux";
import { connect, ConnectedProps } from "react-redux";
import { handleDeleteUserAddress, handleGetUser, handleGetUserAddresses } from "../../redux/thunk/user";
import { Address, AddressActions } from "../../redux/slices/user/address";
import OrderHistory from "./cards/orders";

// import router from "next/router";

const user = {
  name: "change is James",
  email: "@l_h_k_d_s",
  image: "",
  tag: "consumer",
  description:
    "Message from system: Conngratulations!! verify yor link by clicking on link sent_to email ",
  role: ["Customer", "Admin", "Shopkeeper"],
  intesests: ["skin", "face", "hair-fall"],
  bio: "",
};

const messages = [
  "Message from system: Conngratulations!! verify yor link by clicking on link sent_to email ",
  "Congratulation! You are verified. Complete you profile by adding picture and address",
  "You are successfully profiled. Continue by adding a wishlist allbLabs will find best solutions for you.",
];




const SocialProfileSimple = (props:Props) => {

  const profile = useProfile()

  // const router = useRouter();

  console.log('avialable props & callbacks',props)
  const {me:{user:me}, user, addresses, subscription} = props
  if (!me) {
    return <Description>Need User</Description>;
  }

  if(me){  
    var p = profile ? profile.updateProfile.image : user.image;
    console.log('--=-=-=>',user, addresses)
  }
  if (me) {
    var src = "";
    if (user.image) {
      src = `${MediaUR}${user.image ? user.image : user.image}`;
    }
    return (
      <Center py={6}>
        <Grid
          p={3}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={4}
        >
          <MeCard {...me}/>
          <UserBuilderCard {...props}/>
          <UserAddresesCard {...props}/>
          <QuestionsBox/>
          <OrderHistory {...props}/>
          </Grid>
          </Center>
    );
  }
};

const mapDispatch = {
  getUser:(email: string)=>handleGetUser({email}),
  getUserAddressses:(email: string)=>handleGetUserAddresses({email}),
  addUserAddress:(address: Address, email:string)=>AddressActions.addAddressRequest({address, email}),
  deleteUserAddress:(street_address: string, zipcode: string)=>handleDeleteUserAddress({street_address, zipcode}),
  // updateUserRole:(role: string)=>handleUpdateUserRole({role:"Shopkeeper"})
};

const mapState = (state: AppState) => ({
  me: state.auth.auth.data,
  user: state.user.user.data,
  addresses: state.address.Addresses.data,
  subscription: state.subscription.Subscription.data,
  shop: state.shop.Shop.data
});

const connector = connect(mapState, mapDispatch);
type PropFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropFromRedux {
  // member: string
  user:{
    image: string,
    emailVerified: boolean
    role: string
  }
  addresses: []
  me:{
    user:{
      email: string
    }
    role:{
      // update_to_shopkeeper
    }
  },
  getUser(email: string):any,
  getUserAddresses(email: string): Address[]
  addUserAddress(address: Address, emil: string): any
  deleteUserAddresss(street_address: string, zipcode: string): any
}

export default withAuth(connector(SocialProfileSimple));
