import mongoose from "mongoose";

const PostsSchema = mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postImage: {
    type: String,
    required: true,
  },
  postMessaage: {
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

const Posts = mongoose.model("Posts", PostsSchema);
export default Posts;
