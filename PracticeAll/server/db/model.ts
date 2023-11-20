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
