import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});