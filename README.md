# Student Result Calculator

A simple web-based Student Result Calculator built using HTML, CSS, and JavaScript.

## About the Project

This project allows users to enter a student's name and marks for five subjects. It calculates the total marks and percentage and displays whether the student has passed or failed.

## Features

* Enter student name
* Enter marks for five subjects:

  * Hindi
  * English
  * Maths
  * Science
  * Computer
* Calculate total marks
* Calculate percentage
* Display Pass/Fail status
* Show the result in a result card

## Technologies Used

* HTML
* CSS
* JavaScript

## How It Works

1. The user enters the student's name.
2. The user enters marks for five subjects.
3. JavaScript gets the entered values from the HTML inputs.
4. The marks are converted into numbers.
5. The total marks are calculated.
6. The percentage is calculated out of 500.
7. The percentage is checked using an `if-else` condition.
8. The final result is displayed on the webpage.

## Passing Criteria

The student is considered **PASS** when the percentage is 33% or above.

If the percentage is below 33%, the result is **FAIL**.

## Project Structure

```text
student-result-calculator/
│
├── index.html
├── style.css
└── script.js
```

## Learning

Through this project, I practiced:

* HTML form inputs
* CSS styling
* JavaScript variables
* `getElementById()`
* `.value`
* `Number()`
* Addition and percentage calculation
* `if-else` conditions
* `addEventListener()`
* `innerHTML`
* Template literals

