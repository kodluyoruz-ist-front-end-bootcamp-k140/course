const express = require("express")
const cors = require('cors')


const PORT = 3000

const server = express()
server.use(cors())


server.get("/", (req, res) => {
  res.send("React bootcamp api")
})

//
server.get("/update", (req, res) => {
  const token = req.headers["token"]
  res.send({ status: true })
})

server.listen(PORT, () => {
  console.log(`Uygulamamız ${PORT} portunda çalışıyor`)
})