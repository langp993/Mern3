import mongoose from "mongoose";

const fakeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const FakeModel = mongoose.model("fake", fakeSchema);
export default FakeModel;
