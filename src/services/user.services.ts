import User from "../models/user.models";

export async function findUserById(email:string) {
    const existingUser=await User.findOne({email});
    const userPayload=JSON.parse(JSON.stringify(existingUser))
    if(userPayload){
        delete userPayload.password;
    }

return userPayload;

}

export async function register(email:string,fname:string,lname:string,password:string){
    const newUser = new User({
        fname,
        lname,
        password,
        email,
      });

      const userPayload=JSON.parse(JSON.stringify(newUser))
      if(userPayload){
          delete userPayload.password;
      }
      await newUser.save();
     return userPayload;
}