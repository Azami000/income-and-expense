import cors from "cors";
import env from "dotenv";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());
