const { Router } = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Jwt_user_secret = "abcd1234";

const userRouter = Router();
const { userModel } = require("../db");

userRouter.post('/signup', async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const hash = bcrypt.hashSync(password, 5);

  try {
    await userModel.create({
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
});

userRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ 
        email 
    }); // will returm me a object , which has the same email 

    if (user) {
      const passwordMatch = bcrypt.compareSync(password, user.password); 

      if (passwordMatch) {
        const token = jwt.sign({ userId: user._id }, Jwt_user_secret); 
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
});

userRouter.post('/purchases', (req, res) => {
  
});

module.exports = {
  userRouter: userRouter
};