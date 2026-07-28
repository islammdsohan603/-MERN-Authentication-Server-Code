import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URI}/note-app`)
    console.log("MongoDb Connected Successfully")
  } catch (error) {
    console.log("MongoDb connection error ", error)
  }
}

export default connectDB