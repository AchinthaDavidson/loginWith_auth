import { Router } from "express";
import User from "../models/user.models";

const userRouter = Router();

userRouter.post("/login", (req, res) => {

});

userRouter.post("/register", async (req, res) => {
  try {
    // const { fname, lname, password, email } = req.body;
const lname="Eee"
const fname="eee"
const password="eee"
const email= "<EMAIL>"

    const newUser = new User({
      fname,
      lname,
      password,
      email,
    });

    newUser.save();
    res.status(201).send(newUser)
  } catch (err:any) {
    console.log(err)

  }
});

export default userRouter
