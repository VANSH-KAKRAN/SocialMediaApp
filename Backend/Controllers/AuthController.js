import User from "../Models/Schema.js";
import bcrypt from "bcrypt";
import GenerateTokenSetCookie from "../Utils/GenerateToken.js";

export const signup = async (req, res) => {
  try {
    let { fullname, username, password, confirmPassword, gender, profilePic } =
      req.body;

    console.log(fullname, username, password, confirmPassword, gender);
    if (password !== confirmPassword) {
      console.log(password, confirmPassword);
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) return res.status(400).json({ error: "User already exists" });

    // const salt = await bcrypt.genSalt(8);
    // const hashedPassword = await bcrypt.hash(password, salt);
    const hashedPassword = await bcrypt.hash(password, 10);

    let boyprofilePic = `https://avatar.iran.liara.run/public/boy?user=${username}`;
    let girlprofilepic = `https://avatar.iran.liara.run/public/girl?user=${username}`;
    // creating a new user
    const saveUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyprofilePic : girlprofilepic,
    });
    // if new user saving it
    if (saveUser) {
      //generate JWT token here
      GenerateTokenSetCookie(saveUser._id, res);

      await saveUser.save();
      console.log("user saved");

      const FindUser = await User.findOne({ username });
      const id = FindUser._id;
      const StringId = id.toString();

      res.send(StringId);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const FindUser = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      FindUser?.password || ""
    );

    if (FindUser && isPasswordCorrect) {
      GenerateTokenSetCookie(FindUser._id, res);
      // const CurrentLogendInuserYou = req.user._id;

      const Users = await User.findOne({ username }).select("-password");
      const id = Users._id;

      const StringId = id.toString();
      console.log(StringId);
      res.json(StringId);
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
};
export const logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.send("Logged out successfully");
};
