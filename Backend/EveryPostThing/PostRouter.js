import express from "express";
import multer from "multer";
import Posts from "./PostsSchema.js";
import path from "path";
import User from "../Models/Schema.js";

const router = express.Router();

// 🟢 1️⃣ Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(process.cwd(), "upload/"); // Absolute path to upload folder
    console.log("Storing file in: ", uploadPath); // Debug to see where files are stored
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const extt = path.extname(file.originalname); // Get the file extension
    cb(null, `${Date.now()}${extt}`); // Unique filename with timestamp + extension
  },
});

// 🟢 2️⃣ Serve files statically at /upload
router.use("/upload", express.static(path.join(process.cwd(), "upload")));

const upload = multer({ storage: storage });

// 🟢 3️⃣ Route to create a new post (upload a file)
router.post("/", upload.single("photo"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No photo uploaded" });
  }

  try {
    const FileUrl = `http://localhost:2000/upload/${req.file.filename}`; // Full path to the file
    const { message1, id } = req.body;
    if ((!message1, !id, !req.file.filename)) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    // const { message1, id } = req.body;
    console.log("Message:", message1);
    console.log("UserId:", id);

    const UserSchemaData = await User.findById(id);
    console.log(UserSchemaData);

    const fullname = UserSchemaData.fullname;
    const username = UserSchemaData.username;
    const profilePic = UserSchemaData.profilePic;
    const UserI = id;

    const fullnameString = UserSchemaData.fullname.toString();
    const usernameString = UserSchemaData.username.toString();
    const profilePicString = UserSchemaData.profilePic.toString();
    const UserIString = id.toString();

    const NewPost = new Posts({
      senderId: UserI,
      postImage: FileUrl, // Save full path of the file in the database
      postMessaage: message1,
      profilePic: profilePic,
      username: username, // Save user details in the response
      fullname: fullname,
    });

    const CostomResponse = {
      senderId: UserIString,
      postImage: FileUrl.toString(), // Save full path of the file in the database
      postMessaage: message1,
      fullname: fullnameString,
      username: usernameString,
      profilePic: profilePicString, // Save user details in the response
    };

    await NewPost.save();
    console.log("NewPost", NewPost);
    res.status(201).json(CostomResponse);
  } catch (error) {
    console.log("error in saving NewPost", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// 🟢 4️⃣ Route to fetch all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log("Error fetching posts", error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
