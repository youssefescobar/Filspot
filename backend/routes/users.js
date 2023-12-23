const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js');
const user = require('../models/users');
const { 
    newmovie,
    getmovies,
    getsinglemovie,
 } = require('../controllers/moviecontroller')
//update
router.put('/:id', async (req, res) => {
    
    
})
//delete
//get
//get all


module.exports = router;