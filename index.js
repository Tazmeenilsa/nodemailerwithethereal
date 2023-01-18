const express=require("express")
const app= express()
const port =5000

const sendMail=require("./controller/sendMail")
app.get("/",(req,res)=>{
    res.send("I'm a server")
})
app.get("/sendemail",sendMail)
const start=async()=>{
try {
    app.listen(port,()=>{
        console.log(`listening to the port no ${port}`)
    })
} catch (error) {
    console.log(error)
}
}

start()