import env from "dotenv";
import cors from "cors";
import userRouter from "./routers/user.routers.js";
import express from "express";

env.config();

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(userRouter);

app.listen(port, console.log(`http://localhost:${port}`));
