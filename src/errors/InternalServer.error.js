const  BaseError=require('./BaseError');
const {StatusCodes}=require('http-status-codes');

class InternalServer extends BaseError{
    constructor(details){
        super("InternalServer",StatusCodes.INTERNAL_SERVER_ERROR,"Something went wrong !!",details);
    }
}

module.exports=InternalServer;