const mongoose=require('mongoose');

console.log("models")
const ProblemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'cannot be empty']
    },
    diffculty:{
        type:String,
        enum:["easy","medium","hard"],
        required:[true,"cannot be empty"],
        default:"easy"
    },
    description:{
        type:String,
        required:[true,"Cannot be empty"]
    },
    testCases:[{
            input:{
                type:String,
            },
            output:{
              type:String,
            }
    
        }],
        editorial:{
            type:String
        }
})

const Probelm=mongoose.model('Probelm',ProblemSchema);
module.exports=Probelm;
