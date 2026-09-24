function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
}

function calculateStudentResult(name, marks) {
  const total = marks.reduce((sum, value) => sum + value, 0);
  const percentage = total / marks.length;
  const passed = marks.every((value) => value >= 35);
  const grade = passed ? getGrade(percentage) : "F";

  return {
    name,
    total,
    percentage: Number(percentage.toFixed(2)),
    grade,
    result: passed ? "Pass" : "Fail"
  };
}

function renderResult(summary) {
  return `
    <p><strong>Name:</strong> ${summary.name}</p>
    <p><strong>Total Marks:</strong> ${summary.total}</p>
    <p><strong>Percentage:</strong> ${summary.percentage}%</p>
    <p><strong>Grade:</strong> ${summary.grade}</p>
    <p><strong>Result:</strong> ${summary.result}</p>
  `;
}

if (typeof document !== "undefined") {
  const form = document.getElementById("resultForm");
  const resultContainer = document.getElementById("result");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const marks = ["subject1", "subject2", "subject3"].map((id) =>
      Number(document.getElementById(id).value)
    );

    if (!name || marks.some((value) => Number.isNaN(value) || value < 0 || value > 100)) {
      resultContainer.innerHTML = "<p>Please enter valid input.</p>";
      return;
    }

    const summary = calculateStudentResult(name, marks);
    resultContainer.innerHTML = renderResult(summary);
  });
}
