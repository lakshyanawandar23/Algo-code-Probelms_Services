const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/BaseError");

function errorHandler(err,req,res,next){
    if(err  instanceof BaseError){
         return res.status(err.statusCodes).json({
            success:false,
            message:err.message,
            error:err.details,
            data:{}

         })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:"NOT IMPEMNETED",
        error:err.details,
        data:{}

     })
}

module.exports=errorHandler;