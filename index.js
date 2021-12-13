//common js modules
const express = require('express');
// import express from 'express' es25 modules
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
//for cookie
const passport = require('passport');
const  keys = require('./config/keys')
require('./models/user');
require('./services/passport');

//const { mongoURI } = require('./config/keys');
const app = express();

app.use(cookieSession({maxAge:30*7*24*60*60*1000,
                        keys : [keys.cookieKey]}
                        ));
app.use(passport.initialize());
app.use(passport.session());


console.log(keys.mongoURI);

mongoose.connect(keys.mongoURI)
        .then(console.log("Connected to mongo db"))
        .catch(err=> {console.log("Connecting to mongoose error:::" +err.stack)});

    require('./routes/authRoutes')(app);
// app.get('/',  (req,res)=>  {
// res.send({ hi : "sdfa"});
// });

const PORT =  process.env.PORT || 2000;
app.listen(PORT, () => {console.log(`APp is up and running at PORT : ${PORT}`);});