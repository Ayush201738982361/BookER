const mongoose = require("mongoose");

const BooksSchema = mongoose.Schema({
  book_name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seller_name: {
    type: String,
    required: true,
  },
  seller_contact: {
    type: Number,
    required: true,
  },
});

const Book = mongoose.model("book_listings", BooksSchema);

module.exports = Book;
