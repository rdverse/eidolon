//common js modules
const express = require('express');
// import express from 'express' es25 modules

require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);


// app.get('/',  (req,res)=>  {
// res.send({ hi : "sdfa"});
// });

const PORT =  process.env.PORT || 2000;
app.listen(PORT, () => {console.log(`APp is up and running at PORT : ${PORT}`);});
