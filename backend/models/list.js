const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({    
   title:{type: String,required: true, uniqe: true},
   genre:{type: String,required: true},
   type:{type: String,required: true},
   content:{type: [String],required: true}
}, { timestamps: true })

module.exports = mongoose.model('List', listSchema)