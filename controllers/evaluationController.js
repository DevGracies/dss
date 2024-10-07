// controllers/evaluationController.js
const Evaluation = require("../models/evaluationModel"); // Import the model

exports.evaluatePerformance = async (req, res) => {
  const { studentName, studentId, subject1, attendance } = req.body;

  // Calculate the performance score
  const performanceScore =
    parseInt(subject1) * 0.7 + parseInt(attendance) * 0.3;

  let suggestion = "";
  if (performanceScore > 80) {
    suggestion = "Great job! Keep up the good work.";
  } else if (performanceScore > 50) {
    suggestion = "You are doing well, but there’s room for improvement.";
  } else {
    suggestion = "You need to work hard and improve your performance!";
  }

  // Create a new evaluation entry to save in the database
  const evaluation = new Evaluation({
    studentName,
    studentId,
    subject1,
    attendance,
    performanceScore,
    suggestion,
  });

  // Save the evaluation to the database
  try {
    await evaluation.save();
    res.send(`
      <h1>Performance Evaluation Results</h1>
      <p>Student Name: ${studentName}</p>
      <p>Performance Score: ${performanceScore}</p>
      <p>Suggestion: ${suggestion}</p>
      <a href="/">Back to Home</a>
    `);
  } catch (error) {
    console.error("Error saving evaluation:", error);
    res.status(500).send("Error saving evaluation data. Please try again.");
  }
};
