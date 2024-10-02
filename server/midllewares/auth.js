import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const jwtToken = token.split(" ")[1];

  jwt.verify(jwtToken, process.env.JWTF_SECRET, (err, suc) => {
    if (err) {
      res.status(401).send({ message: err.message });
      return;
    } else {
      res.locals.userId = suc.userId;
      next();
      return;
    }
  });
};
// import jwt from "jsonwebtoken"

// export  const auth=async (req,res,next)={
//   try {
//     const {token}=req.headers.authorization;
//     if (!token){
//       res.status(404).send{message: "Token not provided"}
//     }
//     const jwtToken =token.split(" ")[1]
//   } catch (error) {

//   }
