const BaseError=require('./BaseError');
const {StatusCodes}=require('http-status-codes');

class BadRequest extends BaseError{
    constructor(propertyName){
        super("BadRequest",StatusCodes.BAD_REQUEST,`Something went wrong ${propertyName}`,{})
    }
}

module.exports=BadRequest;