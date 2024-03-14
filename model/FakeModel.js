import mongoose from "mongoose";

const fakeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const FakeModel = mongoose.model("fake", fakeSchema);
export default FakeModel;
