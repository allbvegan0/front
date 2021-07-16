import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Card } from "../../components/molecules/decorative/card";
import withAuth from "../../helpers/withAuth";
import { Address } from "../../redux/slices/user/address";
import { AppState } from "../../redux/store";
import { handleGetUser } from "../../redux/thunk/user";
import SocialProfileSimple from '../user'

function Dashboard(props: Props) {
  const{me, getUser}=props
  React.useEffect(()=>{
    let mount = true
    if(mount){
      getUser(me.user.email)
    }
    return ()=>{
      mount=false
    }
  },[getUser])
  return (
    <>
      <Card>
        <SocialProfileSimple {...props}/>
      </Card>
    </>
  );
}

const mapDispatch = {

  getUser:(email: string)=>handleGetUser({email}),

};

const mapState = (state: AppState) => ({

  me: state.auth.auth.data,
  user: state.user.user.data,
  addresses: state.address.Addresses.data,

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
  },
  getUser(email: string):any,
  getUserAddresses(email: string): Address[]
  addUserAddress(address: Address, emil: string): any
  deleteUserAddresss(street_address: string, zipcode: string): any


}


export default withAuth(connector(Dashboard));
