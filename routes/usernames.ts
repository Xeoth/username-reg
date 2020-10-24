import router from "express";
import mongoose from "mongoose";

const usernameRouter = router();
const db = mongoose.connection;

usernameRouter.get("/", (req, res) => {
  const { userID } = req.params;
});

export default usernameRouter;
