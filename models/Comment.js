import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
