import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://frontend-one-red-suqmzwnaqu.vercel.app',
  credentials: true

}))

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/user", userRoute);

await connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});

export default app;