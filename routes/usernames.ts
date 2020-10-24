import router from "express";
import mongoose from "mongoose";

import usernameModel from "../models/username.js";

const usernameRouter = router();
const db = mongoose.connection;

// usernameRouter.get("/", (req, res) => {
//   const { userID } = req.params;

//   usernameModel
// });

usernameRouter.post("/", (req, res) => {
  const { userID, username } = req.body;

  const usernameDoc = new usernameModel({
    id: userID,
    name: username,
    date: new Date(),
  });

  usernameDoc.save((err, saved) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }

    res.status(201).send(saved);
  });
});

export default usernameRouter;
