const express = require("express")
const cors = require('cors')
const fs = require("fs")

const PORT = 4000

const server = express()
server.use(cors())

server.use(express.static('assets'))


server.get("/", (req, res) => {
  res.send("React bootcamp api")
})

//
server.get("/update", (req, res) => {
  const token = req.headers["token"]
  res.send({ status: true })
})

server.get("/api/products", (req, res) => {
  fs.readFile('db/products.json', 'utf8', function(err, data){
    res.send(JSON.parse(data))
  });
})

server.listen(PORT, () => {
  console.log(`Uygulamamız ${PORT} portunda çalışıyor`)
})