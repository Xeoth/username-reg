import router from "express";
import mongoose from "mongoose";

import usernameModel from "../models/username.js";

const usernameRouter = router();

// usernameRouter.get("/", (req, res) => {
//   const { userID } = req.params;

//   usernameModel
// });

usernameRouter.post("/", (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) return res.sendStatus(400);

  const usernameDoc = new usernameModel({
    id: id,
    name: name,
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
