const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user");
const { connectDB } = require("./connection");
const cors = require("cors");
const port = 3001;

const app = express();
app.use(cookieParser());
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
