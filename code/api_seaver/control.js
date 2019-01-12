// 引入数据库
const conn = require('./db.js');
const moment = require('moment');
module.exports = {
    // 获取所有英雄信息
    getallhero:(req,res) => {
        // sql语句
        const sqlstr1 = 'select * from heros';
        conn.query(sqlstr1,(err,result) => {
            if(err) return res.send({'status':500,'msg':err.message,'data':null})
            res.send({'status':200,'msg':'ok','data':result});
        }) 
    },
    // 插入新的英雄
    addhero:(req,res) => {
        // 获取post请求参数
        const hero = req.body;
        // const datatime = new Date();
        // 获取年月日
        // const y = datatime.getFullYear();
        // const m = (datatime.getMonth() + 1).toString().padStart(2,'0');
        // const d = datatime.getDate().toString().padStart(2,'0');
        // const hh = datatime.getHours().toString().padStart(2,'0');
        // const mm = datatime.getMinutes().toString().padStart(2,'0');
        // const ss = datatime.getSeconds().toString().padStart(2,'0');
        // hero.ctime = y + '-' + m + '-' + '-' + d + ' ' + hh + ':' + mm + ':' + ss;
        hero.ctime = moment().format('YYYY-MM-DD hh:mm:ss');
        //sql语句
        const sqlstr2 = 'insert into heros set ?';
        conn.query(sqlstr2,hero,(err,result) => {
            if(err) return res.send({status:500,msg:err.message,data:null});
            res.send({status:200,msg:'ok',data:result});
        })
    },
    // 根据id获取英雄信息
    gethero:(req,res) =>{
        // 获取get方式url参数
        const id = req.params.id;
        console.log(id);
        // sql语句
        const sqlstr3 = 'select * from heros where id = ?';
        conn.query(sqlstr3,id,(err,result) =>{
            if(err) return res.send({status:500,msg:err.message,data:null});
            res.send({status:200,msg:'ok',data:result});
        })
    },

    // 根据id更新英雄数据
    updatahero:(req,res) => {
        // 获取url中的id
        const id = req.params.id;
        // 获取post参数
        const info = req.body;
        console.log(info);
        // sql语句
        const sqlstr4 = 'update heros set ? where id = ?'
        conn.query(sqlstr4,[info,id], (err,result) => {
            if(err) return res.send({status:500,msg:err.message,data:null});
            res.send({status:200,msg:'ok',data:result})
        })
    },

    // 根据id软删除英雄数据
    deletahero:(req,res) => {
        // 获取get方式url中的id
        const id = req.params.id;
        // sql语句
        const sqlstr5 = 'update heros set isdel = 1 where id = ?';
        conn.query(sqlstr5,id,(err,result) => {
            if(err) return res.send({status:500,msg:err.message,data:null});
            res.send({status:200,msg:'ok',data:result});
        })
    }
}