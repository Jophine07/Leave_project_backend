const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "HOD_username":{type:String,required:true},
        "HOD_Password":{type:String,required:true},
        "student_username":{type:String,required:true},
        "student_password":{type:String,required:true},
        "faculty_username":{type:String,required:true},
        "faculty_password":{type:String,required:true},
        "Sname":{type:String,required:true},
        "Fname":{type:String,required:true},
        "Sid":{type:String,required:true},
        "Fid":{type:String,required:true},
        "F_reason":{type:String,required:true},
        "S_reason":{type:String,required:true},
        
    }
)

let absentModel=mongoose.model("absenties",schema)
module.exports={absentModel}