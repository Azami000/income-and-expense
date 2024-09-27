import jwt from "jsonwebtoken";

export const getUserInfo = (req, res) => {
  const { userId } = res.locals;

  const refreshToken = jwt.sign({ userId }, process.env.SECRET, {
    expiresIn: "1dц",
  });

  res.status(200).send({ token: refreshToken });
};
