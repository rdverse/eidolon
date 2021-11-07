const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(new googleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
        }, (accessToken, refreshToken, profile, done) => {
            console.log(accessToken, refreshToken,profile,done);
            new User({googleID : profile.id}).save();
        }
    )   
);

