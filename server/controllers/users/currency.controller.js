import { sql } from "../../database/index.js";

export const currencyController = async (req, res) => {
  const { currency, balance } = req.body;
  const { userId } = res.locals;

  const [user] = await sql`SELECT * FROM users WHERE userid = ${userId}`;

  if (!user) {
    res.status(404).send("user not found");
    return;
  }

  await sql`UPDATE users SET currency = ${currency}, balance = ${balance} WHERE userid = ${userId}`;

  res.send("Success");
};
