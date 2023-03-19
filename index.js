
const express = require("express")

const app = express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Running at server 1")
})

app.listen(4500,()=>{
    console.log("running at  4500")
})
