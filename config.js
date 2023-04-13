const mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'rOOT#1885',
    database : 'TIF',
    multipleStatements: true
})

conn.connect((error)=>{
    if(error){
        console.log('error connecting to mysql database'+ error.stack);
        return;
    }
    console.log('Connected successfully with thread ID'+ conn.threadId);
})

module.exports = conn;