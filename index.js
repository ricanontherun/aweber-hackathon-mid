'use strict'

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const request = require('request')
const cors = require('cors')
const app = new express()

app.use(cors())

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/subscribe', (req, res) => {
  console.log(req.body)

  request.post("http://localhost:8888/1.0/accounts/1245628/lists/5009490/subscribers?ws.op=create", req.body, function(err, httpResponse, body) {
    return res.status(httpResponse.statusCode).send(body)
  })
})

app.get('/subscriber/:id', (req, res) => {
  const id = req.params.id

  request.get(`http://localhost:8888/1.0/accounts/1245628/lists/5009490/subscribers/${id}`, (req, res) => {

  })
})

app.listen(3000)