import { Request, Response } from "express";
import { findUserById, login, register } from "../services/user.service";


// userRouter.post("/login", (req, res) => {});

export const userRegister= async (req:Request, res:Response) => {
  try {
    const { fname, lname, password, email } = req.body;


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

export const userLogin= async(req:Request,res:Response)=>{

  try{

      const {  password, email } = req.body;
     const payload=await login(email,password)

      res.status(200).send(payload)
  }catch(err:any){
    res.status(400).send({err:err.massage})
  }
}


