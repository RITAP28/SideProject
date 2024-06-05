import express from "express";
import cors from "cors";
import multer from "multer";
import { storage } from "./middleware/multer.upload";
import path from "path";
import router from "./routes/user.routes";

const app = express();
export const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 4000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("./uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  console.log("Hello world!");
  res.send({
    msg: "server working",
  });
});

app.use("/", router());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
