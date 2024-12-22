const express = require("express");
const path = require("path");
const staticRouter = require("./routes/staticRouter");
const { connectDB } = require("./connection");

const app = express();
app.use(express.static(path.join(__dirname, "views")));

connectDB("mongodb://127.0.0.1:27017/BookER").then(() => {
  console.log("MongoDB Connected");
});

app.use("/", staticRouter);

app.listen(800, () => {
  console.log(`Server is running on port 800`);
});
