const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/create-task", async (req,res)=>{

const task = req.body.task
const phone = req.body.phone

try{

await axios.post(
"http://localhost:5678/webhook/whatsapp",
{
task:task,
phone:phone
}
)

res.json({
message:"Task sent successfully"
})

}catch(err){

res.status(500).json({
error:"Something went wrong"
})

}

})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})