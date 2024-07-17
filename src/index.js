const express=require('express');
const {PORT}=require('./config/server.config.js')
const bodyParser=require('body-parser');
const app=express();
const apirouter=require('./routes');
const errorHandler = require('./utils/errorHandler.js');
const connecttodb = require('./config/db.config.js');
app.use(bodyParser.text());
app.use(bodyParser.json());

//console.log(PORT);
app.use('/api',apirouter);
app.get('/',(req,res)=>{
    res.send('Ping check');
})


app.use(errorHandler);
app.listen(PORT,async(req,res)=>{
    console.log("server is up",`${PORT}`);
    await connecttodb();
})