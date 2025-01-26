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

async function getAllListings(req, res) {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching listings" });
  }
}

module.exports = {
  createNewListing,
  getAllListings,
};
