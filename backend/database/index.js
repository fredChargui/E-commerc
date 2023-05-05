const mysql = require('mysql2')

const conn =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:'data'
})
conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('db connected')
    }
})
module.exports = conn