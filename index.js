const express = require('express');
const cors = require('cors');
const convert_to_unicode = require('./converter');
require('dotenv').config()

const app = express();

//port

const port = process.env.PORT

app.listen(port,()=>console.log(`Server started running at the port: ${port}`))

//body parser
app.use(express.json())

//Cors
app.use(cors())

app.post('/api/convert',(req,res)=>{
    const unicodeText = convert_to_unicode(req.body.krutidevText.toString())
    res.json({message:"success",
        unicodeText
    })
})