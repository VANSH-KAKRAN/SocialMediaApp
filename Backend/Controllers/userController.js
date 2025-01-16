import router from "../authRouter/AuthRoutes.js";
import User from "../Models/Schema.js";

export const userRoutes = async (req, res) => {

  const CurrentLogendInuserYou = req.user._id;

  const Users = await User.find().select("-password");
  console.log("you ", CurrentLogendInuserYou);
  // console.log("you ", req.user);
  res.json({Users});
};
