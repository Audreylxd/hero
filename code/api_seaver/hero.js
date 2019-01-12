// 引入express模块
const express = require('express');

// 引入body-parse
const bodyParse = require('body-parser');
// 引入cors模块
const cors = require('cors');
// // 创建服务器
const app = express();
// 注册中间件
app.use(bodyParse.urlencoded({extended:false}))
// 注册cors中间件
app.use(cors());
// 引入路由模块
const router = require('./router.js');
app.use(router)
app.listen(5001,(err) => {
    if(err) return console.log(err.message);
    console.log('http://127.0.0.1:5001');
})