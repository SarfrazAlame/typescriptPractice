"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middelware/auth");
const model_1 = require("../db/model");
const router = express_1.default.Router();
router.post("/todo", auth_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const done = false;
    const userId = req.headers['userId'];
    const newTodo = new model_1.Todo({ title, description, done, userId });
    try {
        yield newTodo.save();
        res.status(200).json({ message: "Todo created successfully" });
    }
    catch (error) {
        res.status(404).json({ message: "error while adding " });
    }
}));
router.get("/todo", auth_1.authenticateJwt, (req, res) => {
    const userId = req.headers['userId'];
    model_1.Todo.findById({ userId }).then((todos) => {
        console.log(todos);
        res.json({ todo: todos });
    }).catch(e => {
        console.log(e);
    });
});
exports.default = router;
