const mongoose = require("mongoose");

const { Schema } = mongoose;

const evaluationSchema = new Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  academicPerformance: {
    type: Number,
    min: 1,
    max: 100,
    required: true,
  },
  classPaticipation: {
    type: Number,
    required: true,
  },
  goals: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const evaluation = mongoose.model("evaluation", evaluationSchema);

module.exports = evaluation;
