import express from "express";
import mongoose from "mongoose";
import basicAuth from "express-basic-auth";
import dotenv from "dotenv";
dotenv.config();

import usernameRouter from "./routes/usernames.js";

mongoose.connect("mongodb://localhost/username_logger", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const app = express();

app.use(express.json());

app.use(
  basicAuth({
    users: {
      admin: process.env.LOGGER_PASSWORD,
    },
  })
);

app.use("/username", usernameRouter);

app.listen(process.env.PORT, () => console.log("9k list"));
