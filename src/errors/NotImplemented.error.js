const  BaseError=require('./BaseError');
const {StatusCodes}=require('http-status-codes');

class NotImplemented extends BaseError{
    constructor(resourcename){
        super("InternalServer",StatusCodes.NOT_IMPLEMENTED,`Not Implemented ${resourcename} !!`,{});
    }
}

module.exports=NotImplemented;