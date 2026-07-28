import express from 'express'

import dotenv from "dotenv";
import connectDB from './database/db.js';


dotenv.config()

const app = express()




const PORT = process.env.NEXT_PUBLIC_SERVER_URL;


app.listen(PORT, () => {
  connectDB
  console.log(`server is listening at PORT ${PORT}`)
})