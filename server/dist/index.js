"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
const NODE_PORT = 8080;
const BASE_PATH = "/api";
app.use(cors());
app.get("/api/health-check", (req, res) => {
    res.send("Server is up");
});
app.use(BASE_PATH, routes_1.default);
app.listen(NODE_PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${NODE_PORT}`);
});
//# sourceMappingURL=index.js.map