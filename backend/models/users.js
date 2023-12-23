const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   firstname:{type: String,required: true},
   lastname:{type: String,required: true},
   email:{type: String,required: true,uniqe: true},
   password:{type: String,required: true},
   isAdmin:{type: Boolean,required: true,default:false}

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)