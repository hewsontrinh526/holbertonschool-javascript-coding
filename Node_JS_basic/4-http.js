const app = require('http');
const port = 1245;

app.createServer(function (req, res) {
    res.write('Hello Holberton School!');
    res.end();
});

app.listen(port);

module.exports = app;