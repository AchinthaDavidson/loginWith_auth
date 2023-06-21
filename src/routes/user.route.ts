import { body } from "express-validator";
import { validate } from "../utils/validator";
import { Router } from "express";
import { userRegister } from "../controllers/user.control";

const userRouter = Router();

userRouter.post("/register",validate([
  body("email").isEmail(),
  body("password").isLength({min:5})
]),userRegister)

export default userRouter;