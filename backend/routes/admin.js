const express = require('express');

const router = express.Router();
const { 
    newmovie,
    getmovies,
    getsinglemovie,
    deleteMovie,
    updatemovie
 } = require('../controllers/moviecontroller');

const {
    newuser,
    getusers,
    getuser,
    deleteuser,
    updateuser
    
} = require('../controllers/usercontroller');




router.get('/admin/home', (req, res) => res.json({ message: 'Welcome to the home page for admins' }));
router.get('/admin/movies', getmovies);
router.post('/admin/add', newmovie)
router.patch('/admin/edit/:movieId', updatemovie);
router.delete('/admin/remove/:movieId', deleteMovie);
router.post('/admin/adduser', newuser);
router.patch('/admin/edituser/:userId', updateuser);
router.delete('/admin/removeuser/:userId', deleteuser);

module.exports = router;