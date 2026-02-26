
import mongoose from "mongoose"

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DB connected")
  } catch (error) {
    console.error("DB connection failed:", error.message)
    process.exit(1) // ❗ stop server if DB fails
  }
}

export default connectDb