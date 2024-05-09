let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

let studentName
let total;
let grades = 0;

for (let i = 0; i < students.length; i++) {
  studentName = students[i].name;
  total = 0;
  for (let j = 0; j < students[i].scores.length; j++) {
    total +=  students[i].scores[j];
  grades = total / students[i].scores.length;
    
  }
  console.log(`Student ${studentName} got an average of ${grades.toFixed(2)}`);
}
