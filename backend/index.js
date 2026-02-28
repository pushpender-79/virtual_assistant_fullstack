import dotenv from "dotenv"
dotenv.config()

import express from "express"
import connectDb from "./config/db.js"
import authrRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(cors({
origin:"http://localhost:5173",
credentials:true
}))
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authrRouter)

app.get("/", (req, res) => {
    res.send("hii")
})

const startServer = async () => {
    try {
        await connectDb()
        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        })
    } catch (error) {
        console.log("DB connection failed:", error)
    }
}

startServer()