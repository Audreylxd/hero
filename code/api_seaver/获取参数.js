const express = require('express');
const app = express();

// app.get('/test',(req,res) => {
//     res.send(req.query);
// })
app.get('/test1/:username/:password',(req,res) => {
    const data = req.params;
    console.log(data);
    res.send(data);
})

app.listen(3000,(err) => {
    if(err) return console.log(err.message);
    console.log('http://127.0.0.1:3000');
})