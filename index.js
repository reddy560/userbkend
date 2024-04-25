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

app.listen(5000)