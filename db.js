const mongoose = require("mongoose");


require('dotenv').config();
const mongokey = process.env.mongokey;

mongoose.connect(mongokey);

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




const UserModel = mongoose.model('users', userSchema);
const adminModel = mongoose.model('users', adminSchema);
const courseModel = mongoose.model('users', courseSchema);
const purchaseModel = mongoose.model('users', purchaseSchema);






modeule.exports = {
    UserModel,
    adminModel,
    courseModel,
    purchaseModel
} 