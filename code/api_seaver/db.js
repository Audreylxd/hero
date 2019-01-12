// 引入数据库模块
const mysql = require('mysql');
// 创建连接
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'hero001'
})
// 暴露conn
module.exports = conn;