const mongoose = require("mongoose");


require('dotenv').config();
const mongokey = process.env.mongokey;
console.log("connected to ")
mongoose.connect("mongodb+srv://prasannasahoo0806:pua5dRtvJRTYxvGm@cluster0.lx9jyi5.mongodb.net/course_selling_app");


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  _id: ObjectId,
  email: {type: String, unique: true},
  password: String
});


const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  _id: ObjectId,
  email: {type: String, unique: true},
  password: String
});

  const courseSchema = new Schema({
  title : String,
  description : String,
  price : Number,
  imageUrl : String,
  creatorid : ObjectId
});



const purchaseSchema = new Schema({
  userId : ObjectId,
  courseid : ObjectId
});




const userModel = mongoose.model('users', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('courses', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);






module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
} 