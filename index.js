let express=require("express")
let mongoose=require("mongoose")
const route = require("./routes/route")
let cors=require("cors")
let app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://vyshnavi:12345@cluster0.hzwb4zt.mongodb.net/demo").then(()=>{
    console.log("ok")
})
app.use("/",route)
app.get("/",(req,res)=>{
    res.send("hello from server")
})

app.get("/alluser",async(req,res)=>{
    try{
    let data=await resmodel.find()
    res.json(data)
    }
    catch(err)
    {
        res.send(err)
    }
})

app.post("/adduser",async(req,res)=>{
    try{
    let resobj=await resmodel.findById({"_id":req.body._id})
    if(resobj)
    {
        res.send("hno exists in db")
    }
    else{
  await  new resmodel(req.body).save()
  res.send("record added")
    }
    }
    catch(err)
    {
        res.send(err)
    }
})

app.listen(5000)
