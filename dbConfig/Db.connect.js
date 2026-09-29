const mongoose = require('mongoose');

const uri = process.env.MONGO_URI
const Connect = ()=>{
mongoose
.connect(uri)
.then(()=>{
    console.log("database connected successfully")
})
.catch((error)=> console.log("database not connected"))
}

module.exports = Connect