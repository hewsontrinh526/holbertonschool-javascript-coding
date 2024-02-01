const fs = require('fs');

function readDatabase(filepath) {
    return new Promise((resolve, reject) => {
        fs.promises.readFile(filepath, 'utf-8')
            .then(data => {
                const lines = data.split('\n');
                const students = {
                    CS: [],
                    SWE: [],
                };

                lines.forEach(line => {
                    const [ , , field, firstName] = line.split(';');
                    if (field === 'CS' || field === 'SWE') {
                        students[field].push(firstName);
                    }
                });

                resolve(students);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports = { readDatabase };