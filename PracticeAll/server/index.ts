import express from "express"
import userRouter from "./route/userRoute"

const app = express()
const port = 4000

app.use(express.json())
app.use("/api", userRouter)

app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    })
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})