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
app.get('/:id',(req,res)=>{
    const id=req.params.id;
    const cardDetails=cardData.find(data=>data.id==id);
    res.send(cardDetails);
})

app.listen(port,()=>{
    console.log('this server is running on port',{port})
})