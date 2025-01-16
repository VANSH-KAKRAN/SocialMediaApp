import Conversation from "../Models/ConversationModel.js";
import Message from "../Models/messageModel.js";
import User from "../Models/Schema.js";

export const Sendmessage = async (req, res) => {
  const { id: receaverId } = req.params;
  const { message } = req.body;
  const senderId = req.user._id;

if(message === '' || message === undefined || message === null || message ==="[]"){
    res.status(400).json({ message: 'Message cannot be empty' });
  }

  console.log("senderid", senderId);
  console.log("receaverid", receaverId);

  let ConversationFunc = await Conversation.findOne({
    participants: { $all: [senderId, receaverId] },
  });

  if (!ConversationFunc) {
    ConversationFunc = await Conversation.create({
      participants: [senderId, receaverId],
    });
  }
  const NewMessage = new Message({
    senderId,
    receaverId,
    message,
  });

  if (NewMessage) {
    ConversationFunc.messages.push(NewMessage._id);
  }

  // const Sender = await User.findOne(senderId)
  // const Receaver = await User.findOne(receaverId)

  await Promise.all([ConversationFunc.save(), NewMessage.save()]);
  res.status(201).json(NewMessage);
  console.log(ConversationFunc);
  console.log(NewMessage);
};

export const getMessages = async (req, res) => {
  try {
  // const { id: receaverId } = req.params;

    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const ConversationData = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    if (!ConversationData) {
      return res.status(200).json([]);
    }
    const Sender = await User.findOne(senderId).username;
    const Receaver = await User.findOne(userToChatId).username;
    const messages = ConversationData.messages;
    res.status(200).json(messages, Sender, Receaver);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
