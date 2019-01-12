// 引入数据库模块
const conn = require('./db.js');

// 引入express模块
const express = require('express');
const router = express();

// 引入control模块
const contr = require('./control.js')

// 获取所有英雄列表
router.get('/getallhero',contr.getallhero)


// 插入新的英雄
router.post('/addhero',contr.addhero)


// 根据id获取英雄信息
router.get('/gethero/:id',contr.gethero)

// 根据id更新英雄信息
router.post('/updatahero/:id',contr.updatahero)

// 根据id软删除英雄数据
router.get('/deletahero/:id',contr.deletahero)
module.exports = router;