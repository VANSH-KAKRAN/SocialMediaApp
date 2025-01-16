


// import express from "express";
// import multer from "multer";
// import path from "path";
// import fs from "fs";
// import Reels from "./ReelSchema.js";
// import User from "../Models/Schema.js";


// const router = express.Router();



// // Directory for storing uploaded reels
// const uploadPath = path.join(process.cwd(), "Reels/");
// if (!fs.existsSync(uploadPath)) {
//   fs.mkdirSync(uploadPath, { recursive: true });
//   console.log("Reels directory created:", uploadPath);
// }

// // Multer configuration for file storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log("Storing file in:", uploadPath);
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}${ext}`);
//   },
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ["video/mp4", "video/mkv", "video/webm"];
//     if (allowedTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error("Unsupported file type. Only MP4, MKV, and WebM are allowed."));
//     }
//   },
//   limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB limit
// });

// // Serve static files from the Reels directory
// router.use("/Reels", express.static(uploadPath));

// /**
//  * POST /reels
//  * Upload a new reel
//  */
// router.post("/", upload.single("postReel"), async (req, res) => {
//   try {
//     const { senderId, postMessage } = req.body;

//     // Validate required fields
//     if (!senderId || !postMessage || !req.file) {
//       return res.status(400).json({ message: "Missing required fields or file" });
//     }

//     // Construct the file URL
//     const fileUrl = `${req.protocol}://${req.get("host")}/Reels/${req.file.filename}`;

//     // Fetch user details
//     const user = await User.findById(senderId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Extract relevant user data
//     const { profilePic, username, fullname } = user;

//     // Create a new reel
//     const newReel = new Reels({
//       senderId,
//       postReel: fileUrl,
//       postMessage,
//       profilePic,
//       username,
//       fullname,
//     });

//     // Save the reel to the database
//     const savedReel = await newReel.save();
//     console.log("New Reel Saved:", savedReel);

//     res.status(201).json(savedReel);
//   } catch (error) {
//     console.error("Error handling reel post:", error);

//     if (error instanceof multer.MulterError) {
//       return res.status(400).json({ message: error.message });
//     }

//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// /**
//  * GET /reels
//  * Fetch all reels
//  */
// router.get("/", async (req, res) => {
//   try {
//     const allReels = await Reels.find().sort({ createdAt: -1 });
//     res.json(allReels);
//   } catch (error) {
//     console.error("Error fetching reels:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// export default router;




// import express from "express";
// import multer from "multer";
// import path from "path";
// import fs from "fs";
// import Reels from "./ReelSchema.js";
// import User from "../Models/Schema.js";

// const router = express.Router();

// // Directory for storing uploaded reels
// const uploadPath = path.join(process.cwd(), "Reels/");
// if (!fs.existsSync(uploadPath)) {
//   fs.mkdirSync(uploadPath, { recursive: true });
//   console.log("Reels directory created:", uploadPath);
// }

// // Multer configuration for file storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log("Storing file in:", uploadPath);
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}${ext}`);
//   },
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ["video/mp4", "video/mkv", "video/webm"];
//     if (allowedTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error("Unsupported file type. Only MP4, MKV, and WebM are allowed."));
//     }
//   },
//   limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB limit
// });

// // Serve static files from the Reels directory
// router.use("/Reels", express.static(uploadPath));

// /**
//  * POST /reels
//  * Upload a new reel
//  */
// router.post("/", upload.single("postReel"), async (req, res) => {
//   try {
//     const { senderId, postMessage } = req.body;

//     // Validate required fields
//     if (!senderId || !postMessage || !req.file) {
//       return res.status(400).json({ message: "Missing required fields or file" });
//     }

//     // Construct the file URL
//     const fileUrl = `${req.protocol}://${req.get("host")}/Reels/${req.file.filename}`;

//     // Fetch user details
//     const user = await User.findById(senderId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Extract relevant user data
//     const { profilePic, username, fullname } = user;

//     // Create a new reel
//     const newReel = new Reels({
//       senderId,
//       postReel: fileUrl,
//       postMessage,
//       profilePic,
//       username,
//       fullname,
//     });

//     // Save the reel to the database
//     const savedReel = await newReel.save();
//     console.log("New Reel Saved:", savedReel);

//     res.status(201).json(savedReel);
//   } catch (error) {
//     console.error("Error handling reel post:", error);

//     if (error instanceof multer.MulterError) {
//       return res.status(400).json({ message: error.message });
//     }

//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// /**
//  * GET /reels
//  * Fetch all reels
//  */
// router.get("/", async (req, res) => {
//   try {
//     const allReels = await Reels.find().sort({ createdAt: -1 });
//     res.json(allReels);
//   } catch (error) {
//     console.error("Error fetching reels:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// /**
//  * GET /reels/:id/video
//  * Stream a specific reel video
//  */
// router.get("/:id/video", (req, res) => {
//   const { id } = req.params;
  
//   // Find reel in the database
//   Reels.findById(id, (err, reel) => {
//     if (err || !reel) {
//       return res.status(404).json({ message: "Reel not found" });
//     }

//     const videoPath = path.join(uploadPath, path.basename(reel.postReel));
//     const stat = fs.statSync(videoPath);
//     const fileSize = stat.size;
//     const range = req.headers.range;

//     if (!range) {
//       res.status(416).send("Range not provided");
//       return;
//     }

//     const CHUNK_SIZE = 10 ** 6; // 1MB chunks
//     const start = Number(range.replace(/\D/g, ""));
//     const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

//     const readStream = fs.createReadStream(videoPath, { start, end });

//     // Set the appropriate headers for streaming
//     res.writeHead(206, {
//       "Content-Range": `bytes ${start}-${end}/${fileSize}`,
//       "Accept-Ranges": "bytes",
//       "Content-Length": end - start + 1,
//       "Content-Type": "video/mp4", // or video/webm based on the file type
//     });

//     readStream.pipe(res);
//   });
// });

// export default router;






import express from "express"; 
import multer from "multer";
import path from "path";
import fs from "fs";
import Reels from "./ReelSchema.js";
import User from "../Models/Schema.js";
import cors from "cors"; // CORS library

const router = express.Router();

// Allow cross-origin requests


// CORS configuration


// Directory for storing uploaded reels
const uploadPath = path.join(process.cwd(), "Reels/");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
  console.log("Reels directory created:", uploadPath);
}

// Multer configuration for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Storing file in:", uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["video/mp4", "video/mkv", "video/webm"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file type. Only MP4, MKV, and WebM are allowed."));
    }
  },
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB limit
});

// Serve static files from the Reels directory
router.use("/Reels", express.static(uploadPath));

/**
 * POST /reels
 * Upload a new reel
 */
router.post("/", upload.single("postReel"), async (req, res) => {
  try {
    const { senderId, postMessage } = req.body;

    // Validate required fields
    if (!senderId || !postMessage || !req.file) {
      return res.status(400).json({ message: "Missing required fields or file" });
    }

    // Construct the file URL
    const fileUrl = `${req.protocol}://${req.get("host")}/Reels/${req.file.filename}`;

    // Fetch user details
    const user = await User.findById(senderId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract relevant user data
    const { profilePic, username, fullname } = user;

    // Create a new reel
    const newReel = new Reels({
      senderId,
      postReel: fileUrl,
      postMessage,
      profilePic,
      username,
      fullname,
    });

    // Save the reel to the database
    const savedReel = await newReel.save();
    console.log("New Reel Saved:", savedReel);

    res.status(201).json(savedReel);
  } catch (error) {
    console.error("Error handling reel post:", error);

    if (error instanceof multer.MulterError) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * GET /reels
 * Fetch all reels
 */
router.get("/", async (req, res) => {
  try {
    const allReels = await Reels.find().sort({ createdAt: -1 });
    res.json(allReels);
  } catch (error) {
    console.error("Error fetching reels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * GET /reels/:id/video
 * Stream a specific reel video
 */
router.get("/:id/video", (req, res) => {
  const { id } = req.params;

  // Find reel in the database
  Reels.findById(id, (err, reel) => {
    if (err || !reel) {
      return res.status(404).json({ message: "Reel not found" });
    }

    const videoPath = path.join(uploadPath, path.basename(reel.postReel));
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (!range) {
      res.status(416).send("Range not provided");
      return;
    }

    const CHUNK_SIZE = 10 ** 6; // 1MB chunks
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

    const readStream = fs.createReadStream(videoPath, { start, end });

    // Set the appropriate headers for streaming
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "video/mp4", // assuming mp4 format for now
    });

    readStream.pipe(res);
  });
});

export default router;
