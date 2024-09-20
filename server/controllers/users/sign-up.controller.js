import { readFileSync, writeFileSync } from "fs";
import { v4 as uuid } from "uuid";
import { DbPath } from "../../utils/costants.js";
import bcrypts from "bcryptjs";

export const SignupController = async (req, res) => {
  const { username, email, password, rePassword } = req.body;
  console.log("Received data:", req.body);

  // Log input to check if username and email are received
  console.log("Received data:", req.body);

  if (password !== rePassword) {
    return res.status(400).send("Passwords do not match");
  }

  const userId = uuid();

  try {
    const JsonResult = readFileSync(DbPath, "utf-8");
    const db = JSON.parse(JsonResult);

    const foundUser = db.users.find((el) => el.email === email);
    if (foundUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = bcrypts.hashSync(password, Number(process.env.SALT));

    db.users.push({
      userId,
      username,
      email,
      password: hashedPassword,
    });

    writeFileSync(DbPath, JSON.stringify(db), "utf-8");
    res.send("Successfully created the user");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};
