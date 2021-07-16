import { useColorMode, Switch } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      position="fixed"
      top="10rem"
      right="10rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
console.log(RegExp);
// console.log(RTCCertificate);
