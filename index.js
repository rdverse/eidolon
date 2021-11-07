//common js modules
const express = require('express');
// import express from 'express' es25 modules
const mongoose = require('mongoose');
const  keys = require('./config/keys')
require('./models/user');
require('./services/passport');

//const { mongoURI } = require('./config/keys');


const app = express();

console.log(keys.mongoURI);
mongoose.connect(keys.mongoURI);
require('./routes/authRoutes')(app);
// app.get('/',  (req,res)=>  {
// res.send({ hi : "sdfa"});
// });

const PORT =  process.env.PORT || 2000;
app.listen(PORT, () => {console.log(`APp is up and running at PORT : ${PORT}`);});