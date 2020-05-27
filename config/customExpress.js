const express = require('express')
const consign = require('consign')
const bobyParser = require('body-parser')

module.exports = () =>{
  const app = express()

app.use(bobyParser.urlencoded({extended: true}))
app.use(bobyParser.json())

consign()
  .include('controllers')
  .into(app)

  return app
}
