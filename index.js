'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const packageFile = require('./package.json')
const slot = process.env.SLOT || 'default'
const version = packageFile.version
const apiInfo = `simple-api v${version} running in slot:${slot}`

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.status(200).send(apiInfo)
})

const server = app.listen(3000, function () {
  console.log('app running on port.', server.address().port)
})
