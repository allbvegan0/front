import { Link, MenuDivider, MenuItem, MenuList, useMenuList } from "@chakra-ui/react"
import React from "react"
import { useDispatch } from "react-redux"
import { handleSignOut } from "../../../redux/thunk/auth"

const PopList = (user)=>{
  const dispatch = useDispatch()
  console.log('in pop', user)
  return           <><MenuList 
      style={{margin:0, padding:0, offset:0}}
  >
    <MenuItem  className="menuItem">
      Welcome, {user.user.name?user.user.name:user.user.email}
    </MenuItem>
    {user.user.email === "forfilmcoin@gmail.com" ? (
      <Link href={"/admin"}>
        <MenuItem>Admin</MenuItem>
      </Link>
    ) : (
      <MenuItem>___-----____</MenuItem>
    )}
    <Link href="/user">
      <MenuItem>User Profile</MenuItem>
    </Link>
    <Link href="/account/settings">
      <MenuItem>Account Settings</MenuItem>
    </Link>
    <MenuItem>Order History</MenuItem>

    <Link href="/legal">
      <MenuItem>`F.A.Q.'s & Support Center`</MenuItem>
    </Link>
    <Link href="/legal/refund">
    <MenuItem>Teams & Conditions</MenuItem>
    </Link>
    <Link href="/legal/policy">

    <MenuItem>Privacy Policy</MenuItem>
    </Link>
    <Link href="/legal/contactUs">
      <MenuItem>Contact Us</MenuItem>
    </Link>

    <MenuDivider />
    <MenuItem onClick={() => dispatch(handleSignOut({}))}>
      Sign Out
    </MenuItem>
  </MenuList></>
}
export default PopList