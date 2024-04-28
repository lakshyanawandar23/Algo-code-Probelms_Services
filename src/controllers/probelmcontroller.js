const {
	StatusCodes,
	getStatusCode,
}=require('http-status-codes');
const BadRequest = require('../errors/BadRequest');
const NotImplemented = require('../errors/NotImplemented.error');
const {ProbelmService}=require('../services');
const {ProbelmRepository}=require('../repositiories');
const { param } = require('../routes');
const { error } = require('winston');

const probelmService=new ProbelmService(new ProbelmRepository());
function pingProbelm(req,res){
   return  res.send('Ping Probelms');
}

async function addProbelm(req,res){
      try {
         console.log("req body",req.body);
        const probelm=await   probelmService.createProbelm(req.body);
        console.log(probelm);
            return res.status(StatusCodes.OK).json({
               message:"create probelm succesfully",
               data:probelm,
               error:{}
            })
      } catch (error) {
         console.log("error ")
         next(error);
      }
}
async function getProbelm(req,res){
   const probelm=await probelmService.getProbelm(req.params.id);
   return res.status(StatusCodes.OK).json({
      message:"probelm by id",
      data:probelm,
      error:{}
   });
}

async function getProbelms(req,res,next){
  try{
   const probelms=await probelmService.getAllProbelms();
   console.log(probelms,"controllers");
   return res.status(StatusCodes.OK).json({
      message:"all probelms",
      data:probelms,
      error:{}
   });
}
   catch{
      next(error);
   }
}

async function deleteProbelm(req,res){
   try{
    const probelm= await probelmService.delete(req.params.id);
   return res.status(StatusCodes.OK).json({
      message:"deleted successfully",
      error:{},
      data:probelm
   });
   }
   catch{
      next(error);
   }
}
async  function updateProbelm(req,res){
 try {
   const probelm=await probelmService.Update(req.params.id,req.body);
   return res.status(StatusCodes.OK).json({
      message:"updated successfully",
      error:{},
      data:probelm
   });
 } catch  {
   console.log("update probelm")
 }
}


module.exports={addProbelm,getProbelm,getProbelms,deleteProbelm,pingProbelm,updateProbelm};