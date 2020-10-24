import mongoose from "mongoose";

const nicknameSchema = new mongoose.Schema({
  id: String,
  name: String,
  changeDate: Date,
});

const nicknameModel = mongoose.model("Nickname", nicknameSchema);

export default nicknameModel;
