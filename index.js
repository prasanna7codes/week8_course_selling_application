const express = require("express")
const app= express()
const mongoose = require("mongoose");


require('dotenv').config();
const mongokey = process.env.mongokey;

mongoose.connect(mongokey);


const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");



app.use('/user',userRouter)
app.use('/course',courseRouter) 
app.use('/admin',adminRouter)



app.listen(3000)