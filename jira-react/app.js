const express = require('express')
require("dotenv").config()

const bodyParser = require("body-parser")
const {dbConnection } = require ('./database/db')

const app = express()
const port = process.env.PORT


dbConnection()
app.use(bodyParser.json());
app.use("/api/test", require("./routes/test"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
