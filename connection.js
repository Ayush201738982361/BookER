const mongoose = require("mongoose");

async function connectDB(url) {
  return await mongoose.connect(url);
}

module.exports = {
  connectDB,
};
