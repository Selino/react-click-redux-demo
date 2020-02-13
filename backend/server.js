const express = require("express")
const cors = require("cors")

// put env variables in the dotenv file
require("dotenv").config()

// create the express server
const app = express()
const port = process.env.PORT || 5000

// cors middleware
app.use(cors())

// allow parse JSON
app.use(express.json())

// start the server and report with [nodemon server]
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
