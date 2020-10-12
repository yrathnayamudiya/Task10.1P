// const express = require("express");
// const app = express();
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const mysql = require('mysql')

// const db = mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"sam"
// })
// app.use(cors)
// app.use(bodyParser.urlencoded({extended:true}))

// app.get('/',(req,res)=>{
//     console.log("Testing")
//     let qu = `INSERT INTO info (description, date, hardDisk, headphone, master, myplace, number, reward, title, todo, what) VALUES (
// '${req.body.description}',
// '${req.body.date}',
// '${req.body.hardDisk}',
// '${req.body.headphone}',
// '${req.body.master}',
// '${req.body.myplace}',
// '${req.body.number}',
// '${req.body.reward}',
// '${req.body.title}',
// '${req.body.todo}',
// '${req.body.what}'
//     ) `;
//     db.query(qu,(err,result)=>{
//     })
//     res.send("Hmmm")

// })


// app.listen(3001,()=>{
//     console.log("Running")
// })


const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"sam"
})
app.use(cors())
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/insert', (req, res) => {

    console.log(req.body)

  let qu = `INSERT INTO info (description, date,sentence, hardDisk, headphone, master, myplace, number, reward, title, todo, what) VALUES (
    '${req.body.description}',
    '${req.body.date}',
    '${req.body.sentence}',
    '${req.body.hardDisk}',
    '${req.body.headphone}',
    '${req.body.master}',
    '${req.body.myplace}',
    '${req.body.number}',
    '${req.body.reward}',
    '${req.body.title}',
    '${req.body.todo}',
    '${req.body.what}'
        ) `;
        db.query(qu,(err,result)=>{
            console.log(result);
            res.send(result)
        })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
