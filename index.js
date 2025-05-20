const express = require("express")
const app= express()
app.use(express.json())
const mongoose = require("mongoose");



const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");



app.use('/user',userRouter)
app.use('/course',courseRouter) 
app.use('/admin',adminRouter)


async function main(){
    require('dotenv').config();
    const mongokey = process.env.mongokey;
    console.log("connected to ")
   await mongoose.connect(mongokey);

   app.listen(3000)
   console.log("listenig now")
}

main()


