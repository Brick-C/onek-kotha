import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import dotenv from "dotenv";
import authRoutes from "./route/auth";

//intialize express
const app = express();
dotenv.config();

//setup middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);
const io = new Server(server);

// app.get("/", (req, res) => {
//   res.send("<h1>Onek Kotha</h1>");
// });

app.use("/api/v1/auth", authRoutes);

io.on("connection", (socket: Socket) => {
  console.log("A user connected");

  socket.on("chat message", (msg: String) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
