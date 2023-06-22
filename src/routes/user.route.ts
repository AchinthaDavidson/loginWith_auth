import { body } from "express-validator";
import { validate } from "../utils/validator";
import { Router } from "express";
import { userLogin, userRegister } from "../controllers/user.control";

const userRouter = Router();

userRouter.post("/register",validate([
  body("email").isEmail(),
  body("password").isLength({min:5})
]),userRegister)


userRouter.post("/login", validate([
    body("email").isEmail(),
    body("password").isLength({min:5})
]),userLogin)
export default userRouter;