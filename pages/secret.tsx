import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import { Box } from "@chakra-ui/layout";

export default function Secret() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <Box>
        <h2>You aren't signed in, please sign in first</h2>
      </Box>
    );
  }
  return (
    <Box>
      <h2> Protected Page</h2>
      <p>{content}</p>
    </Box>
  );
}
