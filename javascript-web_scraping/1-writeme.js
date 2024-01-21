#!/usr/bin/node
const fs = require('fs');
const file = process.argv[2];
const text = process.argv[3];
fs.writeFile(file, text, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});