const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({    
    img:{type: String,required: true},
   title:{type: String,required: true},
   genre:{type: String,required: true},
   year:{type: Number,required: true,},
   desc:{type: String,required: true},
   video:{type: String,required: true},
   rating:{type: Number,required: true},
   Series:{type: Boolean,default: false},
   dir_name:{type: String,required: true},
   type:{type: String,required: true},
   cast:{type: Array,required: true}
}, { timestamps: true })

module.exports = mongoose.model('Movie', movieSchema)