const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud-database'
})

conn.connect((err) => {
    if(err) throw err
})

module.exports = conn