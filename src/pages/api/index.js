import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.status(201).json({ name: "Nijin" });
  })
  .post((req, res) => {
    res.json({ message: "Posted" });
  });

export default handler;
