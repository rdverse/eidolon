//common js modules
const express = require('express');
// import express from 'express' es25 modules

const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
passport.use(new googleStrategy)


// app.get('/',  (req,res)=>  {
// res.send({ hi : "sdfa"});
// });

const PORT =  process.env.PORT || 5005;
app.listen(PORT, () => {console.log(`APp is up and running at PORT : ${PORT}`);});
