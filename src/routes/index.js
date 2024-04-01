const express=require('express');
const v1route = require('./v1/index');

const apirouter=express.Router();

apirouter.use('/v1',v1route);

module.exports=apirouter;