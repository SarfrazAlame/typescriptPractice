import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean,
    userId: String
})


export const User = mongoose.model("user",userSchema)
export const Todo = mongoose.model("Todo",TodoSchema)