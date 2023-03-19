const { response } = require("express")
const express = require("express")

const app = express()

app.use(express.json())


app.get("/",(req,res)=>{
    response.send("Running at server 1")
})

app.listen(4500,()=>{
    console.log("running at  4500")
})