//common js modules
const express = require('express');
// import express from 'express' es25 modules

const app = express();

app.get('/',  (req,res)=>  {
res.send({ hi : "sdfa"});
});
const PORT = process.env.PORT | 5000;
app.listen(PORT);