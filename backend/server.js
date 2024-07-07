import express from "express";
import cors from "cors";
import { conntectDB } from "./config/db.js";
import "dotenv/config";

//importing Routes
import userRouter from "./routes/userRoute.js";
//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

// db connection

conntectDB();

//api end points

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server Started On http://localhost:${port}`);
});
