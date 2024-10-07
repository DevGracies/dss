const express = require("express");
const controller = require("../controller/student");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
  return res.json("welcome to student home route");
});

router.post("/create", controller.createStudent);
router.get("/all", async (req, res) => {
  const student = require("../model/student.js");
  const allstudent = await student.find();
  return res.json(allstudent);
});
router.post(
  "/login",
  passport.authenticate("student-login", {
    failureRedirect: "/",
    failureFlash: true,
    successRedirect: "/student/homepage",
  })
);
router.get("/homepage", controller.isLoggedIn, (req, res) => {
  let errMsg = req.flash("error");
  let successMsg = req.flash("success");
  const user = req.user;
  return res.render("homepage", {
    hasErr: errMsg.length > 0,
    hasSuccess: successMsg.length > 0,
    errMsg: errMsg,
    successMsg: successMsg,
    user,
  });
});
module.exports = router;
