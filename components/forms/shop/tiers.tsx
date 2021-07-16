export const tiers = [
  {
    // title: "Freeµˆ¨µƒ®´´",
    title: "Freemium",

    price: "2",
    description: [
      "2 allb_placeholder",
      // "100 MB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Basic",
    subheader: "Most popular",
    price: "499",
    description: [
      "10 allb_placeholder",
      // "1 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Pro",
    price: "4999",
    description: [
      "100 allb_placeholder",
      // "10 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Start Own Shop",
    buttonVariant: "outlined",
  },
  {
    title: "Enterprise",
    price: "call",
    description: [
      "unliimited allb_placeholder",
      // "unnlimited GB of storage",
      "Help center access",
      "24X7 Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export const slice_switch = (subscription_type: string) => {
  switch (subscription_type.toUpperCase()) {
    case "FREEMIUM":
      return 1;
    case "BASIC":
      return 2;
    case "PRO":
      return 3;
    case "ENTERPRISE":
      return 4;
    default:
      return 0;
  }
};
