'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.status(200).send('Welcome to the restful API v1.0.0')
})

const server = app.listen(3000, function () {
  console.log('app running on port.', server.address().port)
})
