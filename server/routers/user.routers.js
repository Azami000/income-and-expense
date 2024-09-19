import { Router } from "express";
import { SignupController } from "../controllers/users/sign-up.controller.js";
import { loginController } from "../controllers/users/login.controller.js";

const userRouter = Router();

userRouter.route("/user/login").post(loginController);
userRouter.route("/user/sign-up").post(SignupController);

export default userRouter;
