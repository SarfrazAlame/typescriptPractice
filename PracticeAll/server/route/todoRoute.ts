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

router.get("/todo", authenticateJwt, async (req, res) => {
    const userId = req.headers['userId']
    const todos = Todo.findById({userId})
    if(todos){
        res.json({todo:todos})
    }else{
        res.json({message:"todo not found"})
    }
})
export default router