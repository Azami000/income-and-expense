import { readFileSync, writeFileSync } from "fs";
import { v4 as uuid } from "uuid";
import { DbPath } from "../../utils/costants.js";
import bcrypts from "bcryptjs";

export const SignupController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.send("Invalid inputs").status(400);
    return;
  }

  const userId = uuid();

  const JsonResult = await readFileSync(DbPath, "utf-8");
  const db = JSON.parse(JsonResult);
  const foundUser = db.users.find((el) => el.email === email);
  if (foundUser) {
    res.status(400).send("Already Registered Email");
    return;
  }

  const hashedPassword = await bcrypts.hashSync(
    password,
    Number(process.env.SALT)
  );

  db.users.push({
    userId,
    username,
    email,
    password: hashedPassword,
  });

  await writeFileSync(DbPath, JSON.stringify(db), "utf-8");
  res.send("Successfully created the users");
};
