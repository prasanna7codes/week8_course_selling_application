const{ Router } = require("express");
const { userModel } = require("../db");
const bcrypt = require('bcrypt');

const adminRouter = Router();

adminRouter.post('/signup',async(req,res)=>{

    const email= req.body.email;
    const password=req.body.password;
    const hash = bcrypt.hashSync(password,5);

    await userModel.create({
        email,
        password:hash
    })


    res.json({
        "message": " you are signed up "
    })

})

adminRouter.post('/signin',(req,res)=>{
    
})


adminRouter.post('/course',(req,res)=>{
    
})


adminRouter.put('/course',(req,res)=>{
    
})


adminRouter.get('/course/bulk',(req,res)=>{
    
})




module.exports={
    adminRouter:adminRouter
}



