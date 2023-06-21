import bodyParser from "body-parser";
import  express  from "express";
import { connect } from "./src/utils/db";
import userRouter from "./src/routes/user.route";


const app= express()

app.use(bodyParser.json())
app.use(userRouter)
connect().then(()=>{
  console.log("db connected")
  app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
  })
}).catch((err)=>{
  console.error('conn err',err)
})


    