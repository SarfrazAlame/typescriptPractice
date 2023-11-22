import express from "express"
import userRouter from "./route/userRoute"
import todoRouter from "./route/todoRoute"
import mongoose from "mongoose"
import cors from 'cors'

const app = express()
const port = 4000

app.use(express.json()) 
app.use(cors()) 

app.use("/api", userRouter)
app.use("/api", todoRouter)

app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    })
})

mongoose.connect("mongodb://127.0.0.1:27017/PracticeUser")

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})