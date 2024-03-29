const express = require("express")
const cors = require('cors')
const { convertToEn, readFileAsync } = require("./utils")

const PORT = 4000

const server = express()
server.use(cors())

server.use(express.static('assets'))


server.get("/", (req, res) => {
  res.send("React bootcamp api")
})

const getProductsByCategory = (data) => {
  let items = []
  for (let i = 0; i < data.length; i++) {
    const v = data[i];
    const index = items.findIndex(x => x.id === v.category_id)
    if (index > -1) {
      items[index].products.push(v);
    } else {
      items.push({
        name: v.category,
        id: v.category_id,
        products: [v]
      })
    }
  }
  return items
}


const sortOptions = {
  "asc": (a, b) => a.name.localeCompare(b.name),
  "desc": (a, b) => b.name.localeCompare(a.name),
  "price_asc": (a, b) => a.price - b.price,
  "price_desc": (a, b) => b.price - a.price,
}
//api/products
//api/products/1
server.get("/api/products/:id?", async (req, res) => {
  const categoryId = req.params["id"]
  const query = convertToEn(req.query["q"] || "")
  const sorting = req.query["sorting"] || "asc"
  
  let data = await readFileAsync('db/products2.json')
  data = data.map(p => {
    p.searchTerm = convertToEn(p.name + p.category)
    return p
  }).filter(p => p.searchTerm.includes(query))

  let items = getProductsByCategory(data)

  if (categoryId) {
    items = items.filter(x => x.id === parseInt(categoryId))
  }

  const stortingFn = sortOptions[sorting] || sortOptions.asc

  items = items.map(x => {
    x.products = x.products.sort(stortingFn)
    return x
  })
  res.send(items)
})

server.get("/api/product/:id", async (req, res) => {
  const id = parseInt(req.params["id"] || "0")
  const items = await readFileAsync('db/products2.json')
  const item = items.find(x => x.id === id)
  res.send(item)
})

server.listen(PORT, () => {
  console.log(`Uygulamamız ${PORT} portunda çalışıyor`)
})