import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import authenticate from "./middleware/auth.js";
import usernameRouter from "./routes/usernames.js";

mongoose.connect("mongodb://localhost/username_logger", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const app = express();

app.use(express.json());

app.use("/username", authenticate, usernameRouter);

app.listen(process.env.PORT, () => console.log("9k list"));
