const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "class":{type:String,required:true},
        "date":{type:String,required:true},
        "rollno":{type:String,required:true},
        "leavedate":{type:String,required:true},
         "reasonforleave":{type:String,required:true}
      
    }
)

let absentModel=mongoose.model("absenties",schema)
module.exports={absentModel}