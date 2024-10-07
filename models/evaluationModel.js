// models/evaluationModel.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the evaluation schema
const EvaluationSchema = new Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  subject1: {
    type: Number,
    required: true,
  },
  attendance: {
    type: Number,
    required: true,
  },
  performanceScore: {
    type: Number,
    required: true,
  },
  suggestion: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = mongoose.model("Evaluation", EvaluationSchema);
