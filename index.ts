import express from "express";
import mongoose from "mongoose";
import basicAuth from "express-basic-auth";
import dotenv from "dotenv";
dotenv.config();

import usernameRouter from "./routes/usernames.js";
import nicknameRouter from "./routes/nicknames.js";

mongoose.connect(process.env.MONGODB_URL, {
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
app.use("/nickname", nicknameRouter);

app.listen(process.env.PORT, () =>
  console.log(`Logger running on port ${process.env.PORT}`)
);
