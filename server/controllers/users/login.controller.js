import { readFileSync } from "fs";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { DbPath } from "../../utils/costants.js";

import env from "dotenv";

env.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const JsonResult = await readFileSync(DbPath, "utf-8");
  const db = JSON.parse(JsonResult);

  const user = db.users.find((el) => el.email === email);

  if (!user) {
    return res.status(400).send("Username or password is wrong");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).send("Username or password is wrong");
  }

  const token = jwt.sign({ userId: user.userId }, process.env.SECRET, {
    expiresIn: "1h",
  });

  res.status(200).send({ userId: user.userId, token });
};
