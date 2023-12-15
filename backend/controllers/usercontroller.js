const User = require('../models/users');
const mongoose = require('mongoose');


// create new user
const newuser = async (req, res) => {

    const { name, email, password } = req.body;
    try{
        const newuser = await User.create({
            name : name,
            email : email,
            password : password
        })
        res.status(201).send(newuser);
        }
        catch(err){
            res.status(400).json({message: err.message});
        }
    }

// get all users 
const getusers = async (req, res) => {

    try{
        const users = await User.find();
        if (!users){
            return res.status(404).json({message: 'no users'});
        }
        res.status(200).send(users);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

//get single user
const getuser = async (req, res) => {

    const { id } = req.params;
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) { // check if id is valid
            return res.status(404).json({message: 'user not found'}); // if id is not valid
        }
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message: 'user not found'}); // if user not found
        }
        res.status(200).send(user);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

//delete user 
const deleteuser = async (req, res) => {

    const { id } = req.params;
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) { // check if id is valid
            return res.status(404).json({message: 'user not found'}); // if id is not valid
        }
        const user = await User.findOneAndDelete({_id: id});
        if(!user){
            return res.status(404).json({message: 'user not found'}); // if user not found
              }   
        res.status(200).send(user);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

//update user
const updateuser = async (req, res) => {

    const { id } = req.params;
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) { // check if id is valid
            return res.status(404).json({message: 'user not found'}); // if id is not valid
        }
        const user = await User.findOneAndUpdate({_id: id}, {
            ...req.body
        });
        if(!user){
            return res.status(404).json({message: 'user not found'}); // if user not found
              }   
        res.status(200).send(user);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}


module.exports = {
    newuser,
    getusers,
    getuser,
    deleteuser,
    updateuser
}

