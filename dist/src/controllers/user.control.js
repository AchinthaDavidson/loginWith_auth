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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userRegister = void 0;
const user_service_1 = require("../services/user.service");
// userRouter.post("/login", (req, res) => {});
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fname, lname, password, email } = req.body;
        const existingUser = yield (0, user_service_1.findUserById)(email);
        if (existingUser) {
            return res.status(400).send({
                err: "User Already Exits",
            });
        }
        const newUser = yield (0, user_service_1.register)(email, fname, lname, password);
        res.status(201).send(newUser);
    }
    catch (err) {
        console.log(err);
    }
});
exports.userRegister = userRegister;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email } = req.body;
        const payload = yield (0, user_service_1.login)(email, password);
        res.status(200).send(payload);
    }
    catch (err) {
        res.status(400).send({ err: err.massage });
    }
});
exports.userLogin = userLogin;
