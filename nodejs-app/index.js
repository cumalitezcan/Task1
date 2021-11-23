//create express structure
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index.js')
const app = express();

//allow getting json data with bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.json({info: 'inital route'})
})

//routes => (CRUD)
app.get('/students', db.students.getAll)
app.post('/student', db.students.getByName)
app.delete('/students', db.students.delByName)
app.post('/students', db.students.create)
app.put('/students', db.students.update)



app.listen(8080, () =>{
    console.log('port 8080 listening ...')
});
