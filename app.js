const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const{absentModel}=require("./models/Absent.js")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const app=express()
app.use(cors())
app.use(express.json())

const generateHashpassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

mongoose.connect("mongodb+srv://jophine:jophinepaul@cluster0.oyyvgui.mongodb.net/LeaveDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/HodSignIn",(req,res)=>
{
    let input=req.body
    absentModel.find({"HOD_username":req.body.HOD_username}).then(
        (response)=>{
            if(response.length>0)
                {
                    let dbHodPassword=response[0].password
                    console.log(dbHodPassword) 
                    bcrypt.compare(input.password,dbHodPassword,(error,isMatch)=>{

                        if(isMatch)
                            {
                               jwt.sign({HOD_username:input.HOD_username},"leave_app",{expiresIn:"1d"},(error,token)=>{
                                if(error){
                                    res.json({"status":"unable to create token"})
                                }
                                else
                                {
                                    res.json({"status":"success","userid":response[0]._id,"token":token})
                                }
                               })
                            }
                        else{
                            res.json({"status":"incorrect"})
                        }
                    })
                    
                }
            else{
                res.json({"status":"User Not Found"})
            }
        }
    )

})

    app.listen(8080,()=>{
    console.log("started")
    })