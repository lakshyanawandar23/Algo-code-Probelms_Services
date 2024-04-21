 
 class BaseError extends Error {
         constructor(statuscode,description,details,name){
            super(description);
            this.name=name,
            this.statuscode=statuscode,
            this.details=details
         }
 }

 module.exports=BaseError;