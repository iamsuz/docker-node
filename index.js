const express = require('express')
const router = require('./routes/index');
let logger = require('morgan');
const app = express()
const bodyParser = require('body-parser')
const session = require('cookie-session')
// Add a routers

app.use(session({secret: process.env.SECRET}))
    .use(function(req,res,next){
        next()
    })
    .get('/todo', function(req,res){
        res.render('todo.ejs',{todolist: req.session.todolist})
    })
    .post('/todo/add',function(req,res){
        if(req.body.newtodo != ''){
            req.session.todolist.push(req.body.newtodo)
        }
        res.redirect('/todo')
    })
    .use(function(req,res,next){
        res.redirect('/todo')
    })
    
app.get('/',(req,res)=>{
    res.send("<h2>Hello There adsufh  !!</h2>")
})

// add a file xlsx reader 

app.use(logger(`:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :: (time: :response-time ms)`));


const port = process.env.PORT || 3000

app.listen(port,()=> console.log(`listing on a ${port}`))
