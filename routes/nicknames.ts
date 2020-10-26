import router from "express";

import nicknameModel from "../models/nickname.js";

const nicknameRouter = router();

nicknameRouter.get("/", async (req, res) => {
  const { id } = req.query;

  if (!id) return res.status(400).send("Please provide an ID");

  const nicknames = await nicknameModel.find({ id: id }).limit(10).exec();

  res.status(200).send(nicknames);
});

nicknameRouter.post("/", (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) return res.sendStatus(400);

  const nicknameDoc = new nicknameModel({
    id: id,
    name: name,
    date: new Date(),
  });

  nicknameDoc.save((err, saved) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }

    res.status(201).send(saved);
  });
});

nicknameRouter.all("/", (_req, res) => res.sendStatus(405));

export default nicknameRouter;
