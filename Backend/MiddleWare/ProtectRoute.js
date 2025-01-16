import jwt from "jsonwebtoken";
import User from "../Models/Schema.js";

const ProtectRoute = async(req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // console.log(token);
    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }
    // console.log("DECODE",process.env.SECRET_KEY );

    const decoded = jwt.verify(token,process.env.SECRET_KEY );
    if(!decoded) {
        return res.status(401).json({ error: "Token is invalid, authorization denied" });
    }
    const user = await User.findById(decoded.userId).select("-password");

    if(!user){
        return res.status(401).json({ error: "User not found, authorization denied" });
    }
    req.user = user;

    next();

  } catch (error) {
    console.log("there is an error in protectRoute", error);
  }
};
export default ProtectRoute;
