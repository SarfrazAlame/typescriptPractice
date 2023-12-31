"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./route/userRoute"));
const todoRoute_1 = __importDefault(require("./route/todoRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", userRoute_1.default);
app.use("/api", todoRoute_1.default);
app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});
mongoose_1.default.connect("mongodb://127.0.0.1:27017/PracticeUser");
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
