import { readFileSync, writeFileSync } from "fs";
import { DbPath } from "../../utils/costants.js";

export const currencyController = async (req, res) => {
  const { currency, balance } = req.body;
  const { userId } = res.locals;

  const JsonResult = await readFileSync(DbPath, "utf-8");
  const db = JSON.parse(JsonResult);

  const foundUser = db.users.find((element) => element.userId === userId);

  if (!foundUser) {
    res.status(404).send("user not found");
    return;
  }

  foundUser.balance = balance;
  foundUser.currency = currency;

  await writeFileSync(DbPath, JSON.stringify(db), "utf-8");

  res.send("Success");
};
