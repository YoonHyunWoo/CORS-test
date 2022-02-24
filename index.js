const express = require('express')
const app = express()
const ejs = require('ejs')
const cors = require('cors');
const bodyParser = require('body-parser')

app.get('/',(req,res)=>{
    res.render("index.ejs")
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send("Thanks to join test")
})
app.listen(3000)