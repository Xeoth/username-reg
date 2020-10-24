import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";
import mongoose from "mongoose";

const usernameSchema = new mongoose.Schema({
  id: String,
  name: String,
  changeDate: Date,
});

const usernameModel = mongoose.model("Username", usernameSchema);

export default usernameModel;
