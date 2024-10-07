// public/js/app.js
document.addEventListener("DOMContentLoaded", function () {
  // Basic client-side validation (if needed)
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const subject1Marks = parseInt(document.getElementById("subject1").value);
    const attendancePercentage = parseInt(
      document.getElementById("attendance").value
    );

    if (
      subject1Marks < 0 ||
      subject1Marks > 100 ||
      attendancePercentage < 0 ||
      attendancePercentage > 100
    ) {
      alert("Please enter valid marks or attendance percentages.");
      event.preventDefault();
    }
  });
});
