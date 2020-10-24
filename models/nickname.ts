import mongoose from "mongoose";

const nicknameSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, required: true },
});

const nicknameModel = mongoose.model("Nickname", nicknameSchema);

export default nicknameModel;
