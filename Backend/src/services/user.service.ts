import { allowedNodeEnvironmentFlags } from "process";
import User from "../models/user.models";
import { validate } from "../utils/validator";
import { createPasswordHash, signToken, validatePassword } from "./auth.service";

export async function findUserById(email:string) {
    const existingUser=await User.findOne({email});
    const userPayload=JSON.parse(JSON.stringify(existingUser))
    if(userPayload){
        delete userPayload.password;
    }

return userPayload;

}

export async function register(email:string,fname:string,lname:string,password:string){

    
    const hash= await createPasswordHash(password)
   
    const newUser = new User({
        fname,
        lname,
        password:hash,
        email,
      });

      const userPayload=JSON.parse(JSON.stringify(newUser))
      if(userPayload){
          delete userPayload.password;
      }
      await newUser.save();
     return userPayload;
}

export async function login(email:string,password:string) {
    const  acc=await User.findOne({email})

    if (!acc){
        throw new Error('User not found')
    }

  const payload =await signToken(password,acc.password,{id:acc._id.toString(),email:email})

  return payload
    
    
}