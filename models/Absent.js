const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {

    }
)

let absentModel=mongoose.model("absenties",schema)
module.exports={absentModel}