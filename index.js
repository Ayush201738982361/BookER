const express = require("express");
const path = require("path");
const staticRouter = require("./routes/staticRouter");
const userRoutes = require("./routes/user");
const { connectDB } = require("./connection");
const port = 800;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectDB("mongodb://127.0.0.1:27017/BookER").then(() => {
  console.log("MongoDB Connected");
});

app.use("/", staticRouter);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
