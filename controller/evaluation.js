const Evaluation = require("../model/evaluation.js");

const createEvaluation = async (req, res) => {
  let errMsg = [];
  let successMsg = [];
  try {
    const { academicPerformance, classPaticipation, goals, comments } =
      req.body;
    const date = Date.now();
    const studentId = req.user._id;
    const createdEvaluation = await Evaluation.create({
      studentId,
      academicPerformance,
      classPaticipation,
      goals,
      comments,
      date,
    });
    if (!createdEvaluation) {
      let message = "something went wrong couldn't create evaluation record";
      errMsg.push(message);
      req.flash("error", errMsg);
      return res.redirect("/student/homepage");
    }
    let message = "evaluation record created successfuly";
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
  createEvaluation,
};
