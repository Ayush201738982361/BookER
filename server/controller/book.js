const Book = require("../model/books");

async function createNewListing(req, res) {
  try {
    await Book.create(req.body);
    res.status(201).json({ msg: "Listing created successfully" });
    console.log(req.body);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating listing" });
  }
}

module.exports = {
  createNewListing,
};
