const express = require('express');
const router = express.Router();
const { 
    newmovie,
    getmovies,
    getsinglemovie,
 } = require('../controllers/moviecontroller')

router.get('/home', (req, res) => res.send('Welcome to the home page for customers'));
router.get('/account', (req, res) => res.send('User account information'));
router.get('/watchlist', (req, res) => res.send('User watchlist'));
router.get('/movies', getmovies);
router.get('/shows', (req, res) => res.send('List of TV shows for customers'));
router.get('/login', (req, res) => res.send('Login form for customers'));
router.get('/signup', (req, res) => res.send('Signup form for customers'));
router.get('/about', (req, res) => res.send('About page for customers'));

module.exports = router;