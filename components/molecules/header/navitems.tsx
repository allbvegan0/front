
import { connect, ConnectedProps } from "react-redux";
import { isAuthenticated } from "../../../helpers/withAuth";
import { useFlip, useFlipS, useUser } from "../../../hooks/nav";
import { AppState } from "../../../redux/store";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
// console.log('check for navitems',isAuthenticated)
var login = false
if(isAuthenticated){
  // console.log('auth track',isAuthenticated())
}
const NV = (props)=>{
  
  // const {currentUser, shop} = props
  // console.log('--=-=-=-=-=>',shop, currentUser)
  const {shop, currentUser} = props

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      children: [
        {
          label: "Explore New Products",
          subLabel: "Trending Products to inspire you",
          href: "/products",
        },
        {
          label: "New & Noteworthy",
          subLabel: "Up-and-coming Manufacturers",
          href: "/products/catalogue",
        },
      ],
    },
    {
      label: "Shop",
      children: [
        shop.id?
        {
          label: "Goto Shop Dashboard",
          subLabel: "An exclusive list for toolsets to sale",
          href: "/shop/shopDashboard",
        }:{
          label: "Register Shop ",
          subLabel: "Create your dream digital shop",
          href: "/shop/registerShop",
        }
      ],
    },
    {
      label: "Consumer",
      children: [
        !currentUser.email?{
          label: "Register Consumer ",
          subLabel: "Shop on your dream digital shop",
          href: "/auth/register",
        }:
        {
          label: "Goto Consumer Dashboard",
          subLabel: "An exclusive list for toolsets to select right product",
          href: "/consumer/dashboard",
        },
      ],
    },
    {
      label: "Learn Product Making",
      href: "#",
    },
    {
      label: "Product Certification Services",
      href: "#",
    },
  ] 
  return NAV_ITEMS
}






export default NV

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    children: [
      {
        label: "Explore New Products",
        subLabel: "Trending Products to inspire you",
        href: "/products",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Manufacturers",
        href: "/products/catalogue",
      },
    ],
  },
  {
    label: "Shop",
    children: [
      !login?{
        label: "Register Shop ",
        subLabel: "Create your dream digital shop",
        href: "/shop/registerShop",
      }: {
        label: "Sign Out ",
        subLabel: "Thank you for visit",
        href: "/signOut",
        
      },
      {
        label: "Goto Shop Dashboard",
        subLabel: "An exclusive list for toolsets to sale",
        href: "/shop/shopDashboard",
      },
    ],
  },
  {
    label: "Consumer",
    children: [
      !login?{
        label: "Register Consumer ",
        subLabel: "Shop on your dream digital shop",
        href: "/auth/register",
      }:
      {
        label: "Goto Consumer Dashboard",
        subLabel: "An exclusive list for toolsets to select right product",
        href: "/consumer/dashboard",
      },
    ],
  },
  {
    label: "Learn Product Making",
    href: "#",
  },
  {
    label: "Product Certification Services",
    href: "#",
  },
];
