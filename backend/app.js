"use strict";

const express = require('express');
const helmet = require('helmet');

//const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');

const path = require('path');

const rateLimit = require('express-rate-limit');

const userRoutes = require('./routes/user');

const app = express();

app.use(helmet());
const limiter = rateLimit({
    windowMs: 30 * 60 * 1000,
    max: 100
});

app.use(limiter);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
    
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
    

app.use('/', userRoutes);
    
module.exports = app;