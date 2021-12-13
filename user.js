const mongoose = require('mongoose');

const {Schema} = mongoose;


const userSchema = Schema({
googleID : String
// name : String,
// _id : String
});

// put usersceman in users
mongoose.model('users', userSchema);