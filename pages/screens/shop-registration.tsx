import { Stack } from "@chakra-ui/react";
import React from "react";
import { Card } from "../../components/molecules/decorative/card";
import { Link } from "../../components/molecules/decorative/link";
import Message from "../../components/molecules/decorative/message";
import Title from "../../components/molecules/decorative/title";

const ShopRegistrationWelcomeScreen = () => {
  return (
    <>
      <Card>
        <Title>Congratulation!</Title>
        <Message>
          Click on the link to start adding products in your shop.
        </Message>

        <Stack align="center">
          <Link href="/shop/shopDashboard" textAlign="center">
            Click Here to continue
          </Link>
        </Stack>
      </Card>
    </>
  );
};

export default ShopRegistrationWelcomeScreen;
