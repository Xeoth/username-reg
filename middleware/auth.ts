import { Request, Response, NextFunction } from "express";
import decode from "../utils/base64Decode.js";

export default function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) return res.sendStatus(401);

  const authorization = decode(req.headers.authorization).split(":");
  if (
    authorization[0] !== process.env.LOGGER_USERNAME ||
    authorization[1] !== process.env.LOGGER_PASSWORD
  ) {
    res.sendStatus(403);
  } else {
    next();
  }
}
