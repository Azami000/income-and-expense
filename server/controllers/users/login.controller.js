import { readFileSync } from "fs";
import { DbPath } from "../../utils/costants.js";
import bcrypts from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginController = async (req, res) => {
  const { username, password } = req.body;

  const JsonResult = await readFileSync(DbPath, "utf-8");
  const db = JSON.parse(JsonResult);

  const user = db.users.find((el) => el.username === username);

  console.log(password);

  const isMatch = await bcrypts.compare(password, user.password);

  const tokenSecret = "key";

  if (!user || !isMatch) {
    res.status(200).send("username or password is nothing");
    return;
  }

  const token = jwt.sign({ username }, tokenSecret, {
    expiresIn: "5m",
  });
  res.status(200).send({ username, token });
};
