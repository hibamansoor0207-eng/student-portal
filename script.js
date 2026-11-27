var button = document.getElementById("detailsBtn");
var result = document.getElementById("result");

var attendance = 86;

button.onclick = function () {
  if (attendance >= 75) {
    result.textContent = "Attendance: " + attendance + "% - Eligible to sit in exams.";
  } else {
    result.textContent = "Attendance: " + attendance + "% - Short of attendance.";
  }
};
