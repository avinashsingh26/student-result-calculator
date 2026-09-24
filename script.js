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

function appendResultLine(container, label, value) {
  const row = document.createElement("p");
  const title = document.createElement("strong");
  title.textContent = `${label}: `;
  row.appendChild(title);
  row.appendChild(document.createTextNode(String(value)));
  container.appendChild(row);
}

function renderResult(summary, container) {
  container.textContent = "";
  appendResultLine(container, "Name", summary.name);
  appendResultLine(container, "Total Marks", summary.total);
  appendResultLine(container, "Percentage", `${summary.percentage}%`);
  appendResultLine(container, "Grade", summary.grade);
  appendResultLine(container, "Result", summary.result);
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
      resultContainer.textContent = "Please enter valid input.";
      return;
    }

    const summary = calculateStudentResult(name, marks);
    renderResult(summary, resultContainer);
  });
}
