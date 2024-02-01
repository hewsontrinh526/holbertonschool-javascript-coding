const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n').slice(1);
    const csStudents = [];
    const sweStudents = [];

    for (const line of lines) {
      const student = line.split(',');

      if (student[3] === 'CS') {
        csStudents.push(student[0]);
      }
      if (student[3] === 'SWE') {
        sweStudents.push(student[0]);
      }
    }

    console.log(`Number of students: ${lines.length}`);
    console.log(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(
        ', ',
      )}`,
    );
    console.log(
      `Number of students in SWE: ${
        sweStudents.length
      }. List: ${sweStudents.join(', ')}`,
    );
  });
}

module.exports = countStudents;
