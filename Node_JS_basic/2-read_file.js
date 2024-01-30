function countStudents(path) {
  const fs = require('fs');
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n');
    let students = lines.filter((line) => line.length > 0);

    students = students.map((student) => student.split(','));

    students.shift();
    const csStudents = students.filter((student) => student[3] === 'CS');
    const sweStudents = students.filter((student) => student[3] === 'SWE');

    console.log(`Number of students: ${students.length}`);
    console.log(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents
        .map((student) => student[0])
        .join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents
        .map((student) => student[0])
        .join(', ')}`,
    );
  });
}

module.exports = countStudents;
