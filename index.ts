import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authenticate from "./middleware/auth.js";
import usernameRouter from "./routes/usernames.js";

const app = express();

app.use(express.json());

app.use("/username", authenticate, usernameRouter);

app.listen(process.env.PORT, () => console.log("9k list"));
