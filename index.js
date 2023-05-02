const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Hello world')
})
const cardData=require('./cardData.json');

app.get('/homeCard',(red,res)=>{
    res.send(cardData)
})

app.listen(port,()=>{
    console.log('this server is running on port',{port})
})