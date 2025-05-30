const students = [
  { name: 'Alice', age: 20, sex: 'F', score: 85 },
  { name: 'Bob', age: 22, sex: 'M', score: 90 },
  { name: 'Clara', age: 19, sex: 'F', score: 78 },
  { name: 'David', age: 21, sex: 'M', score: 92 },
  { name: 'Eva', age: 20, sex: 'F', score: 88 },
  { name: 'Frank', age: 23, sex: 'M', score: 81 },
  { name: 'Grace', age: 22, sex: 'F', score: 95 },
  { name: 'Henry', age: 20, sex: 'M', score: 77 },
  { name: 'Ivy', age: 21, sex: 'F', score: 84 },
  { name: 'Jack', age: 23, sex: 'M', score: 89 },
  { name: 'Kara', age: 19, sex: 'F', score: 90 },
  { name: 'Liam', age: 22, sex: 'M', score: 86 },
  { name: 'Maya', age: 20, sex: 'F', score: 91 },
  { name: 'Nate', age: 21, sex: 'M', score: 80 },
  { name: 'Olivia', age: 22, sex: 'F', score: 87 }
];
const studentTable = document.getElementById('student-data');
for (let student of students){
    const row= document.createElement('tr');
    const nameCell =document.createElement('td')
    nameCell.textContent=student.name;
    
    const ageCell = document.createElement('td');
      ageCell.textContent = student.age;
    
      const sexCell = document.createElement('td');
      sexCell.textContent = student.sex;
    
      const scoreCell = document.createElement('td');
      scoreCell.textContent = student.score;
    
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      row.appendChild(sexCell);
      row.appendChild(scoreCell);
    
      studentTable.appendChild(row);
    
}