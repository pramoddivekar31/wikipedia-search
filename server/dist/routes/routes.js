"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appRoutes_1 = __importDefault(require("../constants/appRoutes"));
const searchWikipedia_1 = __importDefault(require("../controller/searchWikipedia"));
const router = (0, express_1.Router)();
router.get(appRoutes_1.default.Search, searchWikipedia_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map