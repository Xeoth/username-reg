import router from "express";

import usernameModel from "../models/username.js";

const usernameRouter = router();

usernameRouter.get("/", async (req, res) => {
  const { id } = req.query;

  if (!id) return res.status(400).send("Please provide an ID");

  const usernames = await usernameModel.find({ id: id }).limit(10).exec();

  res.status(200).send(usernames);
});

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

usernameRouter.all("/", (_req, res) => res.sendStatus(405));

export default usernameRouter;
