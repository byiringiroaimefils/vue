const express = require('express')
const app = express()
const port = 8080
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expressvue'
})

if (db) {
    console.log('Db is connected');
} else {
    console.log("Db is not connected");
}

app.post('/Instert', function (req, resp) {
    const sql = 'INSTERT INTO app VALUE("","John DOe","Johndoe@gmail.com")'
    function Insert(err,Data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Data Inserted")
            resp.json(Data)
        }
    }
    db.query(sql, Insert)
})

app.get('/Select', function (req, resp) {
    const sql = 'SELECT * FROM app'
    function Select(err,data) {
        if (err) {
        } else {
            console.log("se",data)
            resp.json(data)
        }
    }
    db.query(sql, Select)
})


app.listen(port, () => {
    console.log(`This app is running ${port}`);
})