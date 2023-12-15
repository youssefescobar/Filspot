require('dotenv').config(); //import dotenv
const express = require('express'); //import express
const mongoose = require('mongoose'); //import mongoose
const user_routes = require('./routes/users'); //import user routes  
const guest_routes = require('./routes/guest'); //import guest routes
const admin_routes = require('./routes/admin'); //import admin routes

const app = express(); //create express app

app.use((req, res, next) => {
    console.log(req.path, req.method); //log reqs
    next();
})

app.use(express.json()); //use express json

//routes 
app.use(admin_routes); //starting route.
// connect to db 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to db');
        app.listen(process.env.PORT); //listen to reqs
    })
    .catch(err => {
        console.log(err);
    })



