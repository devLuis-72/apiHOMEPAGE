const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Connection to the database ${process.env.DB_NAME} established.`)
});

module.exports = connection;