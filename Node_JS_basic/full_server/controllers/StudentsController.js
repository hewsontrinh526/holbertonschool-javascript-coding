const utils = require('../utils');

class StudentsController {
    static async getAllStudents(request, response) {
        try {
            const students = await utils.readDatabase('path_to_database');
            let output = 'This is the list of our students\n';
            const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            fields.forEach(field => {
                const studentsInField = students[field];
                output += `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}\n`;
            });
            response.status(200).send(output);
        } catch (error) {
            response.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(request, response) {
        try {
            const students = await utils.readDatabase(process.argv[2]);
            const { major } = request.params;
            if (major !== 'CS' && major !== 'SWE') {
                response.status(500).send('Major parameter must be CS or SWE');
            } else {
                const studentsByMajor = students[major].map(student => student.firstName).join(', ');
                response.status(200).send(`List: ${studentsByMajor}`);
            }
        } catch (error) {
            response.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
