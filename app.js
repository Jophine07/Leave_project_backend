const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const{absentModel}=require("./models/Absent.js")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://lenex:ducati@cluster0.kfyoghs.mongodb.net/absentdb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/AddLeave",(req,res)=>{
    let input=req.body
    let leave=new absentModel(input)
    leave.save()
    console.log(leave)
    res.json({status:"test"})
})

app.post("/SearchLeave",(req,res)=>{
  let input=req.body
    absentModel.find(input).then((data)=>{
        res.json(data)
    })
})

app.post("/DeleteLeave",(req,res)=>{
    let input=req.body
    absentModel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({status:"test"})

        }
)})

app.get("/ViewAll",(req,res)=>{
    absentModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        })
})

app.listen(8005,()=>{
    console.log("server started")
})

