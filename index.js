const http = require('http')
const fs = require('fs')
const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'))
})

const errorHandler = (err, req, res, next) => {
  res.sendFile(path.join(__dirname, '/404.html'))
}

app.use(errorHandler)

http.createServer(app

  // if (req.url === '/about') {
  //   fs.readFile('about.html', (err, data) => {
  //     if (err) throw err
  //     res.writeHead(200, {'Content-type': 'text/html'})
  //     res.write(data)
  //     res.end()
  //   })
  // }

  // else if (req.url === '/contact') {
  //   fs.readFile('contact-me.html', (err, data) => {
  //     if (err) throw err
  //     res.writeHead(200, {'Content-type': 'text/html'})
  //     res.write(data)
  //     res.end()
  //   })
  // }

  // else {
  //   fs.readFile('404.html', (err, data) => {
  //     if (err) throw err
  //     res.writeHead(200, {'Content-type': 'text/html'})
  //     res.write(data)
  //     res.end()
  //   })
  // }
).listen(8082)