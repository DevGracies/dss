const express = require("express");
const controller = require("../controller/performance");
const router = express.Router();
const Performance = require("../model/performance.js");

router.get("/", (req, res) => {
  return res.json("welcome to performane home route");
});

router.post("/create", controller.createPerformance);
router.get("/all", async (req, res) => {
  const performance = require("../model/performance.js");
  const allperformance = await performance.find();
  return res.json(allperformance);
});
router.get("/myperformance/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const foundPerformance = await Performance.find({ studentId });
    return res.render("myperformance", {
      hasPerformance: foundPerformance.length > 0,
      myPerformance: foundPerformance,
    });
  } catch (err) {
    errMsg.push(err.message);
    req.flash("error", errMsg);
    return res.redirect("/student/homepage");
  }
});
module.exports = router;
