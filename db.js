const config = require("./config.json");
const mongoose = require("mongoose");
const Book = require("./model/Book");

mongoose.connect(process.env.MONGODB_URI || config.connectionString).then(
  () => {
    console.log("Connected to MongoDB :D");
  },
  err => {
    console.log("Error in connection on DB");
  }
);

module.exports = { Book };
