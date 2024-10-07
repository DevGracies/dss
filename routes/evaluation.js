// routes/evaluation.js
const express = require("express");
const router = express.Router();
const evaluationController = require("../controllers/evaluationController");

// POST route for handling form submissions
router.post("/", evaluationController.evaluatePerformance);

module.exports = router;
