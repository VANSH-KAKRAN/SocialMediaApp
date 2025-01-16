import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
dotenv.config();
const app = express();
const Port = process.env.PORT;
const server = createServer(app);
import cors from "cors";
import router from "./authRouter/AuthRoutes.js";
import messageRoutes from "./authRouter/messageRoutes.js";
import MongoConnection from "./Connection/MongoConn.js";
import cookieParser from "cookie-parser";
import userRoutes from "./authRouter/GetUserRoutes.js";
import postsRouter from "./EveryPostThing/PostRouter.js";
// import { setCurrentUser } from "./authRouter/AuthRoutes.js";
import status from "express-status-monitor";
import ReelRouter from './ReelPostThings/ReelRouter.js';
import ExplorerRouter from './authRouter/ExplorerRouter.js';
import userDetailsController from './Controllers/userDetailsController.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(status());
// app.use(setCurrentUser)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("hllo from backend");
});

app.use("/api/auth", router);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postsRouter);
app.use("/api/posts/reel", ReelRouter);
app.use("/upload", express.static("upload"));
app.use("/Reels", express.static("Reels"));
app.use("/api/explore", ExplorerRouter);
app.use('/you',userDetailsController)


// io.on("connection", (socket) => {
//   console.log("User connected");
// });

server.listen(Port, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
