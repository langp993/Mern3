import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: String,

  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const Usermodel = mongoose.model("user", userSchema);
// module.exports = mongoose.model("Item", itemSchema);
