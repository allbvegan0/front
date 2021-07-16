import axios from "axios";
import { getSession } from "next-auth/client";
import { setHeader } from "../../../services/setHeader";

export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  const result = await axios.get("http://localhost:4000/blog",{
  headers: setHeader()
  })
  console.log(result.data);
  res.json(result.data);
}
