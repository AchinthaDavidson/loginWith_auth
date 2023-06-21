import { Request, Response } from "express";
import { findUserById, register } from "../services/user.services";


// userRouter.post("/login", (req, res) => {});

export const userRegister= async (req:Request, res:Response) => {
  try {
    // const { fname, lname, password, email } = req.body;
    const lname = "Eee";
    const fname = "eee";
    const password = "eee";
    const email = "<EMAI>kkkll";

    const existingUser = await findUserById(email);
    if (existingUser) {
      return res.status(400).send({
        err: "User Already Exits",
      });
    }

    const newUser = await register(email, fname, lname, password);
    res.status(201).send(newUser);
  } catch (err: any) {
    console.log(err);
  }
}


