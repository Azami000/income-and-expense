import { Router } from "express";
import { SignupController } from "../controllers/users/sign-up.controller.js";
import { loginController } from "../controllers/users/login.controller.js";
import { authMiddleware } from "../midllewares/auth.js";
import { getUserInfo } from "../controllers/users/allUsers.js";
import { currencyController } from "../controllers/users/currency.controller.js";
import { testController } from "../controllers/users/test.js";

const userRouter = Router();

userRouter.route("/user/login").post(loginController);
userRouter.route("/user/sign-up").post(SignupController);
userRouter.post("/step", authMiddleware, currencyController);
userRouter.post("/user", authMiddleware, getUserInfo);

userRouter.post("/user/dbtest", testController);

export default userRouter;
