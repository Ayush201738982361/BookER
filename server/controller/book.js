const Book = require("../model/books");

async function createNewListing(req, res) {
  const { book_name, author, price, sellerName, sellerContact } = req.body;
  try {
    await Book.create({ book_name, author, price, sellerName, sellerContact });
    res.status(201).json({ msg: "Listing created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating listing" });
  }
}

module.exports = {
  createNewListing,
};
