// import Posts from "../../EveryPostThing/PostsSchema.js";
// import express from "express";
// import Reels from "../../ReelPostThings/ReelSchema.js";

// const router = express.Router();

// router.get("/", (req, res) => {
//   try {
//     const { id } = req.body;

//     Posts.find({ userId: id })
//       .sort({ createdAt: -1 })
//       .exec((err, posts) => {
//         if (err) return res.status(500).send(err);
//         const Post = posts;
//         Reels.find({ userId: id })
//           .sort({ createdAt: -1 })
//           .exec((err, reels) => {
//             if (err) return res.status(500).send(err);

//             const Reel = reels;
//             res.json({ Post, Reel });
//           });
//       });
//   } catch (error) {
//     console.log(error);
//   }
// });

// export default router;
import express from "express";
import Posts from "../../EveryPostThing/PostsSchema.js";
import Reels from "../../ReelPostThings/ReelSchema.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { id } = req.query; // Use query params for GET request

    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // Fetch posts and reels concurrently
    const [posts, reels] = await Promise.all([
      Posts.find({ senderId: id }).sort({ createdAt: -1 }),
      Reels.find({ senderId: id }).sort({ createdAt: -1 }),
    ]);

    res.json({ posts, reels });
  } catch (error) {
    console.error("Error fetching posts and reels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
