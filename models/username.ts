import mongoose from "mongoose";

const usernameSchema = new mongoose.Schema({
  id: String,
  name: String,
  changeDate: Date,
});

const usernameModel = mongoose.model("Username", usernameSchema);

export default usernameModel;
