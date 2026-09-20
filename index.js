const express = require("express")
const path = require("path")
const {add, substract} = require("./math")
//create the instance express application
const app = express();
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))//middleware














const name = "emmanuel"
const role = "admin"
const isAdmin = true
const studentsList = ["Adekoya", "emmanuel", "adegbite"]
const userName = "Haywhynism"
const isOnline = "isOnline"



app.get('/', (req, res)=>{
    res.render("home", {name, role, isAdmin, studentsList})
})


let todos =[]

app.get('/todo', (req, res)=>{
    res.render("todo", {todos})
})

app.post("/addTodo", (req, res)=>{
    console.log(req.body);
    const {todo} = req.body;
    todos.push(todo)
    console.log(todos);
    res.redirect("/todo")
    
})

app.post('/deleteTod', (req, res)=>{
    console.log("attempting to delete");
    console.log(req.body);
    const {index} = req.body;
    console.log(index);
    todos.splice(index, 1);
    res.redirect("/todo")  
    
    
})

app.get("/editTodo/:id", (req, res)=>{
    const editIndex = req.params.id
    const theTodo = todos[editIndex];
    res.render("edit", {editIndex, theTodo})
})


let blogs = []

app.get("/blogs", (req, res)=>{
    res.render("blog", {blogs})
})


app.post("/blogs", (req, res)=>{
    console.log(req.body);
    blogs.push(req.body);
    res.redirect("/blogs")
})

app.post("/editBlogs/:id", (req, res)=>{
    const editIndex = req.params.id;
    blogs[editIndex] = req.body;
    res.redirect("/blogs")
})

app.post("/deleteBlog", (req, res)=>{
    console.log(req.body);
    const {index} = req.body;
    blogs.splice(index, 1);
    res.redirect("/blogs")
})

app.get("/editBlogs/:id", (req, res)=>{
    const editIndex = req.params.id;
    const theBlog = blogs[editIndex];
    res.render("editBlogs", {editIndex, theBlog})
})





















//define the PORT that your application listens on
const PORT = 3001;




app.get("/", (req,res)=>{
    res.send("Homepage")
    
    
})

app.get("/profile", (req, res)=>{
    res.render("profile", {userName, isOnline})
} )

app.get("/web", (req,res) =>{
    res.send("This is my page")
    console.log(add(5,8));

})

//route parameters
app.get("/users/:id",(req, res) => {
    res.send(`you requested user with ID: ${req.params.id}`)
})

//Query strings
app.get("/search", (req, res)=>{
    res.send(`You searched for: ${req.query.terms}`)
})

app.get("/index", (req, res)=> {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.post("/submit", (req, res)=>{
    console.log(req.body);
    res.redirect('/thank-you')
    
})

// app.get("/userss", (req, res) =>{
//     res.send(name: "ade", user: "two")
// }) 

// app.get("/search", (req, res)=>{
//     res.send(`Results for: ${req.query.q}`)
// })


//START your server
app.listen(PORT, ()=> {
    console.log(`APP IS RUNNING ON PORT ${PORT}`);
    
})
