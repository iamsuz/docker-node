const express = require('express')
const router = require('./routes/index');
let logger = require('morgan');
const app = express()

// Add a routers


app.get('/',(req,res)=>{
    res.send("<h2>Hello There adsufh  !!</h2>")
})

app.use(logger(`:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :: (time: :response-time ms)`));


const port = process.env.PORT || 3000

app.listen(port,()=> console.log(`listing on a ${port}`))
