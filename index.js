




const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const followers = require('instagram-followers')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render("index",{data:''})
})

app.post('/getProfile',(req,res) => {
    let username = req.body.username
    console.log(username)
    followers(username)
    .then((data) => {
        console.log(data)
        res.render('index',{data:data})
    })
    .catch((error) => {
        console.log(error +"hj")
    })
})

app.listen(5000,() => {
    console.log("App is listening on port 5000")
})