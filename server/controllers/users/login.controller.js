import { sql } from "../../database/index.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import env from "dotenv";

env.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const [user] = await sql`SELECT * FROM users WHERE email = ${email}`;

  if (!user) {
    return res.status(400).send("Username or password is wrong");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).send("Username or password is wrong");
  }

  const token = jwt.sign({ userId: user.userid }, process.env.JWTF_SECRET, {
    expiresIn: "1d",
  });

  res.status(200).send({ userId: user.userid, token });
};
