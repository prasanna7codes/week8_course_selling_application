const mongoose = require("mongoose");





const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  //_id: ObjectId,
  email: {type: String, unique: true},
  password: String
});


const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  //_id: ObjectId,
  email: {type: String, unique: true},
  password: String
});

  const courseSchema = new Schema({ 
  title : String,
  description : String,
  price : Number,
  imageUrl : String,
  creatorid : { type: ObjectId, ref: 'admin' }
});



const purchaseSchema = new Schema({
  userId: { type: ObjectId, ref: 'users' },
  courseid: { type: ObjectId, ref: 'courses' }

});




const userModel = mongoose.model('users', userSchema);
const adminModel = mongoose.model('admins', adminSchema);
const courseModel = mongoose.model('courses', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);






module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
} 