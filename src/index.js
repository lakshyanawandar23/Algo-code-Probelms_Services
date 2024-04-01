const express=require('express');
const {PORT}=require('./config/server.config.js')
const bodyParser=require('body-parser');
const app=express();
const apirouter=require('./routes');
app.use(bodyParser.text());
app.use(bodyParser.json());

console.log(PORT);
app.use('/api',apirouter);
app.get('/',(req,res)=>{
    res.send('Ping check');
})

app.listen(5000,(req,res)=>{
    console.log("server is up",`${PORT}`);
})