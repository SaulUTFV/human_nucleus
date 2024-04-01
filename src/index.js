import express from 'express'

const APP = express()
APP.get('/', (req, res) => {
    res.send('Hello World')
})

APP.listen(3000)
console.log("Server on port ", 3000)