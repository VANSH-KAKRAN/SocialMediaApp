import mongoose from "mongoose";

const ConversationModel = new mongoose.Schema(
  {
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Messages",
            default: [],
        },
    ],
    
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationModel);
export default Conversation;
