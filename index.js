const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(800, () => {
  console.log(`Server is running on port 800`);
});
