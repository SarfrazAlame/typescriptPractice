import express from 'express'
import { User } from '../db/model'
import jwt from 'jsonwebtoken'
import { authenticateJwt } from '../middelware/auth'
export const SECRET = "uecw234"

const router = express.Router()

router.post("/signup", async (req, res) => {
    const { username, password } = req.body
    const existingUser = await User.findOne({ username })
    if (existingUser) {
        return res.status(311).json({
            message: "User Already axist"
        })
    }
    const newUser = new User({username, password})
    await newUser.save()
    const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '4h' })
    return res.status(200).json({ message: "successfully registered", token })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (user) {
        const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '4h' })
        res.json({ message: "login successful", token })
    } else {
        res.json({ messsage: "Invalid password or username" })
    }
})

router.get("/me", authenticateJwt, async(req,res)=>{
    const userId = req.headers['userId']
    const user = await User.findById({_id:userId})
    if(user){
        res.status(200).json({username:user.username})
    }else{
        res.status(311).json({message:"User not logged in"})
    }
})


export default router