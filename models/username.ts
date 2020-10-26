import mongoose from "mongoose";

const usernameSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, required: true },
});

const usernameModel = mongoose.model("Username", usernameSchema);

export default usernameModel;
