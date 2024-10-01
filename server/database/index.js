import { neon } from "@neondatabase/serverless";
import env from "dotenv";

env.config();

const Connection_String = process.env.DB_CONNRCTION_STRING;

export const sql =neon(Connection_String)