const express = require("express")
const app= express()
const mongoose = require("mongoose");

//mongoose.connect("");


const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");



app.use('/user',userRouter)
app.use('/course',courseRouter) 
app.use('/admin',adminRouter)



app.listen(3000)