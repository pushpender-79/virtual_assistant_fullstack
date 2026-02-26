
// import dotenv from "dotenv"
// dotenv.config()
// import express from "express"
// import connectDb from "./config/db.js"

// const app=express()
// const port=process.env.PORT || 5000

// app.get("/",(req,res)=>{
//     res.send("hii")
// })

// app.listen(port,()=>{
//     connectDb()
//     console.log("server started")
// })

import dotenv from "dotenv"
dotenv.config()

import express from "express"
import connectDb from "./config/db.js"

const app = express()
const port = process.env.PORT || 5000

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