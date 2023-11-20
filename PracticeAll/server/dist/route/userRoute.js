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
exports.SECRET = void 0;
const express_1 = __importDefault(require("express"));
const model_1 = require("../db/model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middelware/auth");
exports.SECRET = "uecw234";
const router = express_1.default.Router();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const existingUser = yield model_1.User.findOne({ username });
    if (existingUser) {
        return res.status(311).json({
            message: "User Already axist"
        });
    }
    const newUser = new model_1.User({ username, password });
    yield newUser.save();
    const token = jsonwebtoken_1.default.sign({ id: newUser._id }, exports.SECRET, { expiresIn: '4h' });
    return res.status(200).json({ message: "successfully registered", token });
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield model_1.User.findOne({ username });
    if (user) {
        const token = jsonwebtoken_1.default.sign({ id: user._id }, exports.SECRET, { expiresIn: '4h' });
        res.json({ message: "login successful", token });
    }
    else {
        res.json({ messsage: "Invalid password or username" });
    }
}));
router.get("/me", auth_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.headers['userId'];
    const user = yield model_1.User.findById({ _id: userId });
    if (user) {
        res.status(200).json({ username: user.username });
    }
    else {
        res.status(311).json({ message: "User not logged in" });
    }
}));
exports.default = router;
