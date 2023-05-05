const mysql = require('mysql2')
const conn = require('../database/index.js')
module.exports = {
    getAllPosts: function (callback) {
        const sql = 'SELECT * FROM posts'
        conn.query(sql,  (err, results) =>{
          callback(err, results)
        });
      },
      addOnePosts:(callBack,data)=>{
        const sql = 'insert into posts set ?'
        conn.query(sql,data,(err,result)=>{
            callBack(err,result)
        })
    },
    getOnePosts:(callback,info)=>{
        const sql = 'select * from users where idposts=?'
        conn.query(sql,info,function(err,result){
            callback(err,result)
        })
    },
    deleteOne : (callback,id) =>{
        const sql = `DELETE FROM posts WHERE idposts = ?`
        conn.query(sql,id,function(err,results){
            callback(err,results)
        })
    }
}