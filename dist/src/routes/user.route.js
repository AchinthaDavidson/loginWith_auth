"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validator_1 = require("../utils/validator");
const express_1 = require("express");
const user_control_1 = require("../controllers/user.control");
const userRouter = (0, express_1.Router)();
userRouter.post("/register", (0, validator_1.validate)([
    (0, express_validator_1.body)("email").isEmail(),
    (0, express_validator_1.body)("password").isLength({ min: 5 })
]), user_control_1.userRegister);
userRouter.post("/login", (0, validator_1.validate)([
    (0, express_validator_1.body)("email").isEmail(),
    (0, express_validator_1.body)("password").isLength({ min: 5 })
]), user_control_1.userLogin);
exports.default = userRouter;
