const express = require("express")

//create the express application
const app = express();

//define the PORT that your application listens on
const PORT = 3000;

//START your server

app.listen(PORT, ()=> {
    console.log(`APP IS RUNNING ON PORT ${PORT}`);
    
})
