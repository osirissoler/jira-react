const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT

app.use("/api/test", require("./routes/test"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
