import { Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/Home.module.css";
// import {
//   MdHome,
//   MdRoom,
//   MdSettings,
//   MdAddShoppingCart,
//   MdCached,
//   MdAccessibility,
// } from "react-icons/md";
import IconButton from "../../atoms/icon-buttons";
const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <>
        {SideItems.map((item) => {
          return (
            <Link href={item.ref} key={item.ref}>
              {/* <IconButton
                aria-label={item.label}
                alignSelf="center"
                size="lg"
                mx={3}
                icon={<Icon as={item.icon} />}
              /> */}
                {/* <img src={`${item.icon}`}/> */}
              <Text
                m={3}
                color="primary"
                display={["none", "none", "flex", "flex"]}
              >
                {item.text}
              </Text>
            </Link>
          );
        })}
      </>
    </div>
  );
};

const SideItems = [
  {
    ref: "/",
    label: "home",
    // icon: MdHome,
    text: "Home",
  },
  // {
  //   ref: "/auth",
  //   label: "Auth",
  //   icon: MdAccessibility,
  //   text: "Auth",
  // },
  {
    ref: "/admin",
    label: "Auth",
    // icon: MdAccessibility,
    text: "Auth",
  },
  {
    ref: "/components",
    label: "components",
    // icon: MdCached,
    text: "Components",
  },
  {
    ref: "/consumer/settings",
    label: "settings",
    // icon: MdSettings,
    text: "Settings",
  },
  {
    ref: "/cart",
    label: "cart",
    // icon: MdAddShoppingCart,
    text: "Cart",
  },
  {
    ref: "/order/status",
    label: "Track Order",
    // icon: MdRoom,
    text: "Track Order",
  },
];

export default SideBar;
