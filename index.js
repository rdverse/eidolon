// checkout circleci for continuous integration and testing


//common js modules
const express = require('express');
// import express from 'express' es25 modules
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
//for cookie
const passport = require('passport');
const  keys = require('./config/keys');
const req = require('express/lib/request');
require('./models/user');
require('./services/passport');

//const { mongoURI } = require('./config/keys');
const app = express();

app.use(cookieSession({maxAge:30*7*24*60*60*1000,
                        keys : [keys.cookieKey]}
                        ));
// passport use cookies
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

if(process.NODE_ENV=="production"){
    // in production, direct react to the client assests
    app.use(express.static("client/build"));

    // send the client index html
    const path = require('path');
    app.get('*', (req,res)=>{
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT =  process.env.PORT || 2000;
app.listen(PORT, () => {console.log(`APp is up and running at PORT : ${PORT}`);});