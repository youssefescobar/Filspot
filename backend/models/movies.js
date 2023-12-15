const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    genre: String,
    year: Number,
    desc: String,
    rating: Number,
    cast: [String], 
    dir_name: String,
}, { timestamps: true })

module.exports = mongoose.model('Movie', movieSchema)