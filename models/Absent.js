const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "student_username": { type: String, required: true },
        "student_password": { type: String, required: true },


    }
)

let absentModel = mongoose.model("absenties", schema)
module.exports = { absentModel }




const hod_schema = mongoose.Schema(
    {
        "HOD_username": { type: String, required: true },
        "HOD_Password": { type: String, required: true }
    }
)

let hodModel = mongoose.model("Hod", hod_schema)
module.exports = { hodModel }




const faculty_schema = mongoose.Schema(
    {
        "faculty_username": { type: String, required: true },
        "faculty_password": { type: String, required: true }
    }
)
let facultyLoginModel = mongoose.model("Faculty_Login", faculty_schema)
module.exports = { facultyLoginModel }



const StudLeaves_schema = mongoose.Schema(
    {
        "name": { type: String, required: true },
        "batch": { type: String, required: true },
        "rollno": { type: String, required: true },
        "Sdate": { type: String, required: true },
        "Edate": { type: String, required: true },
        "Tdate": { type: String, required: true },
        "reasonforleave": { type: String, required: true },
        "Label": { type: String, required: true }
    }
)
let StudLeavesModel = mongoose.model("Stud_leaves", StudLeaves_schema)
module.exports = { StudLeavesModel }

const FacultyLeaves_schema = mongoose.Schema(
    {
        "name": { type: String, required: true },
        "IdNo": { type: String, required: true },
        "Sdate": { type: String, required: true },
        "Edate": { type: String, required: true },
        "Tdate": { type: String, required: true },
        "reasonforleave": { type: String, required: true },
        "Label": { type: String, required: true }
    }
)
let FacultyLeavesModel=mongoose.model("Faculty_Leaves",FacultyLeaves_schema)
module.exports={FacultyLeavesModel}