const calculateGrade = (score) => {
  if (score >= 75) {
    return "A1";
  }
  if (score >= 70) {
    return "B2";
  }
  if (score >= 65) {
    return "B3";
  }
  if (score >= 60) {
    return "C4";
  }
  if (score >= 55) {
    return "C5";
  }
  if (score >= 50) {
    return "C6";
  }
  if (score >= 45) {
    return "D7";
  }
  if (score >= 40) {
    return "E8";
  }
  if (score >= 1) {
    return "F9";
  }
};

module.exports = {
  calculateGrade,
};
