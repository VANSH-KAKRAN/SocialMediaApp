import express from "express";
import { login, logout, signup } from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signup);

export default router;
