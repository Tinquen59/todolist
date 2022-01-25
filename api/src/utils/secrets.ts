import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const MONGODB_URI: string = !process.env["MONGODB_URI"]
    ? ""
    : process.env["MONGODB_URI"];

export const ACCESS_TOKEN_SECRET: string = !process.env["ACCESS_TOKEN_SECRET"]
    ? "MESSAGE_SECRET"
    : process.env["ACCESS_TOKEN_SECRET"];
