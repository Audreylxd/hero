const express = require('express');
const app = express();

// 静态托管文件
app.use(express.static('./views'));

// 讲台托管semantic ui文件
app.use('/semantic',express.static('./semantic'))
app.use('/node_modules',express.static('./node_modules'))
app.listen(3001,(err) =>{
    if(err) return console.log(err.message);
    console.log('http://127.0.0.1:3001');
})