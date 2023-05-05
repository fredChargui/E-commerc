const mysql = require('mysql2')
const conn = require('../database/index.js')
module.exports = {
    getAll: function (callback) {
        const sql = 'SELECT * FROM users'
        conn.query(sql,  (err, results) =>{
          callback(err, results)
        });
      },
      addOne:(callBack,data)=>{
        const sql = 'insert into users set ?'
        conn.query(sql,data,(err,result)=>{
            callBack(err,result)
        })
    },
    getOne:(callback,info)=>{
        const sql = 'select * from users where email=? AND password=?'
        conn.query(sql,info,function(err,result){
            callback(err,result)
        })
    },
}