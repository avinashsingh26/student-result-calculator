document.getElementById("calculate").addEventListener("click", function() {

    let studentName = document.getElementById("name").value;

    let hindiMarks = document.getElementById("hindi").value;
    let englishMarks = document.getElementById("english").value;
    let mathsMarks = document.getElementById("maths").value;
    let scienceMarks = document.getElementById("science").value;
    let computerMarks = document.getElementById("computer").value;

    let total = Number(hindiMarks) + Number(englishMarks) + Number(mathsMarks) + Number(scienceMarks) + Number(computerMarks);

    console.log(total);

    let percentage = (total / 500) * 100;

    console.log(percentage);

    if (percentage >= 33) {
        document.getElementById("result").innerHTML = `
            <h2>Student Result</h2>
            <p>Name: ${studentName}</p>
            <p>Total Marks: ${total} / 500</p>
            <p>Percentage: ${percentage}%</p>
            <p>Status: PASS</p>
        `;
    } else {
        document.getElementById("result").innerHTML = `
            <h2>Student Result</h2>
            <p>Name: ${studentName}</p>
            <p>Total Marks: ${total} / 500</p>
            <p>Percentage: ${percentage}%</p>
            <p>Status: FAIL</p>
        `;
    }

});
