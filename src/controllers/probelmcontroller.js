const {
	StatusCodes,
	getStatusCode,
}=require('http-status-codes');
const BadRequest = require('../errors/BadRequest');
function pingProbelm(req,res){
   return  res.send('Ping Probelms');
}

function addProbelm(req,res){
      try {
         throw new BadRequest(addProbelm);
      } catch (error) {
         next(error);
      }
}
function getProbelm(req,res){
   return res.status(StatusCodes.NOT_IMPLEMENTED).json("Not implemented");
}

function getProbelms(req,res){
   return res.status(StatusCodes.NOT_IMPLEMENTED).json("Not implemented");
}

function deleteProbelm(req,res){
   return res.status(StatusCodes.NOT_IMPLEMENTED).json("Not implemented");
}


module.exports={addProbelm,getProbelm,getProbelms,deleteProbelm,pingProbelm};