// import User from "../Models/Schema.js";
// import express from "express";

// const router = express.Router();

// router.get("/", async (req, res) => {
//   const { id } = req.body;
//   console.log(id)


//   const UserData = await User.findById({ id});
//   res.json({ UserData });
//   console.log("your details", UserData);
// });

// export default router;

import User from "../Models/Schema.js";
import express from "express";

const router = express.Router();

// Correct the endpoint to handle the id from query params
router.get("/", async (req, res) => {
  const { id } = req.query;  // Fetch id from query params
  console.log(id);  // Log the id to check

  try {
    const userData = await User.findById(id);  // Find user by id
    res.json({ userData });  // Return user data as JSON
    console.log("Your details:", userData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data", error: error.message });
  }
});

export default router;
