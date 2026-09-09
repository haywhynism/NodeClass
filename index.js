const express = require("express")

//create the express application
const app = express();

const {add, substract} = require("./math")


//define the PORT that your application listens on
const PORT = 3001;

console.log(add(5-8));


app.get("/", (req,res)=>{
    res.send("Homepage")
})

app.get("/web", (req,res) =>{
    res.send("This is my page")
})

//route parameters
app.get("/users/:id",(req, res) => {
    res.send(`you requested user with ID: ${req.params.id}`)
})

//Query strings
app.get("/search", (req, res)=>{
    res.send(`You searched for: ${req.query}.terms`)
})

app.get("index", (req, res)=> {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

// app.get("/user", (req, res) =>{
//     res.send(name: "ade", user: "two")
// }) 



//START your server
app.listen(PORT, ()=> {
    console.log(`APP IS RUNNING ON PORT ${PORT}`);
    
})
