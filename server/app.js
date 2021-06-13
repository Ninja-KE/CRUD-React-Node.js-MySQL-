const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const server = require('http').createServer(app)

const conn = require('./dbconfig')

const port = process.env.PORT || 3100
server.listen(port)
console.log(`server running on port ${port}`)

app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())


//post data
app.post('/submit-data', (req, res) => {
    const user = req.body.user

    const firstname = user.firstname
    const lastname = user.lastname
    const gender = user.gender
    const country = user.country
    const hobby = user.hobby

    const insert = "insert into persons values(null, '"+ firstname +"', '"+ lastname +"', '"+ gender +"', '"+ country +"', '"+ hobby +"')"
    conn.query(insert, (err) => {
        if(err) throw err
        let msg = 'data submitted successfully'
        res.send(msg)
    })
})


//fetch data
app.get('/fetch-data', (req, res) => {
    const select = 'select * from persons'
    conn.query(select, (err, results, fields) => {
        if(err) throw err
        const userList = []
        if(results.length > 0) {
            for(var i = 0; i < results.length; i++) {
                let users = {
                    'id': results[i].id,
                    'fname': results[i].fname,
                    'lname': results[i].lname,
                    'gender': results[i].gender,
                    'country': results[i].country,
                    'hobby': results[i].hobby
                }
                userList.push(users)
            }
            res.send(userList)
        } else {
            let msg = 'Sorry, there is no data to display'
            res.send(msg)
            console.log('there is no data to display')
        }
    
    })
})