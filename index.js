const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) throw err
      res.writeHead(200, {'Content-type': 'text/html'})
      res.write(data)
      res.end()
    })
  }

  else if (req.url === '/about') {
    fs.readFile('about.html', (err, data) => {
      if (err) throw err
      res.writeHead(200, {'Content-type': 'text/html'})
      res.write(data)
      res.end()
    })
  }

  else if (req.url === '/contact') {
    fs.readFile('contact-me.html', (err, data) => {
      if (err) throw err
      res.writeHead(200, {'Content-type': 'text/html'})
      res.write(data)
      res.end()
    })
  }

  else {
    fs.readFile('404.html', (err, data) => {
      if (err) throw err
      res.writeHead(200, {'Content-type': 'text/html'})
      res.write(data)
      res.end()
    })
  }
}).listen(8082)