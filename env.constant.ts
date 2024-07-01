import { config } from "dotenv";
config({ path: ".env" });

export const TURSO_CONNECTION_URL = process.env.TURSO_CONNECTION_URL;
export const TURSO_AUTH_TOKEN = process.env.TURSO_AUTH_TOKEN;
