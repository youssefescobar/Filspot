const movie = require('../models/movies');
const mongoose = require('mongoose');

// create new movie
const newmovie = async (req, res) => {
    const { title, genre, year, desc, rating, cast, dir_name } = req.body; // destructure
    try{
        const newmovie = await movie.create({ // create new movie
            title: title,
            genre: genre,
            year: year,
            desc: desc,
            rating: rating,
            cast: cast,
            dir_name: dir_name
        })
        res.status(201).send(newmovie); // send new movie

    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

// get all movies
const getmovies = async (req, res) => {
    try{
        const movies = await movie.find({}).sort({createdAt: -1}); // get all movies
        res.status(200).send(movies); // send all movies
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

// get a single movie
const getsinglemovie = async (req, res) => {
    const { id } = req.params; // get id from params
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) { // check if id is valid
            return res.status(404).json({message: 'Movie not found'}); // if id is not valid
        }
        const movie = await movie.findById(id); // get movie by id
        if(!movie){
         return res.status(404).json({message: 'Movie not found'}); // if movie not found
           }   
        res.status(200).send(movie); // send movie
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

// delete movie
const deleteMovie = async (req, res) => {
    const { id } = req.params; // get id from params
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) { // check if id is valid
            return res.status(404).json({message: 'Movie not found'}); // if id is not valid
        }
        const movie = await movie.findOneAndDelete({_id: id}); // delete movie by id
        if(!movie){
         return res.status(404).json({message: 'Movie not found'}); // if movie not found
           }   
        res.status(200).send(movie); // send movie
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

//update movie
const updatemovie = async (req, res) => {
    const { id } = req.params; // get id from params
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) { // check if id is valid
            return res.status(404).json({message: 'Movie not found'}); // if id is not valid
        }
        const movie = await movie.findOneAndUpdate({_id: id}, {
            ...req.body
        }); // update movie by id
        if(!movie){
         return res.status(404).json({message: 'Movie not found'}); // if movie not found
           }   
        res.status(200).send(movie); // send movie
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

module.exports = {
    newmovie,
    getmovies,
    getsinglemovie,
    deleteMovie,
    updatemovie

}