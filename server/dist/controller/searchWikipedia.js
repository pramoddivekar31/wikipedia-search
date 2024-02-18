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
const axios_1 = __importDefault(require("axios"));
const apiUrl_1 = require("../constants/apiUrl");
const searchWikipedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const { query, limit, offset } = req.query;
        const searchUrl = `${apiUrl_1.SEARCH_BASE_URL}&srsearch=${query}&srlimit=${limit}&sroffset=${offset}`;
        const response = yield axios_1.default.get(searchUrl);
        if (response.data.error)
            throw response.data.error;
        const searchResult = ((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.search) || [];
        const searchResultList = searchResult.map(({ title, pageid }) => ({ title, pageid }));
        res.json(searchResultList);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            const axiosError = error;
            res
                .status(((_c = axiosError.response) === null || _c === void 0 ? void 0 : _c.status) || 500)
                .json(((_d = axiosError.response) === null || _d === void 0 ? void 0 : _d.data) || "Internal Server Error");
        }
        else {
            res.status(500).json({
                error: (error === null || error === void 0 ? void 0 : error.info) || (error === null || error === void 0 ? void 0 : error.message) || "Internal Server Error",
            });
        }
    }
});
exports.default = searchWikipedia;
//# sourceMappingURL=searchWikipedia.js.map