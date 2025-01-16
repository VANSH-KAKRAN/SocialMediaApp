import mongoose from "mongoose";

const ReelSchema = mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postReel: {
    type: String,
    required: true,
  },
  postMessage: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Reels = mongoose.model("reels", ReelSchema);
export default Reels;