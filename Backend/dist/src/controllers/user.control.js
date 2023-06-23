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
exports.userLogin = exports.userRegister = exports.currentUser = void 0;
const user_service_1 = require("../services/user.service");
const currentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currentUser = req.user;
    try {
        if (!currentUser) {
            return res.status(400).send({ err: 'User not longer in' });
        }
        const userDoc = yield (0, user_service_1.findUserById)(currentUser.email);
        console.log(userDoc);
        // const user=userDoc?.toJOSN()as any;
        // console.log(user)
        userDoc === null || userDoc === void 0 ? true : delete userDoc.password;
        res.status(200).json(userDoc);
    }
    catch (err) {
        res.status(400).send({ err: err });
    }
});
exports.currentUser = currentUser;
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
