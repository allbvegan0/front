import { Stack } from "@chakra-ui/react";
import React from "react";
import { Card } from "../../components/molecules/decorative/card";
import { Link } from "../../components/molecules/decorative/link";
import Message from "../../components/molecules/decorative/message";
import Title from "../../components/molecules/decorative/title";

const passwordResetSuccessScreen = () => {
  return (
    <>
      <Card>
        <Title>Success!</Title>
        <Message>Password reset successful.</Message>

        <Stack align="center">
          <Link href="/auth/login" textAlign="center">
            Click Here to continue
          </Link>
        </Stack>
      </Card>
    </>
  );
};

export default passwordResetSuccessScreen;
