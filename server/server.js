const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user");
const { connectDB } = require("./connection");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

connectDB(process.env.MONGO_URL).then(() => {
  console.log("MongoDB Connected");
});

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
