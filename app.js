// app.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose"); // Add mongoose for DB connection
const evaluationRouter = require("./routes/evaluation");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/studentEvaluations", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/evaluate", evaluationRouter);

// Render homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
