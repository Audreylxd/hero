const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database : 'mysql_001'
})
//sql语句
const sqlstr1 = 'select * from ggg'
conn.query(sqlstr1,(err,result) => {
    if(err) return console.log(err.message);
    console.log(result);
})