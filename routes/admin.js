const{ Router } = require("express");
const { userModel } = require("../db");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

Jwt_admin_secret="pqrst"

const adminRouter = Router();

const {adminModel}= require ("../db")

adminRouter.post('/signup',async(req,res)=>{

     const { email, password, firstName, lastName } = req.body;
      const hash = bcrypt.hashSync(password, 5);
    
      try {
        await adminModel.create({
          email,
          password: hash,
          firstName,
          lastName
        });
        res.json({ message: "you are signed up" });
      } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Signup failed", error: error.message });
      }

})

adminRouter.post('/signin',async(req,res)=>{

     const { email, password } = req.body;
    
      try {
        const admin = await adminModel.findOne({ 
            email 
        }); // will returm me a object , which has the same email 
    
        if (admin) {
          const passwordMatch = bcrypt.compareSync(password, admin.password); 
    
          if (passwordMatch) {
            const token = jwt.sign({ userId: admin._id }, Jwt_admin_secret); 
            res.json({ token });
          } 
          
          
          else {
            res.status(401).json({ message: "Invalid credentials" });
          }
        } 
        
        
        else {
          res.status(404).json({ message: "User not found" }); 
        }
      } catch (error) {
        console.error("Error during signin:", error);
        res.status(500).json({ message: "Signin failed", error: error.message });
      }
    
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



