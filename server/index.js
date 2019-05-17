const express = require("express")
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const app = express()





app.listen(8086, () => {
    console.log("Server listening on 8086")
    ;
})

app.get("/api/products", getProducts, (request, response) => {
    response.status(200).send(products)
})
app.get('/api/product/:id', getProduct);

