import { sql } from "../../database/index.js";
import { v4 as uuid } from "uuid";

export const testController = async (req, res) => {
  const { username, email, password } = req.body;

  //   console.log(username, email, password);

  const createdAt = new Date();
  const userId = uuid();
  await sql`INSERT INTO users(userId, username, email, password, createdAt)
  VALUES(${userId}, ${username}, ${email}, ${password}, ${createdAt})`;

  const result = await sql`SELECT * FROM users`;
    console.log(result);

  res.send("success");
};
