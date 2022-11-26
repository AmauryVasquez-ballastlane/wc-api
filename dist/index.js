"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// Body parser
app.use(express_1.default.json());
// CORS
// const whitelist = 'http://localhost:3000/';
// const options = {
//   origin: (origin: string, callback: Function) => {
//     if (whitelist.includes(origin)) callback(null, true);
//     else callback(new Error('Not allowed'));
//   },
// };
app.use((0, cors_1.default)());
// App router
(0, index_1.default)(app);
const PORT = 5005;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}/`);
});
//# sourceMappingURL=index.js.map