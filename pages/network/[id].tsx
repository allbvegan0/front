import { useRouter } from "next/router";

export default function Device() {
  const router = useRouter();
  const { id } = router.query;

  return <><h3>
    {id}
    </h3>
    </>;
}
