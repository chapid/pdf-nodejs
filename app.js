const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");


const port = 5000;

const app = express();

//set the publicx folder
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile('index.httml'); 
});

const pdfRoute = require('./routes/pdfmake');
app.use('/pdf',pdfRoute);

app.listen(port,()=>{
    console.log("Server running at port",port);
});

