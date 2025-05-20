const{ Router } = require("express");
const { userModel } = require("../db");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

Jwt_admin_secret="pqrst"

const adminRouter = Router();

const {adminModel}= require ("../db");
const {courseModel}= require ("../db");

const { adminMiddleware } = require("../middleware/admin");

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


adminRouter.post('/course',adminMiddleware,async (req,res)=>{
 const{title,description,imageUrl,price}=req.body;
 const adminId= req.userId;

 const course =await courseModel.create({
    title,description,imageUrl,price,creatorId :adminId
 })


 res.json({
    message : " course created",
    course_Id: course._id
 })



    
})


adminRouter.put('/course',adminMiddleware,async(req,res)=>{

    const{title,description,imageUrl,price,course_Id}=req.body;
 const adminId= req.userId;

 const course =await courseModel.updateOne({_id:course_Id,
    creatorId:adminId
 },// so that the creator who created the course can only make changes in the id of the course he created 
    {
    title,description,imageUrl,price
 })



  res.json({
    message : " course updated",
    course_Id: course._id
 })
    
})


adminRouter.get('/course/bulk',adminMiddleware,async(req,res)=>{
    const adminId= req.userId;
    const courses = await courseModel.find({
        creatorId :adminId
    })// this will find all the courses belonging to the adminId

    res.json({
        your_courses : courses
    })
})




module.exports={
    adminRouter:adminRouter
}



