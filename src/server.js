// const express = require('express')
import express from 'express'
const app = express()

const hostname = `localhost`
const port = 3000
app.get(`/`, function (req, res) {
  res.send(`<h1>Hello Duong<h1>`)
})

app.listen(port, hostname, () => {
    console.log(`server is running at ${hostname}:${port}/`)
})
