//common js modules
const express = require('express');
// import express from 'express' es25 modules

const app = express();

app.get('/',  (req,res)=>  {
res.send({ hi : "sdfa"});
});
app.listen(5500);