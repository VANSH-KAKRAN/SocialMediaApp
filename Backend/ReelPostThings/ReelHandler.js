import Reels from "./ReelSchema.js";
import express from "express";
import User from "../Models/Schema.js";
import multer from "multer";

// const router = express.Router();

const Reelhandler = async (req , res) => {
  try {
    const { senderId, postReel, postMessaage } = req.body;

    const featchuser = User.findById({ senderId});
    if (featchuser) {
      console.log("user is available for reels at reel router");
    } else {
      console.log("User not found at reeel router ");
    }
    

    const profilePic = featchuser.profilePic;
    const username = featchuser.username;
    const SaveReel = new Reels({
      senderId: senderId,
      postReel: postReel,
      postMessaage: postMessaage,
      profilePic: profilePic,
      username: username,
    });

    await SaveReel.save();
    res.status(201).json(SaveReel);
  } catch (error) {
    console.log(error);
  }
};

export default Reelhandler;
