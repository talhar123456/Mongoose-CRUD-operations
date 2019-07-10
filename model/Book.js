const mongoose = require("mongoose");
const scheme = mongoose.schema;
const Book = { name: { type: String, require: true } };

module.exports = mongoose.model("new_books", Book);
