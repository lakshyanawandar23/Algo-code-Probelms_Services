const express=require('express');
const probelmroutes = require('./probelmroutes');

const v1route=express.Router();

v1route.use('/probelms',probelmroutes);

module.exports=v1route;