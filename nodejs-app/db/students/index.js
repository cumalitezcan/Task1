const client = require('../db')

//get all
const getStudents = (request,response) => {
    client.query('SELECT * FROM students',(err,res) => {
        if(!err){
            response.status(200).json(res.rows);
        } else {
            console.log(err)
        }
    })
}


module.exports = {
    getStudents
}

