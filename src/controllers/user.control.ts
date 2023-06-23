import { Request, Response } from "express";
import { findUserById, login, register } from "../services/user.service";


export const currentUser= async (req:Request, res:Response) => {
     const currentUser=req.user;
     try {
      if (!currentUser){
        return res.status(400).send({err:'User not longer in'})
      }

      const userDoc = await findUserById(currentUser.email);
      const user=userDoc?.toJOSN();
      delete user.password;
  
      res.status(200).json(user);
      } catch (err) {
        res.status(400).send({err:err})
     }

    

}

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


