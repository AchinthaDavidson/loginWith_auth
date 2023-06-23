"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const db_1 = require("./src/utils/db");
const user_route_1 = __importDefault(require("./src/routes/user.route"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(user_route_1.default);
(0, db_1.connect)().then(() => {
    console.log("db connected");
    app.listen(3000, () => {
        console.log(`Server listening on port 3000`);
    });
}).catch((err) => {
    console.error('conn err', err);
});
