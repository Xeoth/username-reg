import router from "express";

const usernameRouter = router();

usernameRouter.get("/", (req, res) => {
  res.sendStatus(200);
});

export default usernameRouter;
