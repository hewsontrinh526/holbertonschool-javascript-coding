const fs = require('fs').promises;

async function readDatabase(filepath) {
    try {
        const data = await fs.readFile(filepath, 'utf-8');
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1).map((line) => line.split(','));
        const cs = [];
        const swe = [];

        for (let i = 0; i < students.length; i += 1) {
            if (students[i][3] === 'CS') {
                cs.push(students[i][0]);
            } else if (students[i][3] === 'SWE') {
                swe.push(students[i][0]);
            }
        }

        return ({
            CS: cs,
            SWE: swe,
        });
    } catch (error) {
        throw new Error('Cannot load the database')
    }
}

module.exports = readDatabase;
