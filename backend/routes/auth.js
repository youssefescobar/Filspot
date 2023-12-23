const router = require('express').Router();
const { model } = require('mongoose');
const user = require('../models/users');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');
//reg
router.post('/register', async (req, res) => {

    const newUser = new user({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
})
//login
router.post('/login', async (req, res) => {

    try {
        const user = await user.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json("Wrong credentials");
            return;
        }
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if (originalPassword !== req.body.password) {
            res.status(401).json("Wrong credentials");
            return;
        }
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }.process.env.SECRET_KEY,{
            expiresIn:"2d"
        });
            
        
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;