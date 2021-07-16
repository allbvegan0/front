import { Stack } from "@chakra-ui/react";
import React from "react";
import { Card } from "../../components/molecules/decorative/card";
import { Link } from "../../components/molecules/decorative/link";
import Message from "../../components/molecules/decorative/message";
import Title from "../../components/molecules/decorative/title";

const orderSuccessScreen = () => {
  return (
    <>
      <Card>
        <Title>Thankyou!</Title>
        <Message>order placed successfully.</Message>

        <Stack align="center">
          <Link href="/order/status" textAlign="center">
            Click Here to track your order
          </Link>
        </Stack>
      </Card>
    </>
  );
};

export default orderSuccessScreen;
