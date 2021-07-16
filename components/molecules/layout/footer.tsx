import { Icon, IconButton, Link, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/Home.module.css";
// import { MdHome, MdRoom, MdSettings, MdAddShoppingCart } from "react-icons/md";
import { DragHandleIcon, ArrowRightIcon, RepeatClockIcon, RepeatIcon} from '@chakra-ui/icons'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <>
        {BottomItems.map((item) => {
          return (
            <Link href={item.ref} key={item.ref}>
              <IconButton
                aria-label={item.label}
                alignSelf="center"
                size="lg"
                mx={3}
                icon={<Icon as={item.icon} />}
              />
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

const BottomItems = [
  {
    ref: "/",
    label: "home",
    icon: DragHandleIcon,
    text: "Home",
  },
  {
    ref: "/consumer/settings",
    label: "settings",
    icon: ArrowRightIcon,
    text: "Settings",
  },
  {
    ref: "/cart",
    label: "cart",
    icon: RepeatClockIcon,
    text: "Cart",
  },
  {
    ref: "/order/status",
    label: "Track Order",
    icon: RepeatIcon,
    text: "Track Order",
  },
];

export default Footer;
