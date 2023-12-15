const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Welcome to the home page for guests' }));
router.get('/movies', (req, res) => res.send('List of movies for guests'));
router.get('/shows', (req, res) => res.send('List of TV shows for guests'));
router.get('/login', (req, res) => res.send('Login form for guests'));
router.get('/signup', (req, res) => res.send('Signup form for guests'));
router.get('/watch/:movieId', (req, res) => res.send(`Watch details for movie ${req.params.movieId}`));
router.get('/about', (req, res) => res.send('About page for guests'));
module.exports = router;