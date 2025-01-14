const express = require("express");
const userRoutes = require("./routes/user");
const { connectDB } = require("./connection");
const cors = require("cors");
const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB("mongodb://127.0.0.1:27017/BookER").then(() => {
  console.log("MongoDB Connected");
});

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
