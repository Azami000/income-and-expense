import { sql } from "../../database/index.js";
import { v4 as uuid } from "uuid";

import bcrypts from "bcryptjs";

export const SignupController = async (req, res) => {
  const { username, email, password, rePassword } = req.body;
  console.log("Received data:", req.body);

  console.log("Received data:", req.body);

  if (password !== rePassword) {
    return res.status(400).send("Passwords do not match");
  }

  const userId = uuid();
  const createdAt = new Date();

  try {
    const [foundUser] = await sql`SELECT * FROM users WHERE userid = ${userId}`;
    if (foundUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = bcrypts.hashSync(password, Number(process.env.SALT));

    await sql`INSERT INTO users(userId, username, email, password, createdAt) 
    VALUES(${userId}, ${username}, ${email}, ${hashedPassword},${createdAt})`;

    res.send("Successfully created the user");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};
