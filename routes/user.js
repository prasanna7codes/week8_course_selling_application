const{ Router } = require("express")

const userRouter = Router();

const { userModel } = require ("../db");


userRouter.post('/sigup', (req,res)=>{

})


userRouter.post('/sigin', (req,res)=>{
    
})
 

userRouter.post('/purchases', (req,res)=>{
    
})


module.exports={
    userRouter:userRouter
}



