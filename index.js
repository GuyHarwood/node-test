'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const packageFile = require('./package.json')
// APPSETTING_SLOT is an Azure defined environment variable
const azureSlot = process.env.SLOT || 'SLOT environment variable not defined'
const version = packageFile.version
const apiInfo = `simple-api v${version} running in azure slot:${azureSlot}`

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.status(200).send(apiInfo)
})

const server = app.listen(3000, function () {
  console.log('app running on port.', server.address().port)
})
