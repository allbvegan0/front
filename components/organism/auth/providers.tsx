import { SimpleGrid, Button, VisuallyHidden, Avatar } from "@chakra-ui/react";
import { signIn } from "next-auth/client";
import React from "react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import Description from "../../molecules/decorative/description";

const Providers = () => {
  const handleGitHub = () => {
    console.log("github try");
    signIn("github", { callbackUrl: "/" });
  };
  return (
    <SimpleGrid mt="6" columns={3} spacing="3">
      <Button color="currentColor" variant="outline" onClick={() => signIn("facebook", { callbackUrl: "/" })}>
        <h3>Facebook</h3>
<Avatar name="facebook" color="white" bg="blue.400"/>
      </Button><br/>
      <Button color="currentColor" variant="outline" onClick={() => signIn("google", { callbackUrl: "/" })}>
        <h3>Google</h3>

        <Avatar name="Google"/>
      </Button><br/>

      <Button color="currentColor" variant="outline" onClick={() => handleGitHub()} >
        <h3>GitHub</h3>
        <Avatar name="Git Hub"/>
      </Button>
    </SimpleGrid>
  );
};

export default Providers;
