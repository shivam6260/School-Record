const data = JSON.stringify([
  {
    name: "rajiv",
    marks: {
      Maths: "18",
      English: "21",
      Science: "45",
    },
    rollNumber: "KV2017-5A2",
  },
  {
    name: "abhishek",
    marks: {
      Maths: "43",
      English: "30",
      Science: "37",
    },
    rollNumber: "KV2017-5A1",
  },
  {
    name: "shivam",
    marks: {
      Maths: "83",
      English: "30",
      Science: "37",
    },
    rollNumber: "KV2017-5A7",
  },

  {
    name: "zoya",
    marks: {
      Maths: "42",
      English: "31",
      Science: "50",
    },
    rollNumber: "KV2017-5A3",
  },
    
]);
// Converting JSON to JavaScript
const record = JSON.parse(data);

//To Sort the Array
const studentData = record.sort((a, b) => a.name.localeCompare(b.name));

const table = document.querySelector(".Table");

// Creating Array for TotalMarks of Student
const totalMarks = studentData.map((el) => {
  return (
    parseInt(el.marks.Maths) +
    parseInt(el.marks.English) +
    parseInt(el.marks.Science)
  );
});

//For finding Topper
let sum = totalMarks[0];
for (let i = 0; i <= totalMarks.length; i++) {
  if (totalMarks[i] > sum) {
    sum = totalMarks[i];
  }
}

for (let i = 0; i <= studentData.length; i++) {
  const name = studentData[i].name;
  const roll = studentData[i].rollNumber;
  const marks = totalMarks[i];

  //Creating HTML element
  const tableRow = document.createElement("tr");

  const tableData1 = document.createElement("td");
  tableData1.innerText = name;

  const tableData2 = document.createElement("td");
  tableData2.innerText = roll;

  const tableData3 = document.createElement("td");
  tableData3.innerText = marks;

  //Adding HTML element to Table
  tableRow.append(tableData1);
  tableRow.append(tableData2);
  tableRow.append(tableData3);

  // Checking the Pass or Fail Criteria
  if (
    studentData[i].marks.Maths < 20 ||
    studentData[i].marks.English < 20 ||
    studentData[i].marks.Science < 20
  ) {
    const tableData4 = document.createElement("td");
    tableData4.innerText = "Fail";
    tableData4.classList.red;
    tableRow.append(tableData4);
    tableRow.classList.add("red");
  }
  //Checking topper criteria
  else if (totalMarks[i] === sum) {
    const tableData4 = document.createElement("td");
    tableData4.innerText = "Topper";

    tableRow.append(tableData4);
    tableRow.classList.add("green");
  } else {
    const tableData4 = document.createElement("td");
    tableData4.innerText = "Pass";
    tableRow.append(tableData4);
  }

  table.appendChild(tableRow);
}
