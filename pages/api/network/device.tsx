export default async (req, res) => {
  const f = await fetch(`http://localhost:4000/user`);
  const data = await f.json();

  if (!data) {
    console.log("not f");
    return {
      notFound: true,
    };
  }

  console.log("data from api .next--==>", data);
  res.statusCode = 200;
  return {
    props: { data },
  };
};
