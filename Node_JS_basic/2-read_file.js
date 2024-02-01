const fs = require('fs');

function countStudents(path) {
  try {
    const studentData = fs.readFile(path, 'utf-8');
    const lineData = studentData.split('\n');

    const csStudents = [];
    const sweStudents = [];

    for (const line of lineData) {
      const student = line.split(',');

      if (student[3] === 'CS') {
        csStudents.push(student[0]);
      } else if (student[3] === 'SWE') {
        sweStudents.push(student[0]);
      }
    }

    console.log(`Number of students: ${lineData.length}`);
    console.log(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(
        ', '
      )}`
    );
    console.log(
      `Number of students in SWE: ${
        sweStudents.length
      }. List: ${sweStudents.join(', ')}`
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
