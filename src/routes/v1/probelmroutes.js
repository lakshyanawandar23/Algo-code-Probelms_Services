const express=require('express');
const { Probelmcontroller } = require('../../controllers');
const probelmroutes=express.Router();

probelmroutes.get('/ping',Probelmcontroller.pingProbelm);
probelmroutes.get('/:id',Probelmcontroller.getProbelm);
probelmroutes.get('/',Probelmcontroller.getProbelms);
probelmroutes.get('/',);
probelmroutes.delete('/:id',Probelmcontroller.deleteProbelm);
probelmroutes.post('/',Probelmcontroller.addProbelm);

module.exports=probelmroutes;