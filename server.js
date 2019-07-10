const express = require("express");
const app = express();
const joi = require("@hapi/joi");

const mongoose = require("mongoose");
const db = require("./db");

const Books = db.Book;

// var ObjectId = require("mongodb").ObjectId;

app.get("/", (req, res) => {
  res.send("I m in the base URL");
});

// Search by ID////////////////////////////////////////////////////////
app.get("/searchById", async (req, res) => {
  let Book = await Books.find({ _id: "5d2259e3e7973938480e7ac2" });
  console.log("query", req.query);
  res.send(Book);
});

//View All Books/////////////////////////////////////////////////////////
app.get("/viewAllBooks", async (req, res) => {
  let Book = await Books.find().sort({ _id: -1 });
  // .limit(2);
  console.log("query", req.query);
  res.send(Book);
});

app.get("/viewAllBooksSort", async (req, res) => {
  let Book = await Books.find().sort({ _id: -1 });
  console.log("query", req.query);
  res.send(Book);
});

app.get("/viewAllBooksLimit", async (req, res) => {
  let Book = await Books.find().limit(2);
  console.log("query", req.query);
  res.send(Book);
});

// Adding Book////////////////////////////////////////////////////
app.post("/addBooks", (req, res) => {
  const book = new Books({ name: "Intro to Perl" });
  book.save().then(
    () => {
      console.log("Book added");
    },
    err => {
      console.log("Error in adding book");
    }
  );
  res.send(book);
});

// Delete Books/////////////////////////////////////////////////////////
app.delete("/deleteBooks", async (req, res) => {
  await Books.findOneAndDelete({ _id: "5d2259efcd48691bb4e402af" }).then(() => {
    console.log("Data Deleted"),
      err => {
        console.log("Error Delete");
      };
  });
});

//Update//////////////////////////////////////////////////////////////
app.put("/updateBooks", async (req, res) => {
  await Books.findOneAndUpdate(
    { _id: "5d2259e3e7973938480e7ac2" },
    { name: "OOP" }
  ).then(() => {
    console.log("Data Updated"),
      err => {
        console.log("Error Update");
      };
  });
});

// port 3000/////////////////////////////////////////////////////
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("I m on the PORT", port);
});
