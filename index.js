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

app.listen(5000)
