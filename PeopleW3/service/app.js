const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config({ path: 'env' });

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION)
  .then(connection => {
    console.log('connected')
  })
  .catch( console.log() )
app.listen()
