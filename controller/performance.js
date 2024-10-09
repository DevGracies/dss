const Performance = require("../model/performance");
const Tools = require("../config/tools");

const createPerformance = async (req, res) => {
  let errMsg = [];
  let successMsg = [];
  try {
    const { course, score, attendance } = req.body;
    const date = Date.now();
    const studentId = req.user._id;
    const grade = Tools.calculateGrade(score);
    const createdPerformance = await Performance.create({
      studentId,
      course,
      grade,
      score,
      attendance,
      date,
    });
    if (!createdPerformance) {
      let message = "something went wrong couldn't create performance record";
      errMsg.push(message);
      req.flash("error", errMsg);
      return res.redirect("/student/homepage");
    }
    let message = "performance record created successfuly";
    successMsg.push(message);
    req.flash("success", successMsg);
    return res.redirect("/student/homepage");
  } catch (err) {
    errMsg.push(err.message);
    req.flash("error", errMsg);
    return res.redirect("/student/homepage");
  }
};

module.exports = {
  createPerformance,
};
