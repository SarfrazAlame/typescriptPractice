import express from "express"
import { authenticateJwt } from "../middelware/auth"
import { Todo } from "../db/model"
const router = express.Router()

router.post("/todo", authenticateJwt, async (req, res) => {
    const { title, description } = req.body
    const done = false
    const userId = req.headers['userId']
    const newTodo = new Todo({ title, description, done, userId })
    try {
        await newTodo.save()
        res.status(200).json({ message: "Todo created successfully" })
    } catch (error) {
        res.status(404).json({ message: "error while adding " })
    }
})

router.get("/todo", authenticateJwt, (req, res) => {
    const userId = req.headers['userId']
    Todo.findById({userId}).then((todos) => {
        console.log(todos)
        res.json({ todo: todos })
    }).catch(e => {
        console.log(e)
    })
})
export default router